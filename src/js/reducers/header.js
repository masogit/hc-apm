import { TYPE } from '../constants';
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
    case TYPE.LOGIN:
      return { ...state, ...{user: {name: action.login}}};
    case TYPE.CHANGE_THEME: {
      console.log(action.theme);
      return { ...state, ...{currentTheme: action.theme} };
    };
    default:
      return state;
  }
}
