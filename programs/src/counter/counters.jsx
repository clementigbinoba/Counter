import React, { Component } from 'react'
import Counter from './counter'
class Counters extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onReset} className="btn btn-secondary m-2">
          Reset
        </button>
        {this.props.counter.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncreament={this.props.onIncreament}
            onDelete={this.props.onDelete}
            onDecreament={this.props.onDecreament}
          />
        ))}
      </div>
    )
  }
}

export default Counters
