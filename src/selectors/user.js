const getTab = state => state.user.tab;
const getRegistrationError = state => state.user.registrationError;
const getIsOpenWindow = state => state.user.isOpenWindow;
const getUserMail = state => state.user.mail;
const getIsRegistration = state => state.user.isRegistration;
const getUserId = state => state.user.id;
const getUserProducts = state => state.user.products;

export {
  getTab,
  getRegistrationError,
  getIsOpenWindow,
  getUserMail,
  getIsRegistration,
  getUserId,
  getUserProducts
};
