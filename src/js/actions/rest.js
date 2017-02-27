import { TYPE, URL } from '../constants';
import fetch from 'isomorphic-fetch';

export function loadSites() {
  return dispatch => {
    fetch(URL.SITE)
      .then(res => (res.status >= 400) ? console.log('http err') : res.json())
      .then(sites => dispatch({type: TYPE.REST_LOAD_SITES, sites}));
  };
};

