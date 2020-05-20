import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import StudentView from './UserViews/StudentView'
import TeacherView from './UserViews/TeacherView'

function InRoom(props){
  // const [typeOfUser, userIs] = useState("unknown") //dictate other peices of functionality potentially

  const addStudent = (id, studentObj) => {
    let url = new URL('http://127.0.0.1:5000/room')
    url.search = new URLSearchParams({
      id
    })
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(studentObj)
    }).then((response) => {
      console.log('JSONIFIED STUDENT CREATED: ', JSON.stringify(response))  
    }).catch((e) => {
      console.log("Unable to create new student: ", e)
    })
  }
  const whoDis = () => {
    if(props.studentName) {
      // userIs("student")
      addStudent(props.currentRoom._id, {name: props.studentName})
      return {component:<StudentView name={props.studentName}/>}
      // console.log("student")
    } else if (props.teacherPassword) {
      console.log("teacher")
      // userIs("teacher")
      return {component:<TeacherView/>}
    }
  }
  
  const visComponent = whoDis()
  return(
    <div style={{border: "2px solid violet"}} >
      {visComponent.component}
    </div>
  )
}
InRoom.propTypes = {
  studentName: PropTypes.string,
  teacherPassword: PropTypes.string,
  currentRoom: PropTypes.object
}
export default InRoom;