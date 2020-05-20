export default (state = [], action) => {
  switch(action.type) {
    case "ENTER_ROOM":
      state = action.room
      return state
    default:
      return state
  }
}