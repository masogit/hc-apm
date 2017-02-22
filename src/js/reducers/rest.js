import { TYPE } from '../constants';

const initialState = {
  sites: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TYPE.REST_LOAD_SITES:
      return { ...state, ...{sites: action.sites} };
    default:
      return state;
  }
}
