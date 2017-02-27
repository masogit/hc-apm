// import { types } from './index';
const menu = require('../../../conf/menu.json');
const server = require('../../../conf/server.json');

// add base path
if (server && server.base) {
  (() => {
    menu.forEach(item => {
      item.route = server.base + item.route;
    });
  })();
}
const initialState = menu;

export default function (state = initialState, action) {
  switch (action.type) {
      // case types.LOGIN:
      //     return { ...state, ...{ user: { name: action.login } } };
    default:
      return state;
  }
}
