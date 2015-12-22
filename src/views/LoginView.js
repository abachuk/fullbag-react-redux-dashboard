import React from 'react'
import 'styles/core.scss'
import Firebase from 'firebase'
import constants from 'utils/constants'
import { actions as authActions } from '../redux/modules/auth'
import { connect } from 'react-redux'
import { createHistory } from 'history'
import { pushPath } from 'redux-simple-router'

let history = createHistory()
// import { history } from 'react-router'

const ref = new Firebase(constants.FIREBASE)
// let auth = ref.getAuth()
// import { Link } from 'react-router'

const mapStateToProps = (state) => ({
  auth: state.auth
})

export class LoginView extends React.Component {

  static propTypes = {
    history: React.PropTypes.object
  }

  handleSubmit (e) {
    e.preventDefault()
    console.log(this)
    let email = this.refs.email.value
    let password = this.refs.password.value
    console.log(history)
    ref.authWithPassword({
      'email': email,
      'password': password
    }, function (error, authData) {
      if (error) {
        console.log('Login Failed!', error)
      } else {
        console.log('Authenticated successfully with payload:', authData)
        // history.replace('/about')
        // history.replaceState({}, '/')
        console.log(pushPath)
        pushPath('/about')
      }
    })
  }

  isit (e) {
    e.preventDefault()
    console.log('yo')
    pushPath('/logon')
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
          <a href='#' className='btn' onClick={this.isit}>Yo</a>
          <button type='submit' className='btn btn-default'>Login</button>
        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps, authActions)(LoginView)