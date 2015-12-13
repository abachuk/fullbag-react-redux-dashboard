import createReducer from 'utils/createReducer'
import Firebase from 'firebase'
import constants from 'utils/constants'

const ref = new Firebase(constants.FIREBASE)
let authData = ref.getAuth()

console.log(authData)

// ------------------------------------
// Constants
// ------------------------------------
const AUTH = 'AUTH'

// ------------------------------------
// Actions
// ------------------------------------
export const login = () => ({ type: AUTH })
export const register = () => ({ type: AUTH })
export const actions = {
  login, register
}

// ------------------------------------
// Reducer
// ------------------------------------
export default createReducer(0, {
  [AUTH]: (state) => authData
})
