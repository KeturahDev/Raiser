import React from 'react';
import GeneratePin from './GeneratePin';
import Form from './Form';
import Confirmation from './Confirmation';

function CreateRoom(){
  return(
    <div style={{border: "2px solid purple"}}>
      <h2>Adding a Room!</h2>
      <GeneratePin />
      <Form />
      <Confirmation />
    </div>
  )
}

export default CreateRoom;