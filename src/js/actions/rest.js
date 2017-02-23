import { TYPE, URL } from '../constants';
import { Rest } from 'grommet';
const sites = require('../../../conf/site.json');

export function loadSites() {
  return dispatch => {
    dispatch({ type: TYPE.REST_LOAD_SITES, sites });
  };
};

export function loadSitesByREST() {
  return dispatch => {
    Rest.default.get(URL.SITE).then((res) => {
      let sites = res.body;
      return dispatch({
        type: TYPE.REST_LOAD_SITES,
        sites
      });
    });
  };
};

