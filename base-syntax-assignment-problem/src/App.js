import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    users:[
      {username:'SunnySetia' ,text:'random text from sunny.'},
      {username:'MJ', text:'Michael Jackson was here.'}
    ]
  }

  changeUsernameHandler = (event)=>{
    this.setState({
      users:[
        {username:event.target.value ,text:'random text from sunny.'},
        {username:'MJ', text:'Michael Jackson was here.'}
      ]
    });
  }
  render() {

    return (
      <div className="App">
        <UserInput changed={this.changeUsernameHandler} username={this.state.users[0].username}/>
        <UserOutput username={this.state.users[0].username} textData={this.state.users[0].text}/>
        <UserOutput username={this.state.users[1].username} textData={this.state.users[1].text}/>
      </div>
    );
  }
}

export default App;
