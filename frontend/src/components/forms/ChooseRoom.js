import React, {useState} from 'react';
import PropTypes from 'prop-types';

function ChooseRoom(props){
  const [summonedRoom, pullRoom] = useState({})

  const getRoom = (roomPin) => {
    console.log("ROOM PIN: ",roomPin)
    let url = new URL('http://127.0.0.1:5000/room')
    url.search = new URLSearchParams({
        pin: roomPin
    })
    console.log("URL   ", url)
    // fetch(url,
    // // fetch('http://127.0.0.1:5000/room',
    // {method: "GET",
    // headers: {
    //   "Content-Type": "application/json"
    // }
    // // body: JSON.stringify(roomPin)
    // })
    // .then((res) => res.json())
    // .then(jsonifiedRes => {
    //   console.log("GOT IT:  ", jsonifiedRes)
    //   pullRoom(jsonifiedRes)
    // }).catch(error => console.log("Unable to fetch room:  ", error))
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    // const pinObj = { pin: event.target.pin.value }
    // console.log("HANDLE FUNC PIN OBJ:  ", pinObj)
    getRoom(event.target.pin.value)
    // getRoom(pinObj)
  }
  return(
    <div style={{border: "2px solid darkred"}}>
    CHOOSE ROOM
      <p>Where you enter pin, and room enters state</p>
      <form onSubmit={handleSubmit}>
        <input name="pin" placeholder="room pin"/>
        <button type="submit">Enter Room</button>
      </form>
    </div>
  )
}
ChooseRoom.propTypes = {
  RoomEntersState: PropTypes.func
}
export default ChooseRoom