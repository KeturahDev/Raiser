import React, { useState } from 'react';
// import StudentForm from './forms/StudentForm'
// import TeacherForm from './forms/TeacherForm'
import EnterRoom from './forms/EnterRoom'
import TypeOfUserForm from './forms/TypeOfUserForm';

function JoinForm() {
  
  const gatherFormInputs = (inputs) => {
    if (inputs.type === "student") {
      changeCurrentComponent(<EnterRoom studentName={inputs.studentName}/>)

    } else {
      changeCurrentComponent(<EnterRoom teacherPassword={inputs.teacherPassword}/>)
    }
  }

  const [currentComponent, changeCurrentComponent] = useState(<TypeOfUserForm gatherFormInputs={gatherFormInputs} />)
  
  return (
    <div style={{ border: "2px solid orange" }} >
      {currentComponent}
    </div>
  );
}

export default JoinForm