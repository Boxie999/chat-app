import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <main className="welcome">
      
      <div class="card">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="card-inner">
      <h1>Welcome to my Chat App.</h1>
      <br />
      <h3>Click the START button below to sign in with Google.</h3>
      </div>
      </div>
      
    
    
    <button onClick={googleSignIn} data-text="Awesome" class="button">
    <span class="actual-text">&nbsp;start&nbsp;</span>
    <span class="hover-text" aria-hidden="true">&nbsp;start&nbsp;</span>
    </button>
    </main>
  );
};

export default Welcome;