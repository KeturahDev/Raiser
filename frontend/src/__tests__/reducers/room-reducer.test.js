import roomReducer from './../../reducers/room-reducer'

describe('roomReducer', () => {
  let action;
  const room = {pin: 11223344, teacherPassword: "blackcat", id:1234}
  test('should return default state of reducer', () => {
    expect(roomReducer({}, {type:null})).toEqual({})
  })
  test('should make room the reducers state', () => {
    action = {
      type: 'ENTER_ROOM',
      room: room
    }
    console.log("action= ", action)
    expect(roomReducer({}, action)).toEqual({pin: 11223344, teacherPassword: "blackcat", id:1234})
  })
})