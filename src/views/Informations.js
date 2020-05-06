import React from 'react';
import TopBar from 'components/molecules/TopBar/TopBar';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import styled from 'styled-components';
import { routes } from 'routes';
import GridTemplate from 'templates/GridTemplate';

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

const Informations = () => (
  <GridTemplate>
    <TopBar
      mode="Informations"
      path={routes.home}
    />
    <StyledWrapper>
      <StyledHeading>About</StyledHeading>
      <Paragraph>
        Randamu.js is JavaScript server less
        application which allows you to get
        example data for your projects
      </Paragraph>

      <StyledHeading>Introduction</StyledHeading>
      <Paragraph>
        Everything you have to do is choose mode.
        <b>Templates</b> mode contains previously
        prepared objects. <b>Custom</b> gives you
        opportunity to make objects on your own.
      </Paragraph>
    </StyledWrapper>
  </GridTemplate>
);

export default Informations;
