import React from 'react';
import Header from './Header'
import JoinForm from './JoinForm'

function Splash() {
  return(
    <div style={{border: "2px solid blue"}}>
      <p>this is splash coponent</p>
      <Header />
      <JoinForm />
      <button>Create New Room</button>
    </div>
  );
}

export default Splash;