import React, { Component } from "react";

class ButtonElement extends Component {
  render() {
    return (
      <button
        onClick={this.props.eventOfButton}
        className={this.props.classOfButton}
      >
        {this.props.textOfButton}
      </button>
    );
  }
}

export default ButtonElement;
