import React from 'react'
import Firebase from 'firebase'
import constants from 'utils/constants'
import { actions as authActions } from '../redux/modules/auth'
import { connect } from 'react-redux'
// import { createHistory } from 'history'

// let history = createHistory()
// import { Link } from 'react-router'

const ref = new Firebase(constants.FIREBASE)

const mapStateToProps = (state) => ({
  auth: state.auth
})

export class Navbar extends React.Component {
  static propTypes = {
    history: React.PropTypes.object
  }

  static propTypes = {
    history: React.PropTypes.object
  }

  logout (e) {
    e.preventDefault()
    ref.unauth()
    console.log(this)
    this.props.history.pushState(null, '/login')
  }

  render () {
    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'>
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
          <a className='navbar-brand' href='#'>Brand</a>
        </div>

    <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
      <ul className='nav navbar-nav'>
        <li className='active'><a href='#'>Link <span className='sr-only'>(current)</span></a></li>
        <li><a href='#'>Link</a></li>
        <li className='dropdown'>
          <a href='#' className='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>
            Dropdown <span className='caret'></span>
          </a>
          <ul className='dropdown-menu'>
            <li><a href='#'>Action</a></li>
          </ul>
        </li>
      </ul>
      <ul className='nav navbar-nav navbar-right'>
        <li><a href='#' onClick={this.logout.bind(this)}>Logout</a></li>
      </ul>
    </div>
  </div>
</nav>
    )
  }
}

export default connect(mapStateToProps, authActions)(Navbar)
