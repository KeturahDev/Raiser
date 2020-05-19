import React, {useState} from 'react';
import StudentForm from './forms/StudentForm'
import TeacherForm from './forms/TeacherForm'

function JoinForm() {

  const [typeOfForm, switchForm] = useState("(please choose)")
  const [currentForm, changeFormTo] = useState(<h3> ... </h3>)
  
  const renderform = (form) => {
    // console.log("in renderForm functoin: ",typeOfForm)
    // const formType = typeOfForm
    if (form === "student") {
      changeFormTo(<StudentForm/>)
    } else if (form === "teacher"){
      changeFormTo(<TeacherForm/>)
    }
    // rerender()
  }

  const joiningAs = (event) => {
    switchForm(event.target.value)
    console.log("onChange:", event.target.value)
    renderform(event.target.value)
  }

  return(
    <div style={{border: "2px solid orange"}} >
      <div>
        <form>
          {/* <input type="text" name="roompin" placeholder="room-pin"/> */}
          <label>
          Join as {typeOfForm} :
            <select value={"pin-entry"} onChange={joiningAs}>
              <option value="pin-entry"> - </option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </label>
          {/* <button type="submit">submit</button> */}
        </form>
        <hr></hr>
        {currentForm}
      </div>
      
    </div>
  );
}

export default JoinForm