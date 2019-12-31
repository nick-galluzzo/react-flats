import flats from '../../data/flats';

export const LIST_FLATS = "LIST_FLATS";
export const SELECT_FLAT = "SELECT_FLAT";


export const listFlats = () => ({
  type: LIST_FLATS,
  payload: flats
});

export const selectFlat = (flat) => ({
  type: SELECT_FLAT,
  payload: flat
});
