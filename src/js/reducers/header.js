import { types } from './index';
import { getThemes } from '../constants/themes';

const initialState = {
  logo: 'ge.png',
  title: 'GE APM',
  currentTheme: 'baseTheme',
  themes: getThemes(),
  siderBarToggle: true,
  currentLocale: 'zh',
  locales: [],
  user: {
    name: 'Admin',
    email: 'admin@abc.com'
  }
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN:
      return { ...state, ...{user: {name: action.login}}};
    default:
      return state;
  }
}
