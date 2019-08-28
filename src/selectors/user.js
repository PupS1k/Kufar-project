const getTab = state => state.user.tab;
const getRegistrationError = state => state.user.registrationError;
const getLogInError = state => state.user.mail;
const getIsAuthorizationOpen = state => state.user.isAuthorizationOpen;
const getUserMail = state => state.user.mail;
const getIsRegistration = state => state.user.isRegistration;

export {
  getTab,
  getLogInError,
  getRegistrationError,
  getIsAuthorizationOpen,
  getUserMail,
  getIsRegistration
};
