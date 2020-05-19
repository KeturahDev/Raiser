import React, {useState} from 'react';

function JoinForm() {

  const [typeOfForm, switchForm] = useState("pin-entry")

  const joiningAs = (event) => {
    switchForm(event.target.value)
  }

  const handleSubmit = () => {

  }

  return(
    <div style={{border: "2px solid orange"}} >
      <h3>{typeOfForm}</h3>
      <div>
        <form onSubmit={handleSubmit}>
          {/* <input type="text" name="roompin" placeholder="room-pin"/> */}
          <label>
          Join as a :
            <select value={typeOfForm} onChange={joiningAs}>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </label>
          <button type="submit">submit</button>
        </form>
      </div>
      
    </div>
  );
}

export default JoinForm