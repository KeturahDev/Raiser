import React from 'react';
import PropTypes from 'prop-types';

function TeacherForm(props){
  const handleSubmit = (event) => {
    event.preventDefault()
    const submissionObj = {
      teacherPassword: event.target.teacherPassword.value,
      type: "teacher"
    }
    props.onSubmittingForm(submissionObj)
  }
  return(
    <div style={{border: "2px solid magenta"}}>
      <p>Teacher's form</p>
      <form onSubmit={handleSubmit}>
        <input type="password" name="teacherPassword" placeholder="your password" />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}
TeacherForm.proptTypes = {
  onSubmittingForm: PropTypes.func
}
export default TeacherForm;