const accessToken = () => {
  return window.sessionStorage.getItem("access_token");
};

const loggedIn = () => {
  return accessToken() !== null;
};

const handleUploadError = (error) => {
  switch (error) {
    case "ValidationError":
      return "Erreur de validation: un des champs requis est peut être manquant ou mal renseigné";
    case "MongoError":
      return "Erreur lors de la création: un objet renseigné avec des champs similaires existe sans doute déjà";
    default:
      return "Unknow Error";
  }
};

module.exports = { accessToken, loggedIn, handleUploadError };
