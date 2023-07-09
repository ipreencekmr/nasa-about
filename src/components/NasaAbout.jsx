import React from 'react';
import PropTypes from 'prop-types';
import { loadLanguagePack, updateLocale } from '@americanexpress/one-app-ducks';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import { Box } from '@mui/material';
import { Header } from './Header';
import { AboutUs } from './AboutUs';
import { TechStack } from './TechStack';

export const NasaAbout = ({ languageData, localeName }) => {

  if (languageData.greeting) {
    return (
      <IntlProvider locale={localeName} messages={languageData}>
        <Box />
        <Header />
        <AboutUs />
        <TechStack />
      </IntlProvider>
    );
  }
  return null;
};

NasaAbout.propTypes = {
  languageData: PropTypes.shape({
    greeting: PropTypes.string.isRequired,
  }).isRequired,
  localeName: PropTypes.string.isRequired,
};

export const mapDispatchToProps = (dispatch) => ({
  switchLanguage: async ({ target }) => {
    await dispatch(updateLocale(target.value));
    await dispatch(loadLanguagePack('nasa-about', { fallbackLocale: 'en-US' }));
  },
});

export const mapStateToProps = (state) => {
  const localeName = state.getIn(['intl', 'activeLocale']);
  const languagePack = state.getIn(
    ['intl', 'languagePacks', localeName, 'nasa-about'],
    fromJS({})
  ).toJS();

  return {
    languageData: languagePack && languagePack.data ? languagePack.data : {},
    localeName,
  };
};

export const loadModuleData = ({ store: { dispatch } }) => dispatch(loadLanguagePack('nasa-about', { fallbackLocale: 'en-US' }));

NasaAbout.holocron = {
  name: 'nasa-about',
  loadModuleData,
};

export default connect(mapStateToProps, mapDispatchToProps)(NasaAbout);
