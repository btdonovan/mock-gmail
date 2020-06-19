import React from 'react';
import './App.css';

function Send(props) {
  return (
    <form onSubmit={props.sendEmail}>
      <input type='email' name='recipient' placeholder='Recipient E-mail' onChange={props.handleChange}></input><br />
      <input type='text' name='subject' placeholder='Type a subject here' onChange={props.handleChange}></input><br />
      <textarea rows='20' cols='80' name='message' placeholder='Type your message here' onChange={props.handleChange}></textarea><br />
      <button type='submit'>Send</button>
    </form>
  )
}


export default Send;