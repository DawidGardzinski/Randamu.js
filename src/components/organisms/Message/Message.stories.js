import React from 'react';
import MessageElement from 'components/atoms/MessageElement/MessageElement';
import Message from './Message';

export default {
  component: Message,
  title: 'Organisms/Message',
};

export const message = () => (
  <Message>
    <MessageElement>Id</MessageElement>
    <MessageElement>Sex</MessageElement>
    <MessageElement>Name</MessageElement>
    <MessageElement>Surname</MessageElement>
    <MessageElement>Car</MessageElement>
  </Message>
);
