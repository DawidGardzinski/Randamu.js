import React, { Component } from 'react';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { routes } from 'routes';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { updateStore as updateStoreAction } from 'actions';
import PropTypes from 'prop-types';
import StartScreen from 'components/organisms/StartScreen/StartScreen';

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  height: 100vh;
`;

const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) =>
    theme.fontSize.extral};
`;

const StyledNav = styled.nav`
  height: 210px;
  width: 260px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-between;
`;

const StyledNavButton = styled(Button)`
  display: block;
  line-height: 45px;
  min-width: 260px;
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

const StyledHelpButton = styled(Button)`
  position: fixed;
  right: 10px;
  bottom: 10px;
  display: block;
  font-weight: ${({ theme }) =>
    theme.fontWeight.bold};
`;

const StyledLangButton = styled(Button)`
  position: fixed;
  left: 10px;
  bottom: 10px;
`;

class Home extends Component {
  state = {
    isStart: true,
    isHidden: false,
  };

  componentDidMount() {
    const { isStart } = this.props;
    this.setState(() => ({ isStart }));
  }

  handleClick = () => {
    this.setState((prevState) => ({
      isHidden: !prevState.isHidden,
    }));

    setTimeout(() => {
      const { updateStore, isStart } = this.props;

      updateStore('isStart', !isStart);
    }, 1000);
  };

  render() {
    const { t, i18n } = this.props;
    const { isStart, isHidden } = this.state;
    return (
      <>
        {isStart && (
          <StartScreen
            onClick={this.handleClick}
            isHidden={isHidden}
          />
        )}
        <StyledWrapper>
          <StyledNav>
            <StyledHeading as="h2">
              {t('select mode')}
            </StyledHeading>
            <StyledNavButton
              as={NavLink}
              to={routes.templates}
              block={1}>
              {t('templates')}
            </StyledNavButton>
            <StyledNavButton
              as={NavLink}
              to={routes.custom}
              block={1}>
              {t('custom')}
            </StyledNavButton>
          </StyledNav>
          <StyledHelpButton
            as={Link}
            to={routes.info}
            info={1}>
            ?
          </StyledHelpButton>
          <StyledLangButton
            onClick={() => {
              if (t('lang') === 'EN') {
                i18n.changeLanguage('pl');
              } else {
                i18n.changeLanguage('en');
              }
            }}
            info>
            {t('lang')}
          </StyledLangButton>
        </StyledWrapper>
      </>
    );
  }
}

const mapStateToProps = ({ isStart }) => ({
  isStart,
});

const mapDispatchToProps = (dispatch) => ({
  updateStore: (varToUpdate, value) =>
    dispatch(
      updateStoreAction(varToUpdate, value),
    ),
});

Home.propTypes = {
  isStart: PropTypes.bool.isRequired,
  updateStore: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  i18n: PropTypes.shape({
    changeLanguage: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslation()(Home));
