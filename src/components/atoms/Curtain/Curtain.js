import styled from 'styled-components';

const Curtain = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) =>
    theme.color.black};
  opacity: 0.5;
`;

export default Curtain;
