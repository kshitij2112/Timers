import React, { Component } from "react";
import Stopwatch from "./Stopwatch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-title">Timer</div>
        <div className="Timers">
          <Stopwatch />
        </div>
      </div>
    );
  }
}
export default App;