import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import handleErrors from "../utils/handleErrors";
// import avatar from "../assets/avatar-user.jpg";

const Modal = ({
  setVisible,
  visible,
  token,
  setToken,
  modalToggle,
  setModalToggle,
  errorMessage,
  setErrorMessage,
}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  //   LOGIN
  const loginReq = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      const response = await axios.post(
        "https://site--vinted-backend--m4snx7ydrpgs.code.run/user/login",
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
      handleErrors(error, setErrorMessage);
    }
  };

  //   SIGNUP
  const signupReq = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      const response = await axios.post(
        "https://site--vinted-backend--m4snx7ydrpgs.code.run/user/signup",
        {
          username: username,
          email: email,
          password: password,
          newsletter: newsletter,
          // avatar: avatar,
        }
      );

      setToken(response.data.token);
      setVisible(false);
      if (response.data.token) {
        Cookies.set("token", response.data.token, { expires: 1 / 24 });
        <Navigate to="/" />;
      }
    } catch (error) {
      handleErrors(error, setErrorMessage);
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
          setModalToggle={setModalToggle}
        />
      ) : null}
      {modalToggle === 2 ? (
        <Login
          setVisible={setVisible}
          visible={visible}
          loginReq={loginReq}
          handleEmail={handleEmail}
          email={email}
          handlePassword={handlePassword}
          password={password}
          errorMessage={errorMessage}
          setModalToggle={setModalToggle}
        />
      ) : null}
    </div>
  );
};

export default Modal;
