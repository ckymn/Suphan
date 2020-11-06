
export const USER_INIT = 'USER_INIT' // action sabiti (kullanici gonderdigi bigileri tutacak yer)

export function userInit (user = {}) {
  // action creater
  return {
    type: USER_INIT,
    payload: user
  }
}

// burda bir onceki state degerini alip yeni statei return eder
export default function userReducer (state = {}, action) {
  switch (action.type) {
    case USER_INIT:
      // burda state degerini immutuable kullanimi yaptik.kopyasini aldik!
      return Object.assign({}, action.payload)
    default:
      return state
  }
}
