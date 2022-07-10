import React, { Component } from 'react'
class Counter extends Component {
  valueColor() {
    return this.props.counter.value === 0
      ? 'btn btn-danger  m-2'
      : 'btn btn-primary  m-2'
  }

  formater = () => {
    return this.props.counter.value === 0 ? 'Zero' : this.props.counter.value
  }

  render() {
    return (
      <div>
        <span className={this.valueColor()}>{this.formater()}</span>
        <button
          onClick={() => this.props.onIncreament(this.props.counter)}
          className="btn btn-secondary  m-2"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecreament(this.props.counter)}
          className="btn btn-secondary m-2"
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger  m-2"
        >
          Delete
        </button>{' '}
      </div>
    )
  }
}

export default Counter
