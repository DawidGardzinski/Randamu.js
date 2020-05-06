import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import TopBar from 'components/molecules/TopBar/TopBar';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import styled from 'styled-components';
import InputWithLabel from 'components/molecules/InputWithLabel/InputWithLabel';
import {
  useParams,
  Link,
  Redirect,
} from 'react-router-dom';
import { routes } from 'routes';

const StyledButton = styled(Button)`
  width: 275px;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  min-height: 450px;
  justify-content: space-between;
`;

const StyledUL = styled.ul`
  padding: 0;
  list-style: none;
  width: 270px;
  margin-bottom: 30px;

  @media (min-width: 730px) {
    max-height: 330px;
    overflow-y: scroll;
  }
`;

const StyledLi = styled.li`
  margin: 12px 0;
  padding-left: 20px;
`;

const StyledContainer = styled.div`
  display: grid;
  gap: 20px;
`;

const Custom = () => {
  let { step } = useParams();
  step = parseInt(step, 10);

  return (
    <GridTemplate>
      {(step < 1 ||
        step > 3 ||
        Number.isNaN(step)) && (
        <Redirect to="/" />
      )}
      <TopBar
        mode="Custom"
        path={
          step > 1
            ? `${routes.custom}/step/${step - 1}`
            : routes.home
        }
        step={step}
      />
      <StyledWrapper>
        {step === 1 && (
          <>
            <Paragraph view={1}>
              Select what your data object should
              include
            </Paragraph>
            <StyledUL>
              <StyledLi>
                <InputWithLabel
                  type="checkbox"
                  labelText="enabled"
                  id="box1"
                  name="box1"
                />
              </StyledLi>
              <StyledLi>
                <InputWithLabel
                  type="checkbox"
                  labelText="enabled"
                  id="box2"
                  name="box2"
                />
              </StyledLi>
              <StyledLi>
                <InputWithLabel
                  type="checkbox"
                  labelText="enabled"
                  id="box3"
                  name="box3"
                />
              </StyledLi>
              <StyledLi>
                <InputWithLabel
                  type="checkbox"
                  labelText="enabled"
                  id="box4"
                  name="box4"
                />
              </StyledLi>
              <StyledLi>
                <InputWithLabel
                  type="checkbox"
                  labelText="enabled"
                  id="box5"
                  name="box5"
                />
              </StyledLi>
              <StyledLi>
                <InputWithLabel
                  type="checkbox"
                  labelText="enabled"
                  id="box6"
                  name="box6"
                />
              </StyledLi>
              <StyledLi>
                <InputWithLabel
                  type="checkbox"
                  labelText="disabled"
                  id="box11"
                  name="box11"
                  disabled
                />
              </StyledLi>
            </StyledUL>
          </>
        )}
        {step === 2 && (
          <>
            <Paragraph view={1}>
              How many objects do you want to
              have?
            </Paragraph>
            <InputWithLabel
              type="number"
              labelText="Number"
              id="num"
              name="num"
            />
          </>
        )}
        {step === 3 && (
          <>
            <Paragraph view={1}>
              Choose file format
            </Paragraph>
            <StyledContainer>
              <InputWithLabel
                type="radio"
                labelText="JSON"
                id="radio"
                name="radio"
              />
              <InputWithLabel
                type="radio"
                labelText="YML"
                id="radio2"
                name="radio"
              />
            </StyledContainer>
          </>
        )}
        {step !== 3 ? (
          <StyledButton
            as={Link}
            to={`${routes.custom}/step/${
              step + 1
            }`}
            next={1}>
            next step
          </StyledButton>
        ) : (
          <StyledButton>Finish</StyledButton>
        )}
      </StyledWrapper>
    </GridTemplate>
  );
};
export default Custom;
