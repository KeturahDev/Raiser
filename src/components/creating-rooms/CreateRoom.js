import React, {useState} from 'react';
import GeneratePin from './GeneratePin';
import Form from './Form';
import Confirmation from './Confirmation';

function CreateRoom(){
  const [number, changeNumber] = useState(Math.floor(10000 + Math.random() * 90000))
  
  function getNumber(){
    const newNum = Math.floor(10000 + Math.random() * 90000)
    changeNumber(newNum)
  }
  return(
    <div style={{border: "2px solid purple"}}>
      <h2>Adding a Room!</h2>
      <GeneratePin pin={number} geratePin={getNumber}/>
      <Form />
      <Confirmation />
    </div>
  )
}

export default CreateRoom;