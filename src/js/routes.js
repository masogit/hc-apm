import * as Container from './containers';
const server = require('../../conf/server.json');
const menu = require('../../conf/menu.json');

let menu_router = {
  path: server.base || '/',
  component: Container.App,
  childRoutes: []
};

// set default component: the first container in menu
menu_router.indexRoute = {
  component: Container[menu[0].container]
};

function addRouters(items, parentRoute) {
  items.forEach((item) => {
    const route = parentRoute ? parentRoute + item.route : item.route;
    if (item.container) {
      menu_router.childRoutes.push({  path: route, component: Container[item.container] ? Container[item.container] : Container.NoFound});
    }

    if (item.child) {
      addRouters(item.child, route);
    }
  });
}

addRouters(menu);

const routers = [{
  path: server.base + '/login',
  component: Container.Login
}, menu_router, {
  path: server.base + '/*',
  component: Container.NoFound
}];

export default routers;
