import React, {useState} from 'react';

function GeneratePin(){
  const [number, changeNumber] = useState(Math.floor(10000 + Math.random() * 90000))
  
  function getNumber(){
    const newNum = Math.floor(10000 + Math.random() * 90000)
    changeNumber(newNum)
  }

  return(
    <div style={{border: "2px solid yellow"}}>
      <p>Your Pin is: {number}</p>
      
      {/* <p>button to regenerate it?</p> */}
      <button onClick={() => getNumber()}>New pin please!</button>
    </div>
  )
}

export default GeneratePin;