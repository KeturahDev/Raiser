import React from 'react';
import PropTypes from 'prop-types';
import StudentView from './UserViews/StudentView'
import TeacherView from './UserViews/TeacherView'
import {useSelector} from 'react-redux'

function InRoom(props){
  const roomId = useSelector(state => state.currentRoom._id)
  const addStudent = (id, studentObj) => {

    let url = new URL(`http://127.0.0.1:5000/room/${id}/students`)
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
      addStudent(roomId, {name: props.studentName})
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
}
export default InRoom;