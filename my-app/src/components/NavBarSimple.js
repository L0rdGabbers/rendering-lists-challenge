import React, { Component } from 'react'
import css from './css/NavBarSimple.module.css'

export class NavBarSimple extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: 'Hello, Guest',
       buttonMessage: 'Login'
    }
  }

  handleClick = () => {
    this.setState((prevState) => {
      return {
        message: prevState.message === 'Welcome back, user!' ? 'Hello, Guest' : 'Welcome back, user!',
        buttonMessage: prevState.buttonMessage === 'Login' ? 'Logout' : 'Login'
      }
    }, () => {
        console.log('New Message:', this.state.message)
        console.log('New Button Message:', this.state.buttonMessage)
    });
  }

  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery</h1>
        <div>
          <span>{this.state.message}</span>
          <button onClick={this.handleClick}>{this.state.buttonMessage}</button>
        </div>
      </div>
    )
  }
}

export default NavBarSimple