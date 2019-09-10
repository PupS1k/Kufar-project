const getTab = state => state.user.tab;
const getRegistrationError = state => state.user.registrationError;
const getLogInError = state => state.user.mail;
const getIsOpenWindow = state => state.user.isOpenWindow;
const getUserMail = state => state.user.mail;
const getIsRegistration = state => state.user.isRegistration;

export {
  getTab,
  getLogInError,
  getRegistrationError,
  getIsOpenWindow,
  getUserMail,
  getIsRegistration
};
