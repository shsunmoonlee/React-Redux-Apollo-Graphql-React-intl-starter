import React, { Component } from 'react'
import { socialLogin, login, resetPassword } from '../helpers/auth'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import AppBar from 'material-ui/AppBar'
import { intlShape, injectIntl, FormattedMessage, defineMessages } from 'react-intl'

function setErrorMsg(error) {
  return {
    loginMessage: error
  }
}
const style = {
 margin: 15,
};
class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
      loginMessage: null
    }
   }
  handleSubmit = (e) => {
    e.preventDefault()
    login(this.state.email, this.state.password)
      .catch((error) => {
          this.setState(setErrorMsg('Invalid username/password.'))
        })
  }
  resetPassword = () => {
    resetPassword(this.state.email)
      .then(() => this.setState(setErrorMsg(`Password reset email sent to ${this.state.email}.`)))
      .catch((error) => this.setState(setErrorMsg(`Email address not found.`)))
  }
  socialLoginHandler = () => {
    socialLogin('google')
      .catch((error) => {
        this.setState(setErrorMsg(error.message))
      })
  }
  render () {
    const {formatMessage} = this.props.intl;
    return (
      <div className="section-login">
        <AppBar
           title="Login"
         />
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <TextField
              className="form-email"
              ref={(email) => this.email = email}
              hintText={<FormattedMessage id="app.login.email"
                                defaultMessage="Enter your Email"
                                description="Email" />}
              floatingLabelText="Email"
              onChange = {(event,newValue) => this.setState({email:newValue})}
              />
          </div>
          <div className="form-group">
            <TextField
              type="password"
              className="form-password"
              ref={(pw) => this.pw = pw}
              hintText={<FormattedMessage id="app.login.password"
                                defaultMessage="Enter your Password"
                                description="Email" />}
              floatingLabelText="Password"
              onChange = {(event,newValue) => this.setState({password:newValue})}
              />
          </div>
          {
            this.state.loginMessage &&
            <div className="form-group">
            <TextField>
            <div className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              <span className="sr-only">Error:</span>
              &nbsp;{this.state.loginMessage} <a href="#" onClick={this.resetPassword} className="alert-link">Forgot Password?</a>
            </div>
            </TextField>
            </div>
          }
          <RaisedButton label={<FormattedMessage id="app.button.login"
                            defaultMessage="Login"
                            description="Login" />} onClick={this.handleSubmit} type="submit" className="btn btn-primary" primary={true} style={style}/>

        </form>
        <RaisedButton label={<FormattedMessage id="app.button.loginwithgoogle"
                          defaultMessage="LOGIN WITH GOOGLE"
                          description="Login with google" />} onClick={this.socialLoginHandler} />
      </div>
    )
  }
}

Login.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Login);
