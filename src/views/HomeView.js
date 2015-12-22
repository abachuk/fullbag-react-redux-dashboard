import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { actions as counterActions } from '../redux/modules/counter'
import styles from './HomeView.scss'
import Navbar from '../components/navigation'
import { createHistory } from 'history'
import { pushPath } from 'redux-simple-router'

let history = createHistory()

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  counter: state.counter
})
export class HomeView extends React.Component {
  static propTypes = {
    counter: React.PropTypes.number.isRequired,
    doubleAsync: React.PropTypes.func.isRequired,
    increment: React.PropTypes.func.isRequired,
    history: React.PropTypes.object
  }

  yo (e) {
    e.preventDefault()
    // history.pushState(null, '/about')
    pushPath('/login', {}, false)
    // window.location.replace('/about')
    console.log(pushPath)
  }

  render () {
    return (
      <div className='container text-center'>
        <Navbar />
        <h1>Welcome to the React Redux Starter Kit</h1>
        <h2>
          Sample Counter:&nbsp;
          <span className={styles['counter--green']}>{this.props.counter}</span>
        </h2>
        <button className='btn btn-default'
                onClick={() => this.props.increment(1)}>
          Increment
        </button>
        <button className='btn btn-default'
                onClick={this.props.doubleAsync}>
          Double (Async)
        </button>
        <hr />
        <Link to='/about'>Go To About View</Link>
        <a href='#' className='btn btn-default' onClick={this.yo}>Yo</a>
      </div>
    )
  }
}

export default connect(mapStateToProps, counterActions)(HomeView)
