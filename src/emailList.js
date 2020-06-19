import React from 'react';
import './App.css';
import EmailLine from './emailLine'


function EmailList(props) {
  return (
    <div>
      <form>
        <input type='text' name='search' placeholder='Search for messages' onChange={props.handleChange}></input>
      </form>
      {props.allEmails
        .filter(email => email.subject.search(props.search) !== -1)
        .map((email) => <EmailLine key={email.id} subject={email.subject} sender={email.sender} name={email.id} setCurrentEmail={props.setCurrentEmail} />)}
      <button type='button' onClick={props.composeEmail}>Compose New Email</button>
    </div>
  )
}

export default EmailList;