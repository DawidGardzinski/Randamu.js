import React from 'react';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { Formik, Form, Field } from 'formik';
import Input from 'components/atoms/Input/Input';
import Label from 'components/atoms/Label/Label';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

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

const SecondStep = ({ number, onSubmit }) => {
  const { t } = useTranslation();
  return(
  <>
    <Paragraph view={1}>
      {t("second step")}
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
          errors.number = t("input number error");
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
              {t("input number label")}
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
            {t("next step")}
          </StyledButton>
        </StyledFormNumber>
      )}
    </Formik>
  </>
)};

SecondStep.propTypes = {
  number: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SecondStep;
