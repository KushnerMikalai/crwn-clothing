import React from 'react';
import Input from '../input/input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss'

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: '', password: '' })
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value })
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className={'sign-in'}>
        <h2>I already have an account</h2>
        <p>Sign in with your email and password</p>
        <form onSubmit={this.handleSubmit}>
          <div className="sign-in__input">
            <Input
              handleChange={this.handleChange}
              value={email}
              label={'Адрес эл. почты'}
              name={'email'}
              type={'email'}
            />
          </div>
          <div className="sign-in__input">
            <Input
              handleChange={this.handleChange}
              value={password}
              label={'Введите пароль'}
              name={'password'}
              type={'password'}
            />
          </div>
          <CustomButton type='submit'>Sign in</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn;
