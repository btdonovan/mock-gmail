import React from 'react';
import './App.css';

function EmailLine(props) {
  return (
    <div>
      <img name={props.name} width="20px" src='https://cdn1.iconfinder.com/data/icons/device-apps-settings/2048/Recycle_bin-512.png' alt='delete' onClick={props.deleteEmail}></img>
      <button className='message-line' name={props.name} onClick={props.setCurrentEmail}>
        {props.subject} - {props.sender}
      </button>
    </div>
  )
}

export default EmailLine