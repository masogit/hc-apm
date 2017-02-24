const server = require('../../../conf/server.json');
const domain = (server && server.base) ? server.base + '/dataget' : '/dataget';

const URL = {
  SITE: '/site_info'
};

(() => {
  Object.keys(URL).forEach((key) => {
    URL[key] = domain + URL[key];
  });
})();

export default URL;
