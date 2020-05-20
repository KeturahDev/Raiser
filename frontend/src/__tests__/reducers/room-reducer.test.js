import roomReducer from './../../reducers/room-reducer'

describe('roomReducer', () => {
  test('should return default state of reducer', () => {
    expect(roomReducer({}, {type:null})).toEqual({})
  })
})