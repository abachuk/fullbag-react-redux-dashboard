import React from 'react'
import 'styles/core.scss'
import IngredientsForm from '../components/ingredients-fields'
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

  addOne (e) {
    e.preventDefault()
    console.log(this)
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

          <IngredientsForm />
          <button className='btn btn-info' onClick={this.addOne.bind(this)}>Add</button>

          <div className='form-group'>
            <label forHtml='description'>Description</label>
            <textarea className='form-control' rows='3' id='description' />
          </div>

          <div className='form-group'>
            <label forHtml='picure'>Upload picture</label>
            <input type='file' id='picure' />
          </div>

          <input type='submit' value='Create recipe' className='btn btn-primary' />

        </form>
      </div>
    )
  }
}

export default NewrecipeView
