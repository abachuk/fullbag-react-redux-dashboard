import React from 'react'
import {reduxForm} from 'redux-form'
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

  static propTypes = {
    fields: React.PropTypes.object,
    handleSubmit: React.PropTypes.func
  }

  addOne (e) {
    e.preventDefault()
    console.log(this)
  }

  handleFile (e) {
    const self = this
    let reader = new FileReader()
    let file = e.target.files[0]
    reader.onload = function (upload) {
      self.setState({
        data_uri: upload.target.result
      })
    }

    reader.readAsDataURL(file)
  }

  handleSubmit (e) {
    e.preventDefault()
    console.log(this)
    let title = this.refs.title.value
    // let ingredientName = this.refs.ingredientName.value
    // let ingredientAmount = this.refs.ingredientAmount.value
    let description = this.refs.description.value
    let file = this.refs.file
    console.log(description)
    console.log(file)
    console.log(title)
  }

  render () {
    const {fields: {title, description, file}, handleSubmit} = this.props
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <h1>New Recipe</h1>

          <div className='form-group'>
            <label forHtml='title'>Title</label>
            <input type='text' className='form-control' id='title' placeholder='Name of the recipe' {...title} ref='title' />
          </div>

          <IngredientsForm />
          <button className='btn btn-info' onClick={this.addOne.bind(this)}>Add</button>

          <div className='form-group'>
            <label forHtml='description'>Description</label>
            <textarea className='form-control' rows='3' id='description' {...description} ref='description' />
          </div>

          <div className='form-group'>
            <label forHtml='picure'>Upload picture</label>
            <input type='file' id='picure' ref='file' onChange={this.handleFile} {...file} />
          </div>

          <input type='submit' value='Create recipe' className='btn btn-primary' />

        </form>
      </div>
    )
  }
}

// NewrecipeView =

export default reduxForm({ // <----- THIS IS THE IMPORTANT PART!
  form: 'newRecipe',                           // a unique name for this form
  fields: ['title', 'description', 'file'] // all the fields in your form
})(NewrecipeView)
