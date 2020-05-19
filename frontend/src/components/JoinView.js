import React, { useState } from 'react';
import EnterRoom from './forms/EnterRoom';
import ChooseRoom from './forms/ChooseRoom';
import TypeOfUserForm from './forms/TypeOfUserForm';

function JoinView() {
  
  const gatherFormInputs = (inputs) => {
    if(inputs) {
      if (inputs.type === "student") {
        changeCurrentComponent(<EnterRoom studentName={inputs.studentName}/>)
      } else {
        changeCurrentComponent(<EnterRoom teacherPassword={inputs.teacherPassword}/>)
      }
    } 
    // else {
    //   changeCurrentComponent(<TypeOfUserForm gatherFormInputs={gatherFormInputs} />)
    // }
  }

  const RoomEntersState = (roomPin) => {
    console.log("room to be sent to GET api call: ", roomPin)
    changeCurrentComponent(<TypeOfUserForm gatherFormInputs={gatherFormInputs} />)
  }

  const [currentComponent, changeCurrentComponent] = useState(<ChooseRoom RoomEntersState={RoomEntersState} />)

  return (
    <div style={{ border: "2px solid orange" }} >
      {currentComponent}
    </div>
  );
}

export default JoinView