import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const Login = ({ token, setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );

      setToken(response.data.token);
    } catch (error) {
      console.log("ERROR.MESSAGE ", error.message);
    }
  };
  Cookies.set("token", token, { expires: 1 / 24 });

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  return (
    <div className="container">
      <div className="Form-container">
        <p>Se connecter</p>
        <form onSubmit={sendData}>
          <label htmlFor="email">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleEmail}
              value={email}
            />
          </label>
          <label htmlFor="password">
            <input
              id="password"
              type="password"
              placeholder="Mot de passe"
              onChange={handlePassword}
              value={password}
            />
          </label>
          <button type="submit">Se connecter</button>
        </form>
      </div>
      {token && <Navigate to="/" />}
    </div>
  );
};

export default Login;
