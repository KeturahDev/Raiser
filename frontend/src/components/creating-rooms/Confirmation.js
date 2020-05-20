import React from 'react';
import PropTypes from 'prop-types';

function Confirmation(props){
  return(
    <div style={{border: "2px solid light-blue"}}>
    {
      props.message === "Good to go!" &&

      <p>Congrats! Your new room is available: click the button bellow and enter pin "{props.pin}" to join. Dont forget your teacher password!</p>
    }
    {
      props.message !== "Good to go!" &&

      <p>{props.message}</p>
    }

    </div>
  )
}

Confirmation.propTypes = {
  pin: PropTypes.number,
  message: PropTypes.string
}
export default Confirmation;