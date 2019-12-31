// import flats from '../../data/flats';

export const LIST_FLATS = "LIST_FLATS";
export const SELECT_FLAT = "SELECT_FLAT";


export function listFlats() {
  // type: LIST_FLATS,
  // payload: flats
  return fetch('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json')
    .then(response => response.json())
    .then((data) => {
      return {
        type: LIST_FLATS,
        payload: data
      };
    });
}

export const selectFlat = (flat) => ({
  type: SELECT_FLAT,
  payload: flat
});
