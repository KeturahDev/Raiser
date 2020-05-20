import roomReducer from './room-reducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  currentRoom: roomReducer
})

export default rootReducer;