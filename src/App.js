import React from 'react';
import './App.css';
import EmailList from './emailList'
import EmailDisplay from './emailDisplay'
import Send from './send'

// ToDo:
// 
// View all of my email messages (subject line + sender) -----------/Done
// View one of my email messages with all of its details -----------/Done
// Send an email----------------------------------------------------/Done
// Search for a specific email by subject---------------------------/Done
// Sort my emails by date-------------------------------------------/Done
// Delete an email that I no longer need----------------------------/Done
// Search for a specific email by sender----------------------------/Done
    // Search bar now filters on subject or sender



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allEmails: [],
      compose: false,
    }
    this.fetchEmails = this.fetchEmails.bind(this);
    this.setCurrentEmail = this.setCurrentEmail.bind(this);
    this.clearCurrent = this.clearCurrent.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
    this.composeEmail = this.composeEmail.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteEmail = this.deleteEmail.bind(this);
  }

  async clearCurrent(event) {
    event.preventDefault()
    this.setState({
      currentEmail: undefined,
    })
  }
  async handleChange(event) {
    let target = event.target
    let name = target.name
    let value = target.value
    await this.setState({
        [name]: value,
    })
  }

  async composeEmail(event) {
    event.preventDefault()
    await this.setState({
      compose: true,
    })
  }
  async sendEmail(event) {
    event.preventDefault()
    let newEmail = {
      sender: 'You',
      recipient: this.state.recipient,
      subject: this.state.subject,
      message: this.state.message,
    } 
    await fetch('http://localhost:3001/send', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'post',
      body: JSON.stringify(newEmail),
    }).then((response) => response.json())
    
    await this.fetchEmails();
    this.setState({
      compose: false,
    })
  }

  async deleteEmail(event) {
    event.preventDefault()
    let id = Number(event.target.name)
    let body = {
      id: id,
    }
    body = JSON.stringify(body)
    await fetch('http://localhost:3001/delete', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'post',
      body: body,
    }).then((response) => response.json())
    await this.fetchEmails();
  }

  async setCurrentEmail(event) {
    event.preventDefault()
    let currentEmail = event.target.name
    await this.setState({
      currentEmail: currentEmail
    })
  }

  async fetchEmails() {
    await fetch('http://localhost:3001/emails')
      .then((response) => response.json())
      .then((json) => {this.setState({allEmails: json})})
  }

  render() {
    if (this.state.allEmails.length === 0) {
      this.fetchEmails()
    }
    if (!this.state.currentEmail && !this.state.compose) {
      return (
        <div>
          <EmailList 
            allEmails={this.state.allEmails} 
            search={this.state.search} 
            setCurrentEmail={this.setCurrentEmail} 
            composeEmail={this.composeEmail} 
            handleChange={this.handleChange}
            deleteEmail={this.deleteEmail}
          />
        </div>
      );
    } else if (this.state.currentEmail) {
      return (
        <div>
          <EmailDisplay email={this.state.allEmails[this.state.currentEmail - 1]} clearCurrent={this.clearCurrent}/>
        </div>
      )
    } else if (this.state.compose) {
      return (
        <div>
          <Send handleChange={this.handleChange} sendEmail={this.sendEmail}/>
        </div>
      )
    }
  }
}

export default App;
