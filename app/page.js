'use client';
import { Box, Button, Stack, TextField } from '@mui/material';
import { useState } from 'react';

export default function Home() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi I'm the Headstarter Support Agent, how can I assist you today?",
    },
  ]);

  const [message, setMessage] = useState('');

  // Function to send a message
  const sendMessage = async () => {
    // Clear the message input
    setMessage('');

    // Append the user's message to the messages state
    setMessages((messages) => [
      ...messages,
      { role: 'user', content: message },
      { role: 'assistant', content: '' },
    ]);

    // Send a POST request to the /api/chat endpoint with the user's message
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // removed ... messages because kept getting the same message (response to first question)
      body: JSON.stringify([{ role: 'user', content: message }]),
    });

    // If the response is successful
    if (response.ok) {
      // Get the response body as a readable stream
      const reader = response.body.getReader();
      // Create a text decoder
      const decoder = new TextDecoder();

      let done = false;
      let text = '';

      // Read the response stream
      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        
        // If there is data in the stream
        if (value) {
          // Decode the data and append it to the text
          text += decoder.decode(value, { stream: true });
          // Update the messages state by appending the decoded text to the last message from the assistant
          setMessages((messages) => {
            const lastMessage = messages[messages.length - 1];
            const otherMessages = messages.slice(0, messages.length - 1);
            return [
              ...otherMessages,
              {
                ...lastMessage,
                content: lastMessage.content + text,
              },
            ];
          });
        }
      }
    } else {
      // If the response is not successful, log an error
      console.error('Error:', response.status);
    }
  };

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Stack direction="column" width="600px" height="700px" border="1px solid black" p={2} spacing={3}>
        <Stack direction="column" spacing={2} flexGrow={1} overflow="auto" maxHeight="100%">
          {messages.map((message, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent={message.role === 'assistant' ? 'flex-start' : 'flex-end'}
            >
              <Box
                bgcolor={message.role === 'assistant' ? 'primary.main' : 'secondary.main'}
                color="white"
                borderRadius={16}
                p={3}
              >
                {message.content}
                {message.role === 'assistant' && message.content === '' && (
                  <span className="typing-indicator">...</span>
                )}
              </Box>
            </Box>
          ))}
        </Stack>
        <Stack direction="row" spacing={2}>
          <TextField
            label="message"
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button variant="contained" onClick={sendMessage}>
            Send
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
