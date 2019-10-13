const getTab = state => state.user.tab;
const getIsOpenWindow = state => state.user.isOpenWindow;
const getUserMail = state => state.user.mail;
const getSignInError = state => state.user.signInError;
const getSignUpError = state => state.user.signUpError;
const getUserId = state => state.user.id;
const getUserProducts = state => state.user.products;

export {
  getTab,
  getSignInError,
  getIsOpenWindow,
  getUserMail,
  getSignUpError,
  getUserId,
  getUserProducts
};
