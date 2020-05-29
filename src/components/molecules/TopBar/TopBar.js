import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const StyledWrapper = styled.div`
  background-color: ${({ theme }) =>
    theme.color.white};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 7px 0;
  margin-bottom: 15px;

  @media (min-width: 730px) {
    border-radius: 25px;
    padding: 7px 10px;
    position: relative;
  }
`;

const StyledHeading = styled(Heading)`
  height: 35px;
  line-height: 35px;
  padding: 0 20px;
  color: ${({ theme }) => theme.color.darkGray};
  @media (min-width: 730px) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const StyledStep = styled.p`
  display: none;
  @media (min-width: 730px) {
    display: block;
    margin: 0;
    line-height: 35px;
    color: ${({ theme }) =>
      theme.color.secondary};
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: ${({ theme }) =>
      theme.fontWeight.bold};
  }
`;

const TopBar = ({ mode, path, step}) => {
  const { t } = useTranslation();
  return(
  <StyledWrapper>
    <Button as={Link} to={path} back={1}> {t('back')} </Button>
    <StyledHeading as="h2">{t(mode.toLowerCase())}</StyledHeading>
    {step !== 0 && (
      <StyledStep>{t('step')} {step}</StyledStep>
    )}
  </StyledWrapper>
)}

TopBar.defaultProps = {
  step: 0,
};

TopBar.propTypes = {
  mode: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  step: PropTypes.number,
};

export default TopBar;
