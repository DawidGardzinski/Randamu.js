import React from 'react';
import TopBar from 'components/molecules/TopBar/TopBar';
import styled from 'styled-components';
import { routes } from 'routes';

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
`;

const StyledHeading = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.color.secondary};
  font-size: ${({ theme }) => theme.fontSize.l};
`;

const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const Informations = () => (
  <>
    <TopBar
      mode="Informations"
      path={routes.home}
    />
    <StyledWrapper>
      <StyledHeading>About</StyledHeading>
      <StyledParagraph>
        Randamu.js is JavaScript server less
        application which allows you to get
        example data for your projects
      </StyledParagraph>

      <StyledHeading>Introduction</StyledHeading>
      <StyledParagraph>
        Everything you have to do is choose mode.
        <b>Templates</b> mode contains previously
        prepared objects. <b>Custom</b> gives you
        opportunity to make objects on your own.
      </StyledParagraph>
    </StyledWrapper>
  </>
);

export default Informations;
