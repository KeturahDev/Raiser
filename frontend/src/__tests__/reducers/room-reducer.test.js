import roomReducer from './../../reducers/room-reducer'

describe('roomReducer', () => {
  let action;
  const room = {pin: 11223344, teacherPassword: "blackcat", id:1234}
  test('should return default state of reducer', () => {
    expect(roomReducer({}, {type:null})).toEqual({})
  })
  test('should make room the reducers state', () => {
    action = {
      action: 'ENTER_ROOM',
      room //hopefully accesses outter const to do shorthand 
    }
    expect(roomReducer({}, action)).toEqual({pin: 11223344, teacherPassword: "blackcat", id:1234})
  })
})