import React, {useState} from 'react';
import Header from './Header';
import JoinView from './JoinView';
import CreateRoom from './creating-rooms/CreateRoom'

function Splash() {
  const [visibleChild, changeVisChild] = useState("join")

  const handleClick = () => {
    if(visibleChild === "join") {
      changeVisChild("new")
    } else if (visibleChild === "new") {
      changeVisChild("join")
    }
  }

  const renderingChild = () => {
    if(visibleChild === "join") {
      return {
        component: <JoinView />,
        buttontext: "Create Room"
      } 
    } else {
      return {
        component: <CreateRoom />,
        buttontext: "Join Room"
      }
    }
  }
  
  const renderedChild = renderingChild()
  return(
    <div style={{border: "2px solid blue"}}>
      <p>this is splash coponent</p>
      <Header />
      {renderedChild.component}
      <button onClick={handleClick}>{renderedChild.buttontext}</button>
    </div>
  );
}

export default Splash;