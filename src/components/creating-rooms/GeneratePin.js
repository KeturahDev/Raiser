import React from 'react';

function GeneratePin(){
  //function with Math.random to generate 6 digit long pin
  return(
    <div style={{border: "2px solid yellow"}}>
      <p>Here will be a randomply generated pin</p>
      <p>button to regenerate it?</p>
    </div>
  )
}

export default GeneratePin;