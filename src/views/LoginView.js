import React from 'react'
import 'styles/core.scss'
// import { Link } from 'react-router'

export class LoginView extends React.Component {

  static propTypes = {

  }

  handleSubmit (e) {
    e.preventDefault()
    let email = this.refs.email.value
    let password = this.refs.password.value
    
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className='form-group'>
            <label htmlFor='username'>Email address</label>
            <input type='email' ref='email' className='form-control' id='username' placeholder='Email' />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' ref='password' className='form-control' id='password' placeholder='Password' />
          </div>

          <button type='submit' className='btn btn-default'>Login</button>
        </form>
      </div>
    )
  }
}

export default LoginView
