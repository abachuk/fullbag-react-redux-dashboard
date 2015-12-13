import React from 'react'
import 'styles/core.scss'
import Firebase from 'firebase'
import constants from 'utils/constants'
import { actions as authActions } from '../redux/modules/auth'
import { connect } from 'react-redux'

const ref = new Firebase(constants.FIREBASE)
// let auth = ref.getAuth()
// import { Link } from 'react-router'

const mapStateToProps = (state) => ({
  auth: state.auth
})

export class LoginView extends React.Component {

  static propTypes = {

  }

  handleSubmit (e) {
    e.preventDefault()
    let email = this.refs.email.value
    let password = this.refs.password.value
    ref.authWithPassword({
      'email': email,
      'password': password
    }, function (error, authData) {
      if (error) {
        console.log('Login Failed!', error)
      } else {
        console.log('Authenticated successfully with payload:', authData)
        // auth = authData
      }
    })
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

export default connect(mapStateToProps, authActions)(LoginView)
