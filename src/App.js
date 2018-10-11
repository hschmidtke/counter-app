import React, { Component } from "react";
import Counters from "./components/counters";
import "./App.css";
import NavBar from "./components/navbar";
import { generate } from "shortid";

class App extends Component {
  state = {
    counters: [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }]
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleAdd = () => {
    const { counters } = this.state;
    const value = 0;
    const counter = { value };
    this.setState({
      counters: [...counters, counter]
    });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = counter => {
    const counters = this.state.counters.filter(c => c !== counter);
    this.setState({ counters: counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onAdd={this.handleAdd}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
