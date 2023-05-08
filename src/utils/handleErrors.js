const handleErrors = (error, setErrorMessage) => {
  if (error.response.status === 409) {
    setErrorMessage(
      "Cet email est déjà utilisé, veuillez en choisir un autre."
    );
  } else if (error.response.status === 400) {
    if (error.response.data.message === "Missing parameters") {
      setErrorMessage("Veulliez remplir tous les champs");
    } else if (error.response.data.message === "User not found") {
      setErrorMessage("User not found");
    } else {
      setErrorMessage(error.response.data.message);
    }
  } else if (error.response.status === 401) {
    setErrorMessage("Identifiants incorrects");
  } else {
    setErrorMessage(error.response.data.message);
  }
};

export default handleErrors;
