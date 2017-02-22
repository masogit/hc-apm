import { TYPE } from '../constants';
import { getThemes } from '../constants/themes';

const initialState = {
  logo: 'ge.png',
  title: 'GE APM',
  currentTheme: 'baseTheme',
  themes: getThemes(),
  siderBarToggle: true,
  currentLocale: 'zh',
  locales: ['en', 'zh'],
  user: {
    name: 'Admin',
    email: 'admin@abc.com'
  },
  messages: ''
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TYPE.MSG_ALERT:
      return { ...state, ...{messages: action.message} };
    case TYPE.MSG_CLOSE:
      return { ...state, ...{messages: ''} };
    case TYPE.TOGGLE_SIDEBAR:
      return { ...state, ...{siderBarToggle: !state.siderBarToggle} };
    case TYPE.LOGIN:
      return { ...state, ...{user: {name: action.login}}};
    case TYPE.CHANGE_LOCALE:
      return { ...state, ...{currentLocale: action.locale}};
    case TYPE.CHANGE_THEME: {
      console.log(action.theme);
      return { ...state, ...{currentTheme: action.theme} };
    };
    default:
      return state;
  }
}
