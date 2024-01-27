import React, { useEffect, useRef, useState } from "react";
import Display from "./Display";

import "./Login.css";
function Login() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const [signup, setSignup] = useState(false);
  const [singnIn, setSignIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("Signup")) {
      setSignup(true);
    }
    if (localStorage.getItem("Email")) {
      setSignIn(true);
    }
  }, []);

  function handleLogin() {
    if (name.current.value && email.current.value && password.current.value) {
      localStorage.setItem("Name", name.current.value);
      localStorage.setItem("Email", email.current.value);
      localStorage.setItem("Password", password.current.value);
      localStorage.setItem("Signup", email.current.value);
      window.location.reload();
    }
  }
  function handleSignin() {
    if (
      email.current.value === localStorage.getItem("Email") &&
      password.current.value === localStorage.getItem("Password")
    ) {
      localStorage.setItem("Signup", email.current.value);
      window.location.reload();
    } else {
      alert("Enter the valid data");
    }
  }
  return (
    <>
      <div>
        {signup ? (
          <Display />
        ) : singnIn ? (
          <div className="container">
            <h1>Hello {localStorage.getItem("Name")}</h1>
            <div className="input_field">
              <input type="email" ref={email} placeholder="EmailId" />
            </div>
            <div className="input_field">
              <input type="password" ref={password} placeholder="password" />
            </div>
            <button className="button" onClick={handleSignin}>
              Sign In
            </button>
          </div>
        ) : (
          <div className="container">
            <h1 className="h1">Sign Up</h1>
            <div className="input_field">
              <input type="text" ref={name} placeholder="Username" />
            </div>
            <div className="input_field">
              <input type="email" ref={email} placeholder="EmailId" />
            </div>
            <div className="input_field">
              <input type="password" ref={password} placeholder="password" />
            </div>
            <button className="button" type="submit" onClick={handleLogin}>
              Sign Up
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Login;
