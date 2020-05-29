import React from 'react';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { routes } from 'routes';
import { useTranslation } from 'react-i18next';

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  height: 100vh;
`;

const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) =>
    theme.fontSize.extral};
`;

const StyledNav = styled.nav`
  height: 210px;
  width: 260px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-between;
`;

const StyledNavButton = styled(Button)`
  display: block;
  line-height: 45px;
  min-width: 260px;
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

const StyledHelpButton = styled(Button)`
  position: fixed;
  right: 10px;
  bottom: 10px;
  display: block;
  font-weight: ${({ theme }) =>
    theme.fontWeight.bold};
`;

const StyledLangButton = styled(Button)`
  position: fixed;
  left: 10px;
  bottom: 10px;
`;


const Home = () => {
  const { t, i18n } = useTranslation();
  return(
  <StyledWrapper>
    <StyledNav>
      <StyledHeading as="h2">
        {t('select mode')}
      </StyledHeading>
      <StyledNavButton
        as={NavLink}
        to={routes.templates}
        block={1}>
        {t('templates')}
      </StyledNavButton>
      <StyledNavButton
        as={NavLink}
        to={routes.custom}
        block={1}>
        {t('custom')}
      </StyledNavButton>
    </StyledNav>
    <StyledHelpButton
      as={Link}
      to={routes.info}
      info={1}>
      ?
    </StyledHelpButton>
    <StyledLangButton onClick={() => {
      if(t('lang') === "EN"){
        i18n.changeLanguage('pl');
      } else{
        i18n.changeLanguage('en');
      }
      
    }} info>{t('lang')}</StyledLangButton>
  </StyledWrapper>
)}

export default Home;
