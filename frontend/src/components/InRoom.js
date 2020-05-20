import React, {useState} from 'react';
import PropTypes from 'prop-types';
import StudentView from './UserViews/StudentView'
import TeacherView from './UserViews/TeacherView'

function InRoom(props){
  // const [typeOfUser, userIs] = useState("unknown") //dictate other peices of functionality potentially
  // const [NEWvisComponentER, changeVisComponentER] = useState(<h3>Loading...</h3>)

  const whoDis = () => {
    if(props.studentName) {
      // userIs("student")
      return {component:<StudentView/>}
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
  teacherPassword: PropTypes.string
}
export default InRoom;