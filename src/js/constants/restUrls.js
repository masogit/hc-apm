const domain = '/dataget';

const URL = {
  SITE: '/site_info'
};

(() => {
  Object.keys(URL).forEach((key) => {
    URL[key] = domain + URL[key];
  });
})();

export default URL;
