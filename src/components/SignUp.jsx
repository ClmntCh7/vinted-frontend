const SignUp = ({
  setVisible,
  signupReq,
  handleEmail,
  email,
  handlePassword,
  password,
  handleUsername,
  username,
  handleNewsletter,
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
      <p>S'inscrire</p>
      <form onSubmit={(e) => signupReq(e)}>
        <label htmlFor="username">
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Nom d'utilisateur"
            onChange={handleUsername}
            value={username}
          />
        </label>
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
        <div>
          <div className="Newsletter-checkbox">
            <input type="checkbox" onChange={handleNewsletter} />
            <span>S'inscrire à notre newsletter</span>
          </div>
          <p className="terms">
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
          <p>{errorMessage}</p>
        </div>
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default SignUp;