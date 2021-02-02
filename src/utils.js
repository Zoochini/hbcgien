const accessToken = () => {
  return window.sessionStorage.getItem("access_token");
};

const loggedIn = () => {
  return accessToken() !== null;
};

module.exports = { accessToken, loggedIn };