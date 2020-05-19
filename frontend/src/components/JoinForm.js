import React, { useState } from 'react';
// import StudentForm from './forms/StudentForm'
// import TeacherForm from './forms/TeacherForm'
import EnterRoom from './forms/EnterRoom'
import TypeOfUserForm from './forms/TypeOfUserForm';

function JoinForm() {

  // const [membershipLable, switchMembershipLable] = useState("(please choose)")

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
        component: <TypeOfUserForm />
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