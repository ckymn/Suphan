import browserHistory from 'react-router/lib/browserHistory'

// ------------------------------------
// Constants = Sabitler
// ------------------------------------
export const LOCATION_CHANGE = 'LOCATION_CHANGE'

// ------------------------------------
// Actions Ureticisi
// ------------------------------------
export function locationChange (location = '/') {
  return {
    type: LOCATION_CHANGE,
    payload: location
  }
}

// ------------------------------------
// Specialized Action Creator
// ------------------------------------
export const updateLocation = ({ dispatch }) => {
  return nextLocation => dispatch(locationChange(nextLocation))
}

// ------------------------------------
// Reducer : bize global sate‘in guncellendigi kontrol edildigi ve guncellenmis state‘i return ettigi yerdir
// ------------------------------------
const initialState = browserHistory.getCurrentLocation()

export default function locationReducer (state = initialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return Object.assign({}, action.payload)

    default:
      return state
  }

  // return action.type === LOCATION_CHANGE
  //   ? action.payload
  //   : state
}
