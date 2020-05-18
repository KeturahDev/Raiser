import React, {useState} from 'react';
import GeneratePin from './GeneratePin';
import Form from './Form';
import Confirmation from './Confirmation';

function CreateRoom(){
  const [number, changeNumber] = useState(Math.floor(10000 + Math.random() * 90000))
  const [visChildCR, changeVisChildCR] = useState("form")

  function getNumber(){
    const newNum = Math.floor(10000 + Math.random() * 90000)
    changeNumber(newNum)
  }
  
  const makeRoom = (password) => {
    const newRoom = { roomPin: number, teacherPassword: password }
    console.log("Room to be saved: ", newRoom)
    changeVisChildCR("confirm")
  }

  return(
    <div style={{border: "2px solid purple"}}>
      <h2>Adding a Room!</h2>
      {
        visChildCR === "form" &&
        <div>
          <GeneratePin pin={number} generatePin={getNumber}/>
          <Form onSubmitPassword={makeRoom} /> 
        </div>
      }
      {
        visChildCR === "confirm" &&
        <Confirmation pin={number}/>
      }
    </div>
  )
}

export default CreateRoom;