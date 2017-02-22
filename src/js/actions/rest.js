import { TYPE, URL } from '../constants';
import { Rest } from 'grommet';

export function loadSites() {
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
