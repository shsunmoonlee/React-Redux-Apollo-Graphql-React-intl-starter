import React, { Component } from 'react'
import { auth } from '../helpers/auth'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import AppBar from 'material-ui/AppBar';
function setErrorMsg(error) {
  return {
    registerError: error.message
  }
}
const style = {
 margin: 15,
};
export default class Register extends Component {
  constructor(props){
    super(props);
    this.state={
    email:'',
    password:'',
    registerError: null
    }
   }
  handleSubmit = (e) => {
    e.preventDefault()
    auth(this.state.email, this.state.password)
      .catch(e => this.setState(setErrorMsg(e)))
  }
  render () {
    return (
      <div className="section-register">
        <AppBar
           title="Register"
         />
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <TextField
              className="form-email"
              ref={(email) => this.email = email}
              placeholder="Email"
               hintText="Enter your Email"
               floatingLabelText="Email"
               onChange = {(event,newValue) => this.setState({email:newValue})}
              />
          </div>
          <div className="form-group">
            <TextField
              type="password"
              className="form-password"
              placeholder="Password"
              ref={(pw) => this.pw = pw}
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
              />
          </div>
          {
            this.state.registerError &&
            <div className="form-group">
            <TextField>
            <div className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              <span className="sr-only">Error:</span>
              &nbsp;{this.state.registerError}
            </div>
            </TextField>
            </div>
          }
          <RaisedButton label="Register" onClick={this.handleSubmit} type="submit" className="btn btn-primary" primary={true} style={style}/>

        </form>
      </div>
    )
  }
}
