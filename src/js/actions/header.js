import { TYPE } from '../constants';
import { setLocale } from 'react-redux-i18n';

export function switchTheme(theme) {
  return dispatch => {
    const nextTheme = (theme == 'baseTheme') ? 'blackTheme' : 'baseTheme';
    dispatch({type: TYPE.CHANGE_THEME, theme: nextTheme});
  };
};

export function switchLocale(locale) {
  return dispatch => {
    const nextLocale = (locale == 'en') ? 'zh' : 'en';
    dispatch({type: TYPE.CHANGE_LOCALE, locale: nextLocale});
    dispatch(setLocale(nextLocale));
  };
};
