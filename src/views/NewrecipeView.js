import React from 'react'
import 'styles/core.scss'
// import Firebase from 'firebase'
// import constants from 'utils/constants'
// import { actions as authActions } from '../redux/modules/auth'
// import { connect } from 'react-redux'
// import { createHistory } from 'history'

// let history = createHistory()
// import { history } from 'react-router'

// const ref = new Firebase(constants.FIREBASE)
// let auth = ref.getAuth()
// import { Link } from 'react-router'

// const mapStateToProps = (state) => ({
//   auth: state.auth
// })

export class NewrecipeView extends React.Component {

  addOne(e) {
    e.preventDefault()
  }

  render () {
    return (
      <div className='container'>
        <form>
          <h1>New Recipe</h1>

          <div className='form-group'>
            <label forHtml='title'>Title</label>
            <input type='text' className='form-control' id='title' placeholder='Name of the recipe' />
          </div>

          <div className='form-group'>
            <h3>Ingredients</h3>
            <label forHtml='ingredient-name'>Name</label>
            <input type='text' className='form-control' id='ingredient-name' placeholder='Name' />
            <label forHtml='ingredient-amount'>Amount</label>
            <input type='text' className='form-control' id='ingredient-amount' placeholder='Amount' />
            <button className='btn btn-info' onClick={this.addOne.bind(this)}>Add</button>
          </div>

        </form>
      </div>
    )
  }
}

export default NewrecipeView
