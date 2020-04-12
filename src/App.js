import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
  	super();
  	this.state={
  		text:""
  	};
  	this.change = this.change.bind(this);
  }	  
  render() {
    return (
      <div className="container">
        <textarea rows="3" value={this.state.text} onChange={this.change}></textarea>
        <div className="counter">{this.state.text.length}</div>
      </div>
    );
  };

  change(event){
  	this.setState({
  		text: event.target.value
  	});
  }
}

export default App;
