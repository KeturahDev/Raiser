import roomReducer from './room-reducer'

const rootReducer = combineReducers({
  currentRoom: roomReducer
})

export default rootReducer;