import React from 'react';
import './App.css';
import EmailLine from './emailLine'


function EmailList(props) {
  let sortedEmails = props.allEmails.slice()
  sortedEmails.sort((a, b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0))
  sortedEmails.reverse()
  return (
    <div>
      <form>
        <div className="grid-container">
          <div className="grid-item"></div>
          <div className="grid-item">
            <input type='text' name='search' placeholder='Search for messages' onChange={props.handleChange} />
          </div>
          <div className="grid-item">
            <button type='button' onClick={props.composeEmail}>Compose New Email</button>
          </div>
          <div className="grid-item"></div>
        </div>
      </form>
      
      <div className="grid-container">
        <div className='grid-item'>X</div>
        <div className='grid-item'>Date</div>
        <div className='grid-item'>From</div>
        <div className='grid-item'>Subject</div>
        {sortedEmails
          .filter((email) => {
            return (
              (email.subject.toLowerCase().includes(!!(props.search) ? props.search.toLowerCase() : '')) ||
              (email.sender.toLowerCase().includes(!!(props.search) ? props.search.toLowerCase() : ''))
            )
          }).map((email) => {
            return (
              <EmailLine 
                key={email.id}
                date={email.date}
                subject={email.subject} 
                sender={email.sender} 
                name={email.id} 
                setCurrentEmail={props.setCurrentEmail}
                deleteEmail={props.deleteEmail}
              />
            )
          })
        }
      </div>
      
    </div>
  )
}

export default EmailList;