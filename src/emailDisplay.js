import React from 'react';
import './App.css';


function EmailDisplay(props) {
  return(
    <div>
      <p>From: {props.email.sender}</p>
      <p>To: {props.email.recipient}</p>
      <p>Subject: {props.email.subject}</p>
      <p>Sent: {props.email.date}</p>
      <p>ID: {props.email.id}</p>
      <br />
      <p>{props.email.message}</p>
      <button type='button' onClick={props.clearCurrent}>Return</button>
    </div>
  )
}

export default EmailDisplay