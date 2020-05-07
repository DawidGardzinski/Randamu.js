import React from 'react';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { routes } from 'routes';

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

const Home = () => (
  <StyledWrapper>
    <StyledNav>
      <StyledHeading as="h2">
        Select mode
      </StyledHeading>
      <StyledNavButton
        as={NavLink}
        to={routes.templates}
        block={1}>
        Templates
      </StyledNavButton>
      <StyledNavButton
        as={NavLink}
        to={routes.custom}
        block={1}>
        Custom
      </StyledNavButton>
    </StyledNav>
    <StyledHelpButton
      as={Link}
      to={routes.info}
      info={1}>
      ?
    </StyledHelpButton>
    <StyledLangButton info>EN</StyledLangButton>
  </StyledWrapper>
);

export default Home;
