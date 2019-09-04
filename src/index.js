import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
// ***STATE : - Always declare in Class  Components ***
class App extends React.Component {
  // Constructor is a specific method that build into java script, that initialise it's this class.
  constructor() {
    // Super is a global function
    super();
    this.state = {
      answer: "Yes"
    };
  }
  render() {
    return (
      <div className="App">
        <p>Is state important to know? {this.state.answer}</p>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
