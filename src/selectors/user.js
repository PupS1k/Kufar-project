const getTab = state => state.user.tab;
const getIsOpenWindow = state => state.user.isOpenWindow;
const getSignInError = state => state.user.signInError;
const getSignUpError = state => state.user.signUpError;
const getUserId = state => state.user.id;
const getUserProducts = state => state.user.products;

export {
  getTab,
  getSignInError,
  getIsOpenWindow,
  getSignUpError,
  getUserId,
  getUserProducts
};
