import { TYPE } from '../constants';

export function switchTheme(theme) {
  return dispatch => {
    const nextTheme = (theme == 'baseTheme') ? 'blackTheme' : 'baseTheme';
    return dispatch({type: TYPE.CHANGE_THEME, theme: nextTheme});
  };
};
