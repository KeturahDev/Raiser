import React from 'react';
import PropTypes from 'prop-types';

class StudentView extends React.Component{
  render(){ 
    return(
      <div>
        <p>hello there {this.props.name}!</p>
      </div>
    )
  }
  
}
StudentView.propTypes = {
  name: PropTypes.string
}
export default StudentView;