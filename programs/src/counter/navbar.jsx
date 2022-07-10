import React, { Component } from 'react'
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-md">
            <a className="navbar-brand" href="#">
              Navbar
              <span className="btn btn-danger  m-2">{this.props.Total}</span>
            </a>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
