import React, { Component } from 'react'
import Counters from './counters'
import Navbar from './navbar'
class APP extends Component {
  state = {
    counter: [
      { id: 1, value: 3 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  }

  handleReset = () => {
    const counter = this.state.counter.map((e) => {
      e.value = 0
      return e
    })
    this.setState({ counter })
  }

  handleDecreament = (COUNTERID) => {
    const aray = [...this.state.counter]
    const obj = aray.indexOf(COUNTERID)
    aray[obj] = { ...COUNTERID }
    aray[obj].value--
    this.setState({ counter: aray })
  }

  handleDelete = (counterID) => {
    const counter = this.state.counter.filter((e) => e.id !== counterID)
    this.setState({ counter })
  }

  handleIncreament = (counterId) => {
    const aray = [...this.state.counter]
    const obj = aray.indexOf(counterId)
    aray[obj] = { ...counterId }
    aray[obj].value++
    this.setState({ counter: aray })
  }
  render() {
    return (
      <div>
        <Navbar Total={this.state.counter.filter((a) => a.value > 0).length} />
        <main className="Container">
          <Counters
            counter={this.state.counter}
            onIncreament={this.handleIncreament}
            onDecreament={this.handleDecreament}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          />
        </main>

        {'Jesus thanks'}
      </div>
    )
  }
}

export default APP
