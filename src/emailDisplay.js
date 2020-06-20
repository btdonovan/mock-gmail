import React from 'react';
import './App.css';


function EmailDisplay(props) {
  let messageLines = props.email.message.split('\n')
  return(
    <React.Fragment>
      <div className="grid-container message-grid">
        <div className='grid-item'>From: </div>
        <div className='grid-item'>{props.email.sender}</div>
        <div className='grid-item'>To: </div>
        <div className='grid-item'>{props.email.recipient}</div>
        <div className='grid-item'>Subject: </div>
        <div className='grid-item'>{props.email.subject}</div>
        <div className='grid-item'>Sent: </div>
        <div className='grid-item'>{props.email.date}</div>
        <div className='grid-item'>ID: </div>
        <div className='grid-item'>{props.email.id}</div>
      </div>
      <div>
        {messageLines.map((line, i) => <p key={i}>{line}</p>)} 
        <button type='button' onClick={props.clearCurrent}>Return</button>
      </div>
    </React.Fragment>
  )
}

export default EmailDisplay