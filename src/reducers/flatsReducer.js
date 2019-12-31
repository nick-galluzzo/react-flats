import { LIST_FLATS } from '../actions/flatActions';

const flatsReducer = (state = {}, action) => {
  switch (action.type) {
    case LIST_FLATS:
      return action.payload;
    default:
      return state;
  }
};

export default flatsReducer;
