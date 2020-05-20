import React, {useState} from 'react';
import StudentForm from './StudentForm'
import TeacherForm from './TeacherForm'
import PropTypes from 'prop-types';

function TypeOfUserForm(props){
  const [currentForm, changeFormTo] = useState(<h3> ... </h3>)
  const [membershipLable, switchMembershipLable] = useState("(please choose)")


  const renderform = (form) => {
    if (form === "student") {
      changeFormTo(<StudentForm onSubmittingForm={props.gatherFormInputs} />)
    } else if (form === "teacher") {
      changeFormTo(<TeacherForm onSubmittingForm={props.gatherFormInputs} />)
    }
  }
  const joiningAs = (event) => {
    switchMembershipLable(event.target.value)
    renderform(event.target.value)
  }
  return(
    <div style={{border: "2px solid lime"}}>
      <form>
        <label>
          Join as {membershipLable} :
                      <select value={"pin-entry"} onChange={joiningAs}>
            <option value="pin-entry"> - </option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </label>
      </form>
      <hr></hr>
      {currentForm}
    </div>
  )
}

TypeOfUserForm.propTypes = {
  gatherFormInputs: PropTypes.func
}
export default TypeOfUserForm