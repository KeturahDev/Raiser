import React, { useState } from 'react';
import StudentForm from './forms/StudentForm'
import TeacherForm from './forms/TeacherForm'
import EnterRoom from './forms/EnterRoom'

function JoinForm() {

  const [membershipLable, switchMembershipLable] = useState("(please choose)")
  const [currentForm, changeFormTo] = useState(<h3> ... </h3>)

  const renderform = (form) => {
    if (form === "student") {
      changeFormTo(<StudentForm onSubmittingForm={gatherFormInputs} />)
    } else if (form === "teacher") {
      changeFormTo(<TeacherForm onSubmittingForm={gatherFormInputs} />)
    }
  }

  const joiningAs = (event) => {
    switchMembershipLable(event.target.value)
    renderform(event.target.value)
  }

  const gatherFormInputs = (inputs) => {
    console.log("recalled", inputs)
    if (inputs) {
      if (inputs.type === "student") {
        return {
          component: <EnterRoom studentName={inputs.studentName}/>
        }
      } else {
        return {
          component: <EnterRoom teacherPassword={inputs.teacherPassword}/>
        }
      }
    } else {
      return {
        component: <div>
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
      }
    }
  }
  const currentFormObj =  gatherFormInputs()
  return (
    <div style={{ border: "2px solid orange" }} >

    {currentFormObj.component}

    </div>
  );
}

export default JoinForm