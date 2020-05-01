import React from 'react';
import Message from './Message';

export default {
  component: Message,
  title: 'Organisms/Message',
};

export const message = () => (
  <Message>
    <div>Test</div>
    <div>Test</div>
    <div>Test</div>
  </Message>
);
