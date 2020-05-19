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
  
  const createRoomApiCall = (newRoom) => {
    console.log('NewRoom: ', newRoom)
    fetch('http://127.0.0.1:5000/rooms', 
    {method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    Origin: 'http://127.0.0.1:3000',
    body: JSON.stringify(newRoom)})
    .then(() => {
      console.log('JSONIFIEDROOM: ', JSON.stringify(newRoom))
      console.log("API::: successfully created room")
    }).catch((e) => {
      console.log("Unable to create new room: ", e)
    })
  }

  const makeRoom = (password) => {
    const newRoom = { pin: number, teacherPassword: password }
    console.log("Room to be saved: ", newRoom)
    createRoomApiCall(newRoom)
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
