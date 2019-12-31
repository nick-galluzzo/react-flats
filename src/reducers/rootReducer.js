import { combineReducers } from 'redux';
import flatsReducer from './flatsReducer';
import selectedFlatReducer from './selectedFlatReducer';

const rootReducer = combineReducers({
  flats: flatsReducer,
  selectedFlat: selectedFlatReducer
});

export default rootReducer;
