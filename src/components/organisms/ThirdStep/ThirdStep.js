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

const StyledContainer = styled.div`
  display: grid;
  gap: 20px;
`;

const StyledFormRadio = styled(Form)`
  display: flex;
  flex-direction: column;
  height: 275px;
  justify-content: space-between;
  align-items: center;
`;

const ThirdStep = ({ fileType, onSubmit }) => {
  const { t } = useTranslation();
  return(
  <>
    <Paragraph view={1}>
      {t('third step')}
    </Paragraph>
    <Formik
      initialValues={{
        fileType,
      }}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values, setSubmitting, 3);
      }}>
      {({ isSubmitting }) => (
        <StyledFormRadio>
          <StyledContainer>
            <Field
              as={Input}
              type="radio"
              id="JSON"
              value="JSON"
              name="fileType"
            />
            <Label htmlFor="JSON" radio={1}>
              JSON
            </Label>
            <Field
              as={Input}
              type="radio"
              id="TXT"
              value="TXT"
              name="fileType"
            />
            <Label htmlFor="TXT" radio={1}>
              TXT
            </Label>
          </StyledContainer>
          <StyledButton
            type="submit"
            disabled={isSubmitting}>
            {t('finish')}
          </StyledButton>
        </StyledFormRadio>
      )}
    </Formik>
  </>
)};

ThirdStep.propTypes = {
  fileType: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ThirdStep;
