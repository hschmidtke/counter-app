import React from "react";
import Counter from "./counter";
import { generate } from "shortid";

const Counters = ({
  onAdd,
  onReset,
  counters,
  onDelete,
  onIncrement,
  onDecrement
}) => (
    <div>
      <button className="btn btn-primary btn-sm m-2" onClick={onAdd}>
        Add
    </button>
      <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
        Reset
    </button>
      {counters.map(counter => (
        <Counter
          key={counter.key}
          onDelete={onDelete}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          counter={counter}
        />
      ))}
    </div>
  );

export default Counters;
