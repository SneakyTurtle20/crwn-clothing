import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import { SignInAndSignUpPageContainer } from './sign-in-and-sign-up.styles';
const SignInAndSignUpPage = () => (

  <SignInAndSignUpPageContainer className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </SignInAndSignUpPageContainer>
);

export default SignInAndSignUpPage;