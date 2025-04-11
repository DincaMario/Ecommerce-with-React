import React from "react";

import "./sign-in-and-sign-out.styles.scss";

import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";
function SignInAndSignUp ()
{
    return(
        <div className="sign-in-and-sign-out">
            <SignIn></SignIn>
            <SignUp></SignUp>
        </div>
    )
}

export default SignInAndSignUp;