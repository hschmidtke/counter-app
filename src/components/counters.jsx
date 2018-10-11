import React, { Component } from "react";
import Counter from "./counter";
import {generate} from "shortid";
class Counters extends Component {
  render() {

    const { onAdd, onReset, counters, onDelete, onIncrement } = this.props;
    console.log('counters', counters)
    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={onAdd}>
          Add
        </button>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={generate()}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
