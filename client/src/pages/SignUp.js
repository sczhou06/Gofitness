import React from "react";
import WrappedRegistrationForm from "../components/SignUpForm";
import pagebg from "../assets/img/pagebg.jpg"
import TopMenuBar from "../components/TopMenuBar"

function SignUp (){
    return (
        <div>
          <img
            className="page overlay"
            src={pagebg}
          />
          <TopMenuBar/>
          <WrappedRegistrationForm />
        </div>
    );
}

export default SignUp;
