import React from 'react'

export class IngredientsForm extends React.Component {
  render () {
    return (
      <div className='form-group'>
        <h3>Ingredients</h3>
        <label forHtml='ingredient-name'>Name</label>
        <input type='text' className='form-control' id='ingredient-name' placeholder='Name' />
        <label forHtml='ingredient-amount'>Amount</label>
        <input type='text' className='form-control' id='ingredient-amount' placeholder='Amount' />        
      </div>
    )
  }
}

export default IngredientsForm
