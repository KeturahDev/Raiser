import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'

class ChooseRoom extends React.Component{

  getRoom = (roomPin) => {
    let url = new URL('http://127.0.0.1:5000/room')
    url.search = new URLSearchParams({
        pin: roomPin
    })
    console.log("URL   ", url)
    fetch(url,
      {method: "GET",
      headers: {
        "Content-Type": "application/json"
      }})
    .then((res) => res.json())
    .then(jsonifiedRes => {
      console.log("GOT IT:  ", jsonifiedRes)
      this.handleRoomEntersState(jsonifiedRes[0])
    }).catch(error => console.log("Unable to fetch room:  ", error))
  }

  handleRoomEntersState = (room) => {
    const {dispatch} = this.props
    const action = {
      type: "ENTER_ROOM",
      room
    }
    dispatch(action)
    console.log("From redux: ",this.props.currentRoom)
    this.props.RoomEntersState(this.props.currentRoom)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.getRoom(event.target.pin.value)
  }
  render(){
    return(
      <div style={{border: "2px solid darkred"}}>
      CHOOSE ROOM
        <form onSubmit={this.handleSubmit}>
          <input name="pin" placeholder="room pin"/>
          <button type="submit">Enter Room</button>
        </form>
      </div>
    )
  }
}
ChooseRoom.propTypes = {
  RoomEntersState: PropTypes.func
}
const mapStateToProps = state => ({
  currentRoom: state.currentRoom
})
ChooseRoom = connect(mapStateToProps)(ChooseRoom)

export default ChooseRoom