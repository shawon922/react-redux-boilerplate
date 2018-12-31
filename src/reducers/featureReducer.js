import { FETCH_FEATURES, NEW_FEATURE } from '../actions/types';

const initialState = {
  items: [],
  item: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FEATURES:
      return { ...state, items: action.payload };
    case NEW_FEATURE:
      return { ...state, item: action.payload };
    default:
      return state;
  }
}