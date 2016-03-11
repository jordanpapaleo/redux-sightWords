import { GET_WORDS, SET_ACTIVE, MERGE_SETS } from 'actions/wordsActions'

export default function (state = [], action) {
  switch (action.type) {
    case GET_WORDS:
      return Object.assign({}, state, {
        sets: action.payload
      })
    case MERGE_SETS:
      let mergedWords = []
      action.payload.forEach((set) => {
        mergedWords = mergedWords.concat(set.words)
      })
      return Object.assign({}, state, { mergedWords })
    case SET_ACTIVE:
      const payloadId = action.payload.id

      let activeSets = []
      let isRemoving = false
      let matchedIndex

      if (state.activeSets && state.activeSets.length > 0) {
        activeSets = state.activeSets.map((set, i) => {
          if (set.id !== payloadId) {
            return set
          } else {
            isRemoving = true
            matchedIndex = i
          }
        })
      }

      if (!isRemoving) {
        activeSets = activeSets.concat([action.payload])
      } else {
        activeSets.splice(matchedIndex, 1)
      }

      return Object.assign({}, state, { activeSets })
    default:
      return state
  }

  return state
}
