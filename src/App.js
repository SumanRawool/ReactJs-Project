import "./App.css";
import React from "react";
import Comp from "./Comp";
class App extends React.Component {
  state = {
    name: "",
    count: 0,
    show: true,
  };
  inc = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    let child;
    if (this.state.show) {
      child = <Comp />;
    }
    return (
      <>
        <h1>Class Components</h1>
        <h1>{this.state.name}</h1>
        <h1>{this.state.prevName}</h1>
        <input
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <h1>{this.state.count}</h1>
        <button onClick={this.inc}>INC</button>
        {child}
        <button onClick={() => this.setState({ show: false })}>
          Delete Comp
        </button>
      </>
    );
  }
}

export default App;
