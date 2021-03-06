import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { SignInContainer, ButtonsContainer, SignInTitle } from './sign-in.styles';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [ userCredentials, setCredentials ] = useState({ email: '', password: '' });

   const handleSubmit = async event => {
    event.preventDefault();

    emailSignInStart(email, password);
  }
  
  const { email, password } = userCredentials;
  const handleChange = event => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value })
  }

  return (
      <SignInContainer>
      <SignInTitle>I have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput 
          name="email" 
          type="email" 
          handleChange={handleChange}
          value={email} 
          label="email"
          required />
        <FormInput 
          name="password" 
          type="password" 
          handleChange={handleChange}
          value={password} 
          label="password"
          required />
      <ButtonsContainer>
        <CustomButton type="submit">Sign In</CustomButton>
        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>{' '} 
        Sign in with Google { ' ' }
        </CustomButton>
      </ButtonsContainer>
      </form>
      </SignInContainer>
    );
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => 
    dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);