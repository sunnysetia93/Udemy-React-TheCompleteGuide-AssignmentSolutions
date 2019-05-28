import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent';

import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state={
    text:"",
    length:0
  }
  textChangeHandler = (event)=>{
    this.setState({
      text:event.target.value,
      length:event.target.value.length
    })
  }

  deleteCharacterHandler = (index)=>{
      const splitCharacters = [...this.state.text.split('')];

      splitCharacters.splice(index,1);
      let joinCharacters = splitCharacters.join('');

      this.setState({
        text:joinCharacters,
        length:joinCharacters.length
      })
  }
  render() {

    let characters = null;

    if(this.state.length>0){
      let splitCharacters = this.state.text.split('');
      characters = (
        <div>
            {
              
              splitCharacters.map((c,index)=>{
                  return <CharComponent character={c} key={index} click={()=>this.deleteCharacterHandler(index)}/>
              })
            }
        </div>
      )
    }
    return (
      <div className="App">
        <input className="inputText" type="text" value={this.state.text} onChange={this.textChangeHandler} />
        <br/>
        <label>{this.state.text}</label>
        <ValidationComponent textLength={this.state.length}/>
        {characters}
      </div>
    );
  }
}

export default App;
