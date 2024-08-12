import { NextResponse } from 'next/server';
const {
  BedrockRuntimeClient,
  ConverseCommand,
  EmbedCommand,
} = require('@aws-sdk/client-bedrock-runtime');

import { BedrockAgentRuntimeClient, RetrieveAndGenerateCommand } from '@aws-sdk/client-bedrock-agent-runtime';
import { SecretsManagerClient, GetSecretValueCommand } from '@aws-sdk/client-secrets-manager';
import { ReadableStream } from 'stream/web'; // Import ReadableStream from the stream module

// Create a new BedrockAgentRuntimeClient instance with the specified region
//Use BedrockAgentRuntimeClient instead of BedrockRuntimeClient because it is used to access the knowledge base in bedrock
const bedrockAgentRuntimeClient = new BedrockAgentRuntimeClient({
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
});

// Function to retrieve a secret from AWS Secrets Manager
// Pinecone is linked to knowledge base, the api key for pinecone is stored in the AWS secret manager
//which is then encoded into a secret key
async function getSecret(secretName) {
  const client = new SecretsManagerClient({ region: 'us-east-1' });
  try {
    const command = new GetSecretValueCommand({ SecretId: secretName });
    const data = await client.send(command);
    if ('SecretString' in data) {
      return JSON.parse(data.SecretString);
    } else {
      throw new Error('SecretString not found in response');
    }
  } catch (error) {
    console.error('Error retrieving secret:', error);
    throw error;
  }
}

async function getContext(query) {
  try {
    const secretArn = process.env.SECRET_ARN; 
    const secrets = await getSecret(secretArn);
    
    // Verify retrieved secrets
    console.log('Retrieved secrets:', secrets);
    
    // const modelArn = secrets.modelArn;
    const modelArn = process.env.MODEL_ARN
    // const kbId = secrets.kb_id;
    const kbId = process.env.KB_ID

    // Verify the parameters being sent to the command
    const params = {
      input: {
        text: query,
      },
      //configurate the knowledge base based off of id and model ARN (titan embedding v1)
      retrieveAndGenerateConfiguration: {
        type: 'KNOWLEDGE_BASE',
        knowledgeBaseConfiguration: {
          knowledgeBaseId: kbId,
          modelArn: modelArn,
        }
      }
    };

    console.log('Command parameters:', params);

    const command = new RetrieveAndGenerateCommand(params);
    const response = await bedrockAgentRuntimeClient.send(command);

    // Verify the response from Bedrock
    console.log('Bedrock response:', response);

    if (response.output && response.output.text) {
      return response.output.text;
    } else {
      throw new Error('Response is missing output text');
    }
  } catch (error) {
    console.error('Error retrieving context:', error);
    throw error;
  }
}


// Exported POST function for handling requests
export async function POST(req) {
  // Retrieve the user query from the request
  const data = await req.json();
  const userQuery = data[0].content;

  // Retrieve context from Bedrock service using the user query
  const context = await getContext(userQuery);

  // Model for conversation 
  const modelId = 'anthropic.claude-3-haiku-20240307-v1:0';

  // Create a conversation array with the user's message
  const conversation = [
    {
      role: 'user',
      content: [{ text: context }], // Use the retrieved context as part of the conversation
    },
  ];

  // Create a ConverseCommand with the specified model ID, conversation, and inference configuration
  const command = new ConverseCommand({
    modelId,
    messages: conversation,
    inferenceConfig: { maxTokens: 512, temperature: 0.5, topP: 0.9 },
    stream: true,
  });

  // Create a new ReadableStream to stream the response
  const stream = new ReadableStream({
    async start(controller) {
      try {
        // Send the ConverseCommand to the BedrockRuntimeClient
        const response = await client.send(command);

        // Iterate over the output messages and enqueue them to the stream
        for await (const message of response.output.message.content) {
          const chunk = new TextEncoder().encode(message.text);
          controller.enqueue(chunk);
        }
        
        // Close the stream controller when the response is complete
        controller.close();
      } catch (error) {
        console.error('Error processing request:', error);
        controller.error(error);
      }
    },
  });

  // Return a new NextResponse with the stream
  return new NextResponse(stream, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'no-cache',
    },
  });
}








