import { combineReducers } from 'redux'
import WordsReducer from './wordsReducer'

// maps our state
const rootReducer = combineReducers({
  wordStore: WordsReducer
})

export default rootReducer
