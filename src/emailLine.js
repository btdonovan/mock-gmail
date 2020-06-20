import React from 'react';
import './App.css';

function EmailLine(props) {
  return (
    <React.Fragment>
      <div className='grid-item'>
        <img 
          name={props.name} 
          width="20px" 
          src='https://image.flaticon.com/icons/png/512/216/216658.png' 
          alt='delete' 
          onClick={props.deleteEmail}>
        </img>
      </div>
      <div 
      className='grid-item' 
      data-div_name={props.name}  
      onClick={props.setCurrentEmail}>
        { /* 
          Apparently the data-div_name trick above is the key to getting data out of an event on something other than an image or a button
          See https://ozmoroz.com/2018/07/pass-value-to-onclick-react/
        */}
        {props.date}
      </div>
      <div className='grid-item' data-div_name={props.name} onClick={props.setCurrentEmail}>
        {props.sender}
      </div>
      <div className='grid-item' data-div_name={props.name} onClick={props.setCurrentEmail}>
        {props.subject}
      </div>
      
      {/* <button className='message-line' name={props.name} onClick={props.setCurrentEmail}>
       -  - 
      </button> */}
    </React.Fragment>
  )
}

export default EmailLine