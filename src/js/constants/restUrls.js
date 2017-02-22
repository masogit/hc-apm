const domain = 'https://geapmuat2.run.aws-jp01-pr.ice.predix.io/web/dataget';

const URL = {
  SITE: '/site_info'
};

(() => {
  Object.keys(URL).forEach((key) => {
    URL[key] = domain + URL[key];
  });
})();

export default URL;
