import { useState } from "react";
import { useHistory } from "react-router-dom";
import M from "materialize-css";

const Registration = () => {
  document.title = "Blog Sphere Network | Registration";
  const history = useHistory();

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Function to handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
      picture: 'http://localhost:8000/profile-pics/0.jpg',
    };

    try {
      const response = await fetch('http://localhost:8000/auth/registration', {
       method: 'POST',
       headers: {
        'Content-Type': 'application/json',
       },
       body: JSON.stringify(user), 
      })

      if (response.ok) {
      const data = await response.json();
      history.push('/login');
      M.toast({ html: data.message, classes: "green"});
      } else {
      const data = await response.json();
      M.toast({ html: data.errors, classes: "red"})
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  

  return (
    <div className="login">
      <div className="row container">
        <div className="loginMessage col s12 m6">
          <h3>The Blogsphere Network</h3>
          <p>Please join us! Create your account for free!</p>

          <p>
            Already have an account? Please <a href="/login">log in</a>.
          </p>
          <div>
            <img
              id="cat-gif"
              src="https://media.giphy.com/media/j0HjChGV0J44KrrlGv/giphy.gif"
              alt="The cat is typing"
              width="250"
            />
          </div>
        </div>
        <div className="row">
          <form className="login-form col s12 m4 container" onSubmit={handleFormSubmit}>
            <fieldset className="login-fieldset z-depth-4">
              <div className="row">
                <div className="input-field col s12 ">
                  <input id="name" type="text" value={name} className="validate" required
                  onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="name">Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 ">
                  <input id="email" type="email" value={email} className="validate" required
                  onChange={(e) => setEmail(e.target.value)}

                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    className="validate"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button className="waves-effect waves-light btn-small green accent-4" type="button" onClick={togglePasswordVisibility}>
                    {showPassword ? "Hide" : "Show"} Password
                  </button>
                  <label htmlFor="password">Password</label>
                  <input
                    id="picture"
                    type="hidden"
                    value="http://localhost:8000/profile-pics/0.jpg"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <button
                    type="submit"
                    className="waves-effect waves-light btn-small"
                  >
                    Create Account
                  </button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
