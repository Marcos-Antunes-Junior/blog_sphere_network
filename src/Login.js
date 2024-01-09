import { useState } from "react";
import { useHistory } from "react-router-dom";
import M from "materialize-css";
import axios from "axios";

const Login = () => {
  document.title = "Blog Sphere Network | Login";
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPAssword] = useState("");
  M.AutoInit();

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { email, password };

    try{
    const response = await fetch('http://localhost:8000/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    })

    if(response.ok){
    const data = await response.json();
    history.push('/');
    M.toast({ html: data.message, classes: 'green'})
    } else {
    const data = await response.json();
    M.toast({ html: data.message, classes: 'red'})
    }
    } catch (error) {
    console.log('Error:', error)
    }
  };

  const url = "http://localhost:8000/google";

  
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
      <form className="login-form col s12 m4 container" onSubmit={handleSubmit}>
        <fieldset className="login-fieldset z-depth-4">
          <div className="row">
            <div className="input-field col s12 ">
              <input id="email" type="email" value={email} 
              className="validate" required
              onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="password"
                type="password"
                value={password}
                className="validate"
                required
                onChange={(e) => setPAssword(e.target.value)}
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <button className="waves-effect waves-light btn-small" type='submit'>
                Login
              </button>
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
                href="/registration"
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
