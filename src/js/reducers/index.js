import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { loadTranslations, setLocale, syncTranslationWithStore, i18nReducer } from 'react-redux-i18n';
import header from './header';
import device from './device';
import menu from './menu';
const translationsObject = require('../../../conf/i18n.json');

const reducers = combineReducers({
  header,
  device,
  menu,
  i18n: i18nReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
syncTranslationWithStore(store);
store.dispatch(loadTranslations(translationsObject));
store.dispatch(setLocale('zh'));

export default store;
