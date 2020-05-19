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

const StyledFormNumber = styled(Form)`
  display: flex;
  flex-direction: column;
  height: 275px;
  justify-content: space-between;
`;

const StyledInputNumberWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SecondStep = ({ number, onSubmit }) => (
  <>
    <Paragraph view={1}>
      How many objects do you want to have?
    </Paragraph>
    <Formik
      initialValues={{
        number,
      }}
      validate={(values) => {
        const errors = {};
        if (
          values.number < 1 ||
          values.number > 10000
        ) {
          errors.number =
            'Can not be less then 1 and more then 10000';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values, setSubmitting, 2);
      }}>
      {({ isSubmitting, errors }) => (
        <StyledFormNumber>
          <StyledInputNumberWrapper>
            <Label htmlFor="number">
              Give a number
            </Label>
            <Field
              as={Input}
              type="number"
              id="number"
              name="number"
            />
            {errors.number}
          </StyledInputNumberWrapper>
          <StyledButton
            type="submit"
            next={1}
            disabled={isSubmitting}>
            Next step
          </StyledButton>
        </StyledFormNumber>
      )}
    </Formik>
  </>
);

SecondStep.propTypes = {
  number: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SecondStep;
