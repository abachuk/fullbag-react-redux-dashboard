import React from 'react'
import 'styles/core.scss'
import Navbar from '../components/navigation'

export default class CoreLayout extends React.Component {
  static propTypes = {
    children: React.PropTypes.element
  }

  render () {
    return (
      <div className='page-container'>
        <Navbar />
        <div className='view-container'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
