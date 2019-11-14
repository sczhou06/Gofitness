import React from "react";
import SignUpForm from "../components/SignUpForm";
import pagebg from "../assets/img/pagebg.jpg"
import TopMenuBar from "../components/TopMenuBar"

const SignUp = () =>{
    return (
        <div>
          <img
            className="page overlay"
            src={pagebg}
          />
          <TopMenuBar/>
          <SignUpForm/>
        </div>
    );
};

export default SignUp;
