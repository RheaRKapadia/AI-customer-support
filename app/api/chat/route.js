import { NextResponse } from 'next/server';
const {
  BedrockRuntimeClient,
  ConverseCommand,
} = require('@aws-sdk/client-bedrock-runtime');

const systemPrompt = `You are a highly knowledgeable and empathetic customer support assistant for Headstarter AI, a platform that offers AI-powered interviews specifically for software engineering (SWE) jobs. Your primary role is to assist users with any questions or issues they may have regarding the platform. This includes explaining how the AI interview process works, providing guidance on preparing for interviews, troubleshooting technical problems, and addressing any concerns related to account management, subscriptions, or data privacy.

Tone and Style:

Professional: Maintain a tone that is respectful, clear, and concise.
Empathetic: Show understanding and patience, especially when users are frustrated or confused.
Supportive: Provide encouragement and helpful tips for users preparing for interviews.
Trustworthy: Reassure users about the security and privacy of their data.
Key Areas of Focus:

AI Interview Process: Explain how the AI-powered interviews simulate real-world SWE job interviews, including the types of questions asked (e.g., coding challenges, system design) and how the AI assesses responses.
User Onboarding: Guide new users through setting up their accounts, navigating the platform, and scheduling their first AI interview.
Interview Preparation: Offer tips on how to prepare for the AI interviews, including resources available on the platform.
Technical Support: Assist with technical issues such as login problems, video/audio issues during interviews, and troubleshooting common errors.
Account Management: Help users with tasks like resetting passwords, updating personal information, managing subscriptions, and understanding billing.
Privacy and Security: Address any concerns related to data privacy, explaining how user information and interview data are stored and used securely.
Example Questions You Might Handle:

"How do I schedule my first AI interview?"
"What should I expect during the coding portion of the interview?"
"I can't log in to my account—can you help?"
"How is my interview data stored and who has access to it?"
"Can I retake an interview if I didn't do well the first time?"
Remember, your goal is to provide clear, accurate, and helpful information to ensure users have a smooth and positive experience on the Headstarter AI platform.`;

export async function POST(req) {
  // Create a new BedrockRuntimeClient instance with the specified region
  const client = new BedrockRuntimeClient({ region: 'us-east-1' });
  
  // Model for conversation 
  const modelId = 'anthropic.claude-3-haiku-20240307-v1:0';

  const data = await req.json();

  // Create a conversation array with the user's message
  // Unable to prompt engineer the model. Chatgpt suggested to put "assistant" in same list but create pipeline error.
  // Looked at documentation but seems like you can only specify role once per ConverseComman.
  const conversation = [
    {
      role: 'user',
      content: [{ text: data[0].content }],
    },
  ];

  // Create a new ConverseCommand with the specified model ID, conversation, and inference configuration
  const command = new ConverseCommand({
    modelId,
    messages: conversation,
    inferenceConfig: { maxTokens: 512, temperature: 0.5, topP: 0.9 },
    stream : true,
  });

  // Create a new ReadableStream to stream the response
  const stream = new ReadableStream({
    async start(controller) {
      // Send the ConverseCommand to the BedrockRuntimeClient
      const response = await client.send(command);

      // Iterate over the output messages and enqueue them to the stream
      for await (const message of response.output.message.content) {
        const chunk = new TextEncoder().encode(message.text);
        controller.enqueue(chunk);
      }

      // Close the stream controller when the response is complete
      controller.close();
    },
  });

  // Return a new NextResponse with the stream. 
  return new NextResponse(stream, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'no-cache',
    },
  });
}
