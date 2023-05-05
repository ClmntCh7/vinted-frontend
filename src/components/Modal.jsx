import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import handleErrors from "../utils/handleErrors";

const Modal = ({ setVisible, token, setToken, modalToggle }) => {
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

      if (response.data.token) {
        Cookies.set("token", response.data.token, { expires: 1 / 24 });
        <Navigate to="/" />;
      }
    } catch (error) {
      // console.log("ERROR.MESSAGE ", error.response.data.message);
      // console.log("ERROR ", error);
      // if (error.response.status === 509) {
      //   setErrorMessage(
      //     "Cet email est déjà utilisé, veuillez en choisir un autre."
      //   );
      // } else if (error.response.data.message === "Missing Parameters") {
      //   setErrorMessage("Veulliez remplir tous les champs");
      // }
      handleErrors.handleErrors(
        error.response.status,
        error.response.data.message,
        setErrorMessage,
        errorMessage
      );
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
      if (response.data.token) {
        Cookies.set("token", response.data.token, { expires: 1 / 24 });
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
    </div>
  );
};

export default Modal;
