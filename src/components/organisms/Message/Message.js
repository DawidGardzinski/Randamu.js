import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import PropTypes from 'prop-types';
import Curtain from 'components/atoms/Curtain/Curtain';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { useTranslation } from 'react-i18next';

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: center;
  font-weight: ${({ theme }) =>
    theme.fontWeight.bold};
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) =>
    theme.color.white};
  height: 500px;
  width: 340px;
  border: solid 5px
    ${({ theme }) => theme.color.secondary};
  padding: 20px;
  color: ${({ theme }) => theme.color.secondary};
  z-index: 9999;
`;

const StyledHeading = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const StyledButton = styled(Button)`
  background-color: ${({ theme }) =>
    theme.color.secondary};
  width: 225px;
  color: ${({ theme }) => theme.color.white};
  padding: 5px 70px;
  height: 35px;
  margin: 7px 0;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  max-height: 280px;
  overflow: auto;
`;

const StyledParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.color.secondary};
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const Message = ({
  children,
  amount,
  fileType,
  click,
}) => {
  const { t } = useTranslation();
  return(
  <>
    <StyledWrapper>
      <div>
        <StyledHeading>
          {t('message heading')}
        </StyledHeading>
        <StyledList>{children}</StyledList>
        <StyledParagraph>
        {t('message amount')} {amount}
        </StyledParagraph>
        <StyledParagraph>
        {t('message fileFormat')} {fileType}
        </StyledParagraph>
      </div>
      <StyledButton onClick={click}>
        OK
      </StyledButton>
    </StyledWrapper>
    <Curtain />
  </>
)};

Message.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  amount: PropTypes.number.isRequired,
  fileType: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};

export default Message;
