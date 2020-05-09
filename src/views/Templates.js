import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import TopBar from 'components/molecules/TopBar/TopBar';
import Button from 'components/atoms/Button/Button';
import styled from 'styled-components';
import {
  useParams,
  Link,
  Redirect,
} from 'react-router-dom';
import { routes } from 'routes';

const StyledButton = styled(Button)`
  width: 275px;
`;

const Templates = () => {
  let { step } = useParams();
  step = parseInt(step, 10);

  return (
    <GridTemplate>
      {(step < 1 ||
        step > 3 ||
        Number.isNaN(step)) && (
        <Redirect to={routes.home} />
      )}
      <TopBar
        mode="Templates"
        path={
          step > 1
            ? `${routes.templates}/step/${
                step - 1
              }`
            : routes.home
        }
        step={step}
      />
      {step === 2 && (
        <StyledButton
          as={Link}
          to={`${routes.templates}/step/${
            step + 1
          }`}
          next={1}>
          next step
        </StyledButton>
      )}
      {step === 3 && (
        <StyledButton>Finish</StyledButton>
      )}
    </GridTemplate>
  );
};

export default Templates;
