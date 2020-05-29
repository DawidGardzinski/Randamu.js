import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import { connect } from 'react-redux';
import TopBar from 'components/molecules/TopBar/TopBar';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { routes } from 'routes';
import { updateStore as updateStoreAction } from 'actions';
import Message from 'components/organisms/Message/Message';
import MessageElement from 'components/atoms/MessageElement/MessageElement';
import Warning from 'components/organisms/Warning/Warning';
import prepareNDownloadData from 'logic';
import CustomFirstStep from 'components/organisms/CustomFirstStep/CustomFirstStep';
import SecondStep from 'components/organisms/SecondStep/SecondStep';
import ThirdStep from 'components/organisms/ThirdStep/ThirdStep';
import TemplatesFirstStep from 'components/organisms/TemplatesFirstStep/TemplatesFirstStep';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  min-height: 450px;
  justify-content: space-between;
`;

class MainView extends Component {
  state = {
    step: 1,
    isMessage: false,
    isWarning: false,
    customView: false,
  };

  componentDidMount() {
    const { match } = this.props;

    this.setState({
      step: parseInt(match.params.step, 10),
      customView: match.url.includes('custom'),
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
    const {
      objCollection,
      number,
      fileType,
    } = this.props;
    prepareNDownloadData(
      objCollection,
      number,
      fileType,
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

  handleSubmit = (
    values,
    setSubmitting,
    currStep,
  ) => {
    const { history, updateStore } = this.props;
    const { customView } = this.state;

    switch (currStep) {
      case 1:
        setTimeout(() => {
          updateStore('objCollection', values);
          setSubmitting(false);
          history.push(
            `/${
              customView ? 'custom' : 'templates'
            }/step/2`,
          );
        }, 400);
        break;
      case 2:
        setTimeout(() => {
          updateStore('number', values.number);
          setSubmitting(false);
          history.push(
            `/${
              customView ? 'custom' : 'templates'
            }/step/3`,
          );
        }, 400);
        break;
      case 3:
        setTimeout(() => {
          updateStore(
            'fileType',
            values.fileType,
          );
          history.push(
            `/${
              customView ? 'custom' : 'templates'
            }/step/3`,
          );
          this.setState((prevState) => ({
            isMessage: !prevState.isMessage,
          }));
          setSubmitting(false);
        }, 400);
        break;
      default:
        console.error('Something went wrong');
    }
  };

  handleClick = (obj) => {
    const {
      objCollection,
      history,
      updateStore,
    } = this.props;
    const copyObjColl = { ...objCollection };
    Object.keys(copyObjColl).forEach((el) => {
      copyObjColl[el] = false;
    });
    Object.keys(obj).forEach((el) => {
      copyObjColl[el] = true;
    });

    updateStore('objCollection', copyObjColl);
    history.push('/templates/step/2');
  };

  render() {
    const {
      step,
      isMessage,
      isWarning,
      customView,
    } = this.state;
    const {
      checkboxes,
      fileType,
      number,
      objCollection,
    } = this.props;

    return (
      <>
        {isWarning && (
          <Warning
            clickConfirm={
              this.handleWarningConfirm
            }
            clickDeny={this.handleWarningDeny}/>
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
            mode={
              customView ? 'Custom' : 'Templates'
            }
            path={
              step > 1
                ? `${
                    customView
                      ? routes.custom
                      : routes.templates
                  }/step/${step - 1}`
                : routes.home
            }
            step={step}
          />
          <StyledWrapper>
            {customView ? (
              <>
                {step === 1 && (
                  <CustomFirstStep
                    objCollection={objCollection}
                    checkboxes={checkboxes}
                    onSubmit={this.handleSubmit}
                  />
                )}
              </>
            ) : (
              <>
                {step === 1 && (
                  <TemplatesFirstStep
                    objCollection={objCollection}
                    onClick={this.handleClick}
                  />
                )}
              </>
            )}
            {step === 2 && (
              <SecondStep
                number={number}
                onSubmit={this.handleSubmit}
              />
            )}
            {step === 3 && (
              <ThirdStep
                fileType={fileType}
                onSubmit={this.handleSubmit}
              />
            )}
          </StyledWrapper>
        </GridTemplate>
      </>
    );
  }
}

MainView.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
    params: PropTypes.object.isRequired,
    url: PropTypes.string.isRequired,
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
)(MainView);
