import React from 'react';
import PropTypes from 'prop-types';

function GeneratePin(props){
  return(
    <div style={{border: "2px solid yellow"}}>
      <p>Your Pin is: {props.pin}</p>
      <button onClick={() => props.generatePin()}>New pin please!</button>
    </div>
  )
}

GeneratePin.propTypes ={
  pin: PropTypes.number,
  generatePin: PropTypes.func
}
export default GeneratePin;