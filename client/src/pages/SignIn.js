import React from 'react';
import pagebg from '../assets/img/pagebg.jpg';
import TopMenuBar from "../components/TopMenuBar";
import SignInForm from "../components/SignInForm"
import GoogleAuth from "../components/GoogleAuth"

function SignIn() {
  return(
    <div>
      <img
        className="page overlay"
        src={pagebg}
      />
      <TopMenuBar />
      <SignInForm />
    </div>
  );
}

export default SignIn;
