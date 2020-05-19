import React from 'react';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { Formik, Form, Field } from 'formik';
import Input from 'components/atoms/Input/Input';
import Label from 'components/atoms/Label/Label';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import PropTypes from 'prop-types';

const StyledButton = styled(Button)`
  width: 275px;
`;

const StyledUL = styled.ul`
  padding: 0;
  list-style: none;
  width: 270px;
  margin-bottom: 30px;
  min-height: 250px;

  @media (min-width: 730px) {
    max-height: 330px;
    overflow-y: auto;
    height: 250px;
  }
`;

const StyledLi = styled.li`
  margin: 12px 0;
  padding-left: 20px;
`;

const SecondStep = ({
  objCollection,
  onSubmit,
  checkboxes,
}) => (
  <>
    <Paragraph view={1}>
      Select what your data object should include
    </Paragraph>
    <Formik
      initialValues={objCollection}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values, setSubmitting, 1);
      }}>
      {({ isSubmitting }) => (
        <Form>
          <StyledUL>
            {checkboxes.map((el) => (
              <StyledLi key={el}>
                <Field
                  as={Input}
                  type="checkbox"
                  id={el}
                  name={el}
                  disabled={el === 'id'}
                />
                <Label htmlFor={el} checkbox>
                  {el}
                </Label>
              </StyledLi>
            ))}
          </StyledUL>
          <StyledButton
            type="submit"
            next={1}
            disabled={isSubmitting}>
            Next step
          </StyledButton>
        </Form>
      )}
    </Formik>
  </>
);

SecondStep.propTypes = {
  objCollection: PropTypes.objectOf(
    PropTypes.bool,
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
  checkboxes: PropTypes.arrayOf(PropTypes.string)
    .isRequired,
};

export default SecondStep;
