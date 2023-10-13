import React, { Component } from 'react';
import NavBarChild from './NavBarChild';

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
      <NavBarChild 
        isLoggedIn={this.state.isLoggedIn}
        buttonMessage={this.state.buttonMessage}
        handleClick={this.handleClick}/>
    )
  }
}

export default NavBarForm