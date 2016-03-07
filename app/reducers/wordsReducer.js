import { GET_WORDS, SET_ACTIVE } from 'actions/wordsActions'

export default function (state = [], action) {
  switch (action.type) {
    case GET_WORDS:
      console.info('reducer', action)

      return Object.assign({}, state, {
        sets: action.payload
      })
    case SET_ACTIVE:
      return Object.assign({}, state, {
        active: action.payload
      })
    default:
      return state
  }

  return state
}
