import { combineReducers } from 'redux'
import WordsReducer from './wordsReducer'
import { routerReducer } from 'react-router-redux'

// maps our state
const rootReducer = combineReducers({
  wordStore: WordsReducer,
  routing: routerReducer
})

export default rootReducer
