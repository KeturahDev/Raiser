import React from 'react';
import PropTypes from 'prop-types';

function Form(props){

  const handleSubmitForm = (event) => {
    event.preventDefault();
    if(event.target.pwd.value !== event.target.pwd2.value){
      alert("Passwords do not match")
    } else {
      const inputs = {
        password: event.target.pwd.value,
        roomName: event.target.roomName.value
      }
      props.onSubmitPassword(inputs)
    }
  }

  return(
    <div style={{border: "2px solid green"}}>
      <form onSubmit={handleSubmitForm}>
        <input type="text" placeholder="Room Name" name="roomName" required/>
        <input type="password" placeholder="Choose Password" name="pwd" required/>
        <input type="password" placeholder="Confirm Password" name="pwd2" required/>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

Form.propTypes = {
  onSubmitPassword: PropTypes.func
}

export default Form;