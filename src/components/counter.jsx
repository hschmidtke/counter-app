import React, { Component } from "react";
import ButtonElement from "./buttonElement";

class Counter extends Component {

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <ButtonElement
          eventOfButton={() => this.props.onIncrement(this.props.counter)}
          classOfButton="btn btn-secondary btn-sm"
          textOfButton="Increment"
        />
        <ButtonElement
          eventOfButton={() => this.props.onDecrement(this.props.counter)}
          classOfButton="btn btn-primary btn-sm m-2"
          textOfButton="Decrement"
        />
        <ButtonElement
          eventOfButton={() => this.props.onDelete(this.props.counter)}
          classOfButton="btn btn-danger btn-sm m-2"
          textOfButton="Delete"
        />
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
