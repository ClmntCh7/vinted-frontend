const Login = ({
  setVisible,
  loginReq,
  handleEmail,
  email,
  handlePassword,
  password,
  errorMessage,
}) => {
  return (
    <div className="Form-container">
      <button
        onClick={() => {
          setVisible(false);
        }}
      >
        X
      </button>
      <p>Se connecter</p>
      <form onSubmit={(e) => loginReq(e)}>
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
        <p>{errorMessage}</p>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
