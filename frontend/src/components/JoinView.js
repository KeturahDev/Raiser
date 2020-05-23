import React, { useState } from 'react';
import InRoom from './InRoom';
import ChooseRoom from './joining-rooms/ChooseRoom';
import TypeOfUserForm from './joining-rooms/TypeOfUserForm';

function JoinView() {
  
  
  const RoomEntersState = (roomPin) => {
    console.log("room to be sent to GET api call: ", roomPin)
    changeCurrentComponent(<TypeOfUserForm gatherFormInputs={gatherFormInputs} />)
    changeCurrentRoom(roomPin)
  }
  
  const [currentComponent, changeCurrentComponent] = useState(<ChooseRoom RoomEntersState={RoomEntersState} />)
  const [currentRoom, changeCurrentRoom] = useState("none")
  
  const gatherFormInputs = (inputs) => {
    if(inputs) {
      if (inputs.type === "student") {
        console.log(currentRoom)
        changeCurrentComponent(<InRoom studentName={inputs.studentName}/>)
      } else {
        changeCurrentComponent(<InRoom teacherPassword={inputs.teacherPassword}/>)
      }
    } 
  }
  
  return (
    <div className="padd"  >
    {
      currentRoom !== "none" &&
      <p>Currently in Room: {currentRoom.roomName}</p>

    }
      {currentComponent}
    </div>
  );
}

export default JoinView