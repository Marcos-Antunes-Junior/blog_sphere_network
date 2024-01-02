import { useState } from "react";
import M from "materialize-css";
import axios from "axios";

const Login = () => {
  M.AutoInit();
  const [email, setEmail] = useState("");
  const [password, setPAssword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { email, password };
  };

  const url = "http://localhost:8000/google";

  document.title = "Blog Sphere Network | Login";
  return (
    <div className="login">
      
      <div className="row container">
      <div className="loginMessage col s12 m6">
      <h3>The Blogsphere Network</h3>
      <p>
      Blogsphere Network: Redefining social connection through personalized blogs, fostering diverse perspectives and vibrant conversations online.
      </p>
      
      </div>
      <div className="row">
      <form className="login-form col s12 m4 container ">
        <fieldset className="login-fieldset z-depth-4">
          <div className="row">
            <div className="input-field col s12 ">
              <input id="email" type="email" className="validate" />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="password"
                type="password"
                className="validate "
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <a href="/login" className="waves-effect waves-light btn-small">
                Login
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <a
                href={url}
                className="waves-effect waves-light btn-small darken-4 white black-text"
              >
                <img
                  className="google-logo"
                  alt="Google sign-in"
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                />
                Sign In
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <a
                href="/login"
                className="waves-effect waves-light btn-small green accent-4"
              >
                Create New Account
              </a>
            </div>
          </div>
        </fieldset>
      </form>
      </div>
      </div>
      </div>
   
  );
};

export default Login;
