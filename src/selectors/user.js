const getTab = state => state.user.tab;
const getRegistrationError = state => state.user.registrationError;
const getLogInError = state => state.user.logInError;
const getIsAuthorizationOpen = state => state.user.isAuthorizationOpen;
const getUserMail = state => state.user.mail;

export {
  getTab,
  getLogInError,
  getRegistrationError,
  getIsAuthorizationOpen,
  getUserMail
}
