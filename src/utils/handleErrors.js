exports.handleErrors = (statusCode, message, setErrorMessage, errorMessage) => {
  if (statusCode === 509) {
    setErrorMessage(
      "Cet email est déjà utilisé, veuillez en choisir un autre."
    );
  } else if (statusCode === 400) {
    if (errorMessage === "Missing Parameters") {
      setErrorMessage("Veulliez remplir tous les champs");
    } else if (errorMessage === "User not found") {
      setErrorMessage("Veulliez remplir tous les champs");
    }
  }

  return errorMessage;
};
