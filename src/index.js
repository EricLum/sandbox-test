import React from "react";
import ReactDOM from "react-dom";
import Item from "./test";
import "./styles.css";

class App extends React.Component {
  state = {
    isLit: false
  };

  handleClick = () => {
    this.setState(prevState => {
      return {
        isLit: !prevState.isLit
      };
    });
  };
  render() {
    return (
      <div className="App">
        <h1>React!</h1>
        <button onClick={this.handleClick}>Click Me</button>
        <Item isLit={this.state.isLit} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
