import { TYPE } from '../constants';
// import { Rest } from 'grommet';
import sites from '../../../conf/site.json';

export function loadSites() {
  return dispatch => {
    dispatch({ type: TYPE.REST_LOAD_SITES, sites });
  };
};

// export function loadSites() {
//   return dispatch => {
//     Rest.default.get(URL.SITE).then((res) => {
//       let sites = res.body;
//       return dispatch({
//         type: TYPE.REST_LOAD_SITES,
//         sites
//       });
//     });
//   };
// };

