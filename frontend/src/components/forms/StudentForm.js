import React from 'react';
import PropTypes from 'prop-types';

function StudentForm(props){
  const handleSubmit = (event) => {
    event.preventDefault()
    props.onSubmittingForm(event.target.studentName.value)
  }
  return(
    <div style={{border: "2px solid yellowgreen"}}>
      <p>Student's form</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="studentName" placeholder="your name" />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}
StudentForm.proptTypes = {
  onSubmittingForm: PropTypes.func
}
export default StudentForm;