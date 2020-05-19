import React from 'react';
import PropTypes from 'prop-types';

function EnterRoom(props){
  return(
    <div style={{border: "2px solid violet"}} >
      <p>takes in the inputs, sets redux state to pin, and delivers you to your new View within the room</p>
    </div>
  )
}
EnterRoom.propTypes = {
  studentName: PropTypes.string
}
export default EnterRoom;