// const systemPrompt = `You are a highly knowledgeable and empathetic customer support assistant for Headstarter AI, a platform that offers AI-powered interviews specifically for software engineering (SWE) jobs. Your primary role is to assist users with any questions or issues they may have regarding the platform. This includes explaining how the AI interview process works, providing guidance on preparing for interviews, troubleshooting technical problems, and addressing any concerns related to account management, subscriptions, or data privacy.

// Tone and Style:

// Professional: Maintain a tone that is respectful, clear, and concise.
// Empathetic: Show understanding and patience, especially when users are frustrated or confused.
// Supportive: Provide encouragement and helpful tips for users preparing for interviews.
// Trustworthy: Reassure users about the security and privacy of their data.
// Key Areas of Focus:

// AI Interview Process: Explain how the AI-powered interviews simulate real-world SWE job interviews, including the types of questions asked (e.g., coding challenges, system design) and how the AI assesses responses.
// User Onboarding: Guide new users through setting up their accounts, navigating the platform, and scheduling their first AI interview.
// Interview Preparation: Offer tips on how to prepare for the AI interviews, including resources available on the platform.
// Technical Support: Assist with technical issues such as login problems, video/audio issues during interviews, and troubleshooting common errors.
// Account Management: Help users with tasks like resetting passwords, updating personal information, managing subscriptions, and understanding billing.
// Privacy and Security: Address any concerns related to data privacy, explaining how user information and interview data are stored and used securely.
// Example Questions You Might Handle:

// "How do I schedule my first AI interview?"
// "What should I expect during the coding portion of the interview?"
// "I can't log in to my account—can you help?"
// "How is my interview data stored and who has access to it?"
// "Can I retake an interview if I didn't do well the first time?"
// Remember, your goal is to provide clear, accurate, and helpful information to ensure users have a smooth and positive experience on the Headstarter AI platform.`;

// export async function POST(req) {

//   // Create a new BedrockRuntimeClient instance with the specified region
//   const client = new BedrockRuntimeClient({ 
//     region: 'us-east-1',
//     credentials: {
//         accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//         secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
//     }
//   });
  
//   const data = await req.json();
//   const userQuery = data[0].content;

//   // Model for conversation 
//   const modelId = 'anthropic.claude-3-haiku-20240307-v1:0';

//   // Model for embedding
//   // const modelId ='amazon.titan-embed-image-v1'

//   // Create a conversation array with the user's message
//   // Unable to prompt engineer the model. Chatgpt suggested to put "assistant" in same list but create pipeline error.
//   // Looked at documentation but seems like you can only specify role once per ConverseComman.
//   const conversation = [
//     {
//       role: 'user',
//       content: [{ text: userQuery }],
//     },
//   ];

//   // Create a new ConverseCommand with the specified model ID, conversation, and inference configuration
//   const command = new ConverseCommand({
//     modelId,
//     messages: conversation,
//     inferenceConfig: { maxTokens: 512, temperature: 0.5, topP: 0.9 },
//     stream : true,
//   });

//   // Create a new ReadableStream to stream the response
//   const stream = new ReadableStream({
//     async start(controller) {
//       // Send the ConverseCommand to the BedrockRuntimeClient
//       const response = await client.send(command);

//       // Iterate over the output messages and enqueue them to the stream
//       for await (const message of response.output.message.content) {
//         const chunk = new TextEncoder().encode(message.text);
//         controller.enqueue(chunk);
//       }

//       // Close the stream controller when the response is complete
//       controller.close();
//     },
//   });

//   // Return a new NextResponse with the stream. 
//   return new NextResponse(stream, {
//     headers: {
//       'Content-Type': 'text/plain',
//       'Cache-Control': 'no-cache',
//     },
//   });
// }


