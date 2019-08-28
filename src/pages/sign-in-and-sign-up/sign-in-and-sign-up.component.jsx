import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import './sign-in-and-sign-up.styles.scss'

const SignInAndSignUpPage = () => {
  return (
    <div className={'sign-in-and-sign-up'}>
      <div className="container">
        <div className="row">
          <div className="col">
            <SignIn />
          </div>
          <div className="col">

          </div>
        </div>
      </div>
    </div>
  )
};

export default SignInAndSignUpPage;
