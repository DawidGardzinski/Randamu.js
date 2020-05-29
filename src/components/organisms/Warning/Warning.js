import React from 'react';
import styled, { css } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import warningIcon from 'assets/warning.svg';
import PropTypes from 'prop-types';
import Curtain from 'components/atoms/Curtain/Curtain';
import { useTranslation } from 'react-i18next';

const StyledWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) =>
    theme.color.white};
  display: grid;
  justify-items: center;
  height: 500px;
  width: 340px;
  align-items: center;
  border: solid 5px
    ${({ theme }) => theme.color.darkRed};
  padding: 20px;
  color: ${({ theme }) => theme.color.darkRed};
  z-index: 9999;
  @media (min-width: 730px) {
    width: 730px;
    height: 300px;
  }
`;

const StyledButton = styled(Button)`
  background-color: ${({ theme }) =>
    theme.color.darkGreen};
  width: 225px;
  color: ${({ theme }) => theme.color.white};
  padding: 5px 70px;
  height: 35px;
  margin: 7px 0;
  font-size: ${({ theme }) => theme.fontSize.s};
  ${({ deny }) =>
    deny &&
    css`
      background-color: ${({ theme }) =>
        theme.color.darkRed};
    `};

  @media (min-width: 730px) {
    margin: 5px;
  }
`;

const WarningHeading = styled.h2`
  text-transform: uppercase;
  position: relative;
  padding-left: 45px;
  ::before {
    position: absolute;
    content: '';
    width: 40px;
    height: 40px;
    background-image: url(${warningIcon});
    display: inline-block;
    background-size: 40px;
    background-repeat: no-repeat;
    background-position: 50%;
    transform: translate(-120%, -20%);
  }
`;

const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  text-align: center;
  margin-top: 5px;
  font-weight: ${({ theme }) =>
    theme.fontWeight.bold};
  align-self: start;
`;

const FlexboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 730px) {
    flex-direction: row;
  }
`;

const Warning = ({
  clickConfirm,
  clickDeny,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <StyledWrapper>
        <WarningHeading>
          {t('warning')}
        </WarningHeading>
        <StyledParagraph>
          {t('warning desc')}
        </StyledParagraph>
        <FlexboxWrapper>
          <StyledButton onClick={clickConfirm}>
            {t('yes')}
          </StyledButton>
          <StyledButton onClick={clickDeny} deny>
            {t('no')}
          </StyledButton>
        </FlexboxWrapper>
      </StyledWrapper>
      <Curtain />
    </>
  );
};

Warning.propTypes = {
  clickConfirm: PropTypes.func.isRequired,
  clickDeny: PropTypes.func.isRequired,
};

export default Warning;
