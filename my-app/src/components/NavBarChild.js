import React from 'react'
import css from './css/NavBarForm.module.css';

function NavBarChild(props) {
  return (
    <div className={css.NavBar}>
      <h1>My Gallery</h1>
      {props.isLoggedIn ? (
        <form>
          <label>
             Username:
            <input type="text" name="username" />
          </label>
          <label>
            Password:
            <input type="text" name="password" />
          </label>
          <button onClick={props.handleClick}>{props.buttonMessage}</button>
        </form>
        ) : (
          <button onClick={props.handleClick}>{props.buttonMessage}</button>
        )
      }
    </div>
  )
}

export default NavBarChild