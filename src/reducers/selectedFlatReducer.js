import { SELECT_FLAT } from '../actions/flatActions';

const selectedFlatReducer = (state = {}, action) => {
  switch (action.type) {
    case SELECT_FLAT:
      return action.payload;
    default:
      return state;
  }
};

export default selectedFlatReducer;
