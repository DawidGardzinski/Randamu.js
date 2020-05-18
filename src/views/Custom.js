import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import { connect } from 'react-redux';
import TopBar from 'components/molecules/TopBar/TopBar';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Label from 'components/atoms/Label/Label';
import { Redirect } from 'react-router-dom';
import { routes } from 'routes';
import { updateStore as updateStoreAction } from 'actions';
import Message from 'components/organisms/Message/Message';
import MessageElement from 'components/atoms/MessageElement/MessageElement';
import Warning from 'components/organisms/Warning/Warning';

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
  height: 250px;

  @media (min-width: 730px) {
    max-height: 330px;
    overflow-y: auto;
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

const StyledFormNumber = styled(Form)`
  display: flex;
  flex-direction: column;
  height: 275px;
  justify-content: space-between;
`;

const StyledFormRadio = styled(Form)`
  display: flex;
  flex-direction: column;
  height: 275px;
  justify-content: space-between;
  align-items: center;
`;

const StyledInputNumberWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

class Custom extends Component {
  state = {
    step: 1,
    isMessage: false,
    isWarning: false,
  };

  componentDidMount() {
    const { match } = this.props;

    this.setState({
      step: parseInt(match.params.step, 10),
    });
  }

  componentDidUpdate() {
    const { match } = this.props;
    const { step } = this.state;
    if (
      step !== parseInt(match.params.step, 10)
    ) {
      this.setState({
        step: parseInt(match.params.step, 10),
      });
    }
  }

  handleMessageClick = () => {
    this.setState((prevState) => ({
      isMessage: !prevState.isMessage,
      isWarning: !prevState.isWarning,
    }));
  };

  handleWarningConfirm = () => {
    console.log(
      this.createObjectsArrayWithData(),
    );
    this.setState((prevState) => ({
      isWarning: !prevState.isWarning,
    }));
  };

  handleWarningDeny = () => {
    this.setState((prevState) => ({
      isWarning: !prevState.isWarning,
    }));
  };

  createObjectTemplate = () => {
    const { objCollection } = this.props;
    console.log(objCollection);
    const obj = {
      id: true,
    };

    Object.keys(objCollection).forEach((el) => {
      if (objCollection[el] === true) {
        Object.assign(obj, { [el]: true });
      }
    });

    return obj;
  };

  getData = (type) => {
    switch (type) {
      case 'name':
        return 'test';
      case 'surname':
        return 'testsurname';
      default:
        return null;
    }
  };

  createObjectsArrayWithData = () => {
    const obj = this.createObjectTemplate();
    const { number } = this.props;

    const objArr = [];
    for (let i = 0; i < number; i++) {
      Object.keys(obj).forEach((key) => {
        if (key === 'id') {
          obj.id = i + 1;
        } else {
          obj[key] = this.getData(key);
        }
      });

      objArr.push({ ...obj });
    }
    return objArr;
  };

  render() {
    const {
      step,
      isMessage,
      isWarning,
    } = this.state;
    const {
      history,
      checkboxes,
      fileType,
      number,
      objCollection,
      updateStore,
    } = this.props;

    return (
      <>
        {isWarning && (
          <Warning
            clickConfirm={
              this.handleWarningConfirm
            }
            clickDeny={this.handleWarningDeny}>
            Are you sure you want to download this
            file?
          </Warning>
        )}
        {isMessage && (
          <Message
            amount={number}
            fileType={fileType}
            click={this.handleMessageClick}>
            <MessageElement>id</MessageElement>
            {Object.keys(objCollection).map(
              (el) =>
                objCollection[el] && (
                  <MessageElement
                    key={`${el}MSGE`}>
                    {el}
                  </MessageElement>
                ),
            )}
          </Message>
        )}
        <GridTemplate>
          {(step < 1 ||
            step > 3 ||
            Number.isNaN(step)) && (
            <Redirect to={routes.home} />
          )}
          <TopBar
            mode="Custom"
            path={
              step > 1
                ? `${routes.custom}/step/${
                    step - 1
                  }`
                : routes.home
            }
            step={step}
          />
          <StyledWrapper>
            {step === 1 && (
              <>
                <Paragraph view={1}>
                  Select what your data object
                  should include
                </Paragraph>
                <Formik
                  initialValues={objCollection}
                  onSubmit={(
                    values,
                    { setSubmitting },
                  ) => {
                    setTimeout(() => {
                      console.log(values);
                      updateStore(
                        'objCollection',
                        values,
                      );
                      setSubmitting(false);
                      history.push(
                        '/custom/step/2',
                      );
                    }, 400);
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
                              disabled={
                                el === 'id'
                              }
                            />
                            <Label
                              htmlFor={el}
                              checkbox>
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
            )}

            {step === 2 && (
              <>
                <Paragraph view={1}>
                  How many objects do you want to
                  have?
                </Paragraph>
                <Formik
                  initialValues={{
                    number,
                  }}
                  validate={(values) => {
                    const errors = {};
                    if (values.number < 1) {
                      errors.number =
                        'Can not be less then 1';
                    }
                    return errors;
                  }}
                  onSubmit={(
                    values,
                    { setSubmitting },
                  ) => {
                    setTimeout(() => {
                      console.log(values);
                      updateStore(
                        'number',
                        values.number,
                      );
                      setSubmitting(false);
                      history.push(
                        '/custom/step/3',
                      );
                    }, 400);
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
            )}
            {step === 3 && (
              <>
                <Paragraph view={1}>
                  Choose file format
                </Paragraph>
                <Formik
                  initialValues={{
                    fileType,
                  }}
                  onSubmit={(
                    values,
                    { setSubmitting },
                  ) => {
                    setTimeout(() => {
                      updateStore(
                        'fileType',
                        values.fileType,
                      );
                      history.push(
                        '/custom/step/3',
                      );
                      this.setState(
                        (prevState) => ({
                          isMessage: !prevState.isMessage,
                        }),
                      );
                      setSubmitting(false);
                    }, 400);
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
                        <Label
                          htmlFor="JSON"
                          radio={1}>
                          JSON
                        </Label>
                        <Field
                          as={Input}
                          type="radio"
                          id="YML"
                          value="YML"
                          name="fileType"
                        />
                        <Label
                          htmlFor="YML"
                          radio={1}>
                          YML
                        </Label>
                      </StyledContainer>
                      <StyledButton
                        type="submit"
                        disabled={isSubmitting}>
                        Finish
                      </StyledButton>
                    </StyledFormRadio>
                  )}
                </Formik>
              </>
            )}
          </StyledWrapper>
        </GridTemplate>
      </>
    );
  }
}

Custom.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
    params: PropTypes.object.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  checkboxes: PropTypes.arrayOf(PropTypes.string)
    .isRequired,
  fileType: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  objCollection: PropTypes.objectOf(
    PropTypes.bool,
  ).isRequired,
  updateStore: PropTypes.func.isRequired,
};

const mapStateToProps = ({
  checkboxes,
  fileType,
  number,
  objCollection,
}) => ({
  checkboxes,
  fileType,
  number,
  objCollection,
});
const mapDispatchToProps = (dispatch) => ({
  updateStore: (varToUpdate, value) =>
    dispatch(
      updateStoreAction(varToUpdate, value),
    ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Custom);
