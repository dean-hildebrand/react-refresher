import React from "react";
import Counter from "./counter";

class Counters extends React.Component {
  render() {
      const = { onReset, onDelete, onIncrement, counters} = this.props
    return (
      <div>
        <button
          onClick={onReset}
          className="btn btn-primary btn-small m-2"
        >
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
