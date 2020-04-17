import React from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamForm extends React.Component {
  renderError({error, touched}) {
    if(error && touched) {
      console.log({error, touched})

      return (
        <div className="ui error message">
          <div className="header">
            {error}
          </div>
        </div>
      );
    } 
    return null
  }

  renderInput = ({input, label, meta}) => { 
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off"></input>
        {this.renderError(meta)}
      </div>
    );
  }
  
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues)
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title" component={this.renderInput} label="Enter Title"></Field>
        <Field name="description" component={this.renderInput} label="Enter Description"></Field>
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const error = {};
  
  if(!formValues.title) {
   error.title ="You must enter a title"; 
  } 

  if(!formValues.description) {
    error.description ="You must enter a description"; 
  }
  
  return error;
}

export default reduxForm({
  form: 'streamForm',
  validate
})(StreamForm)


