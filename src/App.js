import React, { Component } from "react";
import "./index.css";
import "./assets/main.css";
import Open from "./components/Open/Open";
import Pendint from "./components/Pendint/Pendint";
import Inproge from "./components/Inproge/Inproge";
import Progress from "./components/Progress/Progress";
class App extends Component {
  state = {
    users: [],
    pendint: [],
    inproge: [],
    progress: [],
  };

  addUser = (title) => {
    let a = this.state.users;
    a.push({ id: a.length + 1, title: title });
    this.setState({
      users: a,
    });
  };

  pendintUser = (title) => {
    let b = this.state.pendint;
    b.push({ id: b.length + 1, title: title });
    this.setState({
      pendint: b,
    });
  };

  inprogeUser = (title) => {
    let c = this.state.inproge;
    c.push({ id: c.length + 1, title: title });
    this.setState({
      inproge: c,
    });
  };

  progressUser = (title) => {
    let d = this.state.progress;
    d.push({ id: d.length + 1, title: title });
    this.setState({
      progress: d,
    });
  };
  render() {
    const { users, pendint, inproge, progress } = this.state;
    return (
      <div>
        <div className="flex items-center justify-around flex-wrap gap-8">
          <Open addUser={this.addUser} users={users} />
          <Pendint pendintUser={this.pendintUser} pendint={pendint} />
          <Inproge inprogeUser={this.inprogeUser} inproge={inproge} />
          <Progress progressUser={this.progressUser} progress={progress} />
        </div>
      </div>
    );
  }
}

export default App;
