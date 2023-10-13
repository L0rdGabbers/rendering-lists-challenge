import React, { Component } from 'react';
import css from './css/NavBarForm.module.css';

export class NavBarForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: false,
       buttonMessage: 'Login'
    }
  }

  handleClick = () => {
    this.setState({
      isLoggedIn: this.state.isLoggedIn ? false : true,
      buttonMessage: this.state.buttonMessage === 'Login' ? 'Submit' : 'Login'
    })
  }

  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery</h1>
        {this.state.isLoggedIn ? (
          <form>
            <label>
              Username:
              <input type="text" name="username" />
            </label>
            <label>
              Password:
              <input type="text" name="password" />
            </label>
            <button onClick={this.handleClick}>{this.state.buttonMessage}</button>
          </form>
        ) : (
          <button onClick={this.handleClick}>{this.state.buttonMessage}</button>
        )}
      </div>
    )
  }
}

export default NavBarForm