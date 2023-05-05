import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";

const Modal = ({
  setVisible,
  token,
  setToken,
  modalToggle,
  //   setModalToggle
}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  //   LOGIN
  const loginReq = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );

      setToken(response.data.token);
      setVisible(false);
      if (token) {
        Cookies.set("token", token, { expires: 1 / 24 });
        <Navigate to="/" />;
      }
    } catch (error) {
      console.log("ERROR.MESSAGE ", error.message);
      if (error.response.status === 509) {
        setErrorMessage(
          "Cet email est déjà utilisé, veuillez en choisir un autre."
        );
      } else if (error.response.message === "Missing Parameters") {
        setErrorMessage("Veulliez remplir tous les champs");
      }
    }
  };

  //   SIGNUP
  const signupReq = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          username: username,
          email: email,
          password: password,
          newsletter: newsletter,
        }
      );

      setToken(response.data.token);
      setVisible(false);
      if (token) {
        Cookies.set("token", token, { expires: 1 / 24 });
        <Navigate to="/" />;
      }
    } catch (error) {
      console.log("ERROR.MESSAGE ", error.message);
    }
  };
  const handleUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
  };
  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };
  const handleNewsletter = () => {
    setNewsletter(!newsletter);
  };

  return (
    <div className="Modal-root">
      {modalToggle === 2 ? (
        <Login
          setVisible={setVisible}
          loginReq={loginReq}
          handleEmail={handleEmail}
          email={email}
          handlePassword={handlePassword}
          password={password}
          errorMessage={errorMessage}
        />
      ) : null}
      {modalToggle === 1 ? (
        <SignUp
          setVisible={setVisible}
          signupReq={signupReq}
          handleEmail={handleEmail}
          email={email}
          handlePassword={handlePassword}
          password={password}
          handleUsername={handleUsername}
          username={username}
          handleNewsletter={handleNewsletter}
          newsletter={newsletter}
          token={token}
          setToken={setToken}
          errorMessage={errorMessage}
        />
      ) : null}

      {/* <div className="Form-container">
        <button
          onClick={() => {
            setVisible(false);
          }}
        >
          X
        </button>
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
      </div> */}
      {/* {token && <Navigate to="/" />} */}
    </div>
  );
};

export default Modal;
