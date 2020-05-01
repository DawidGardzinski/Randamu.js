import styled from 'styled-components';

const MessageElement = styled.li`
  height: 45px;
  line-height: 45px;
  position: relative;
  padding-left: 55px;
  margin: 12px 0;
  font-weight: ${({ theme }) =>
    theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.secondary};
  ::before {
    display: block;
    content: '';
    background-color: ${({ theme }) =>
      theme.color.secondary};
    border-radius: 15px;
    position: absolute;
    width: 45px;
    height: 45px;
    left: 0;
    top: 0;
  }
`;

export default MessageElement;
