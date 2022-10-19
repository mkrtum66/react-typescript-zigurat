import React from 'react';
import { ChatWidget } from '@papercups-io/chat-widget';

const HelpChat = () => (
  <ChatWidget
    // Pass in your Papercups account token here after signing up
    token="37fb5118-0122-49bd-911d-0a642221544c"
    // Specify a Papercups inbox
    inbox="a14dfd09-bf02-4406-a57c-23700065f7b7"
    title="Welcome to Zigurat"
    subtitle="Ask us anything in the chat window below 😊"
    newMessagePlaceholder="Start typing..."
    primaryColor="#32c8db"
    // Optionally pass in a default greeting
    greeting="Hi there! How can I help you?"
    // Optionally pass in metadata to identify the customer
    customer={{
      name: 'Test User',
      email: 'test@test.com',
      external_id: '123',
      metadata: { version: 1, plan: 'premium' }, // Custom fields go here
    }}
    // Optionally specify the base URL
    baseUrl="https://app.papercups.io"
    // Add this if you want to require the customer to enter
    // their email before being able to send you a message
    requireEmailUpfront
    // Add this if you want to indicate when you/your agents
    // are online or offline to your customers
    showAgentAvailability
    styles={{
      chatContainer: { backgroundColor: '#32c8db', color: 'red' },
      toggleContainer: { backgroundColor: 'transparent' },
      toggleButton: {
        backgroundColor: '#32c8db',
        userSelect: 'none',
        cursor: 'pointer',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        boxShadow: 'rgb(0 0 0 / 8%) 0 2px 4px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: '0.2s',
        padding: '0',
      },
    }}
  />
);

export default HelpChat;
