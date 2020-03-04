import React from "react";
import Hello from "./robots/Hello";
export default class App extends React.Component {
  state = {
    click: false
  };
  click = () => {
      this.setState({click:!this.state.click})
  };

  render() {
    return (
      <div className={"hello"}>
        <h2>Hello Electrate</h2>
        <button onClick={this.click} >Me click</button>
        <img src="./assets/logo.png" />
        <h4>A basic Electron + React.js template</h4>
        {this.state.click}
            <Hello show={this.state.click}/>
        
      </div>
    );
  }
}
