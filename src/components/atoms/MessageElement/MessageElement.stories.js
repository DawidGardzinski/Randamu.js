import React from 'react';
import styled from 'styled-components';
import MessageElement from './MessageElement';

export default {
  component: MessageElement,
  title: 'Atoms/MessageElement',
};

const ExampleList = styled.ul`
  list-style: none;
`;

export const messageElement = () => (
  <ExampleList>
    <MessageElement>Id</MessageElement>
    <MessageElement>Id</MessageElement>
    <MessageElement>Id</MessageElement>
  </ExampleList>
);
