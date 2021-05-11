import React from "react";
import Counter from "./counter";

class Counters extends React.Component {
  render() {
    const {
      onReset,
      onDelete,
      onIncrement,
      onDecrement,
      counters,
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-small m-2">
          Reset
        </button>

        {counters.map((counter) => (
          <div className="row-sm">
            <Counter
              key={counter.id}
              counter={counter}
              onDelete={onDelete}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Counters;
