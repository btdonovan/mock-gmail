import React from 'react';
import './App.css';

function EmailLine(props) {
  return (
    <div>
    <button name={props.name} onClick={props.setCurrentEmail}>
      {props.subject} - {props.sender}
    </button>
    </div>
  )
}

export default EmailLine