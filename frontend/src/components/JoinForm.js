import React, {useState} from 'react';
import StudentForm from './forms/StudentForm'
import TeacherForm from './forms/TeacherForm'

function JoinForm() {

  const [membership, switchMembership] = useState("(please choose)")
  const [currentForm, changeFormTo] = useState(<h3> ... </h3>)
  
  const renderform = (form) => {
    if (form === "student") {
      changeFormTo(<StudentForm onSubmittingForm={gatherFormInputs}/>)
    } else if (form === "teacher"){
      changeFormTo(<TeacherForm onSubmittingForm={gatherFormInputs}/>)
    }
  }

  const gatherFormInputs = (submissionObj) => {
    if(submissionObj.type === "student") {
      console.log('submit student info: ', submissionObj.studentName)
    } else {
      console.log('submit teacher info: ', submissionObj.teacherPassword)
    }
  }

  const joiningAs = (event) => {
    switchMembership(event.target.value)
    console.log("onChange:", event.target.value)
    renderform(event.target.value)
  }

  return(
    <div style={{border: "2px solid orange"}} >
      <div>
        <form>
          <label>
          Join as {membership} :
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
      
    </div>
  );
}

export default JoinForm