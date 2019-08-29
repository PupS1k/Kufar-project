const isRequired = value => (value ? '' : 'Обязательно');
const mailCorrect = value => (/[a-zA-Z0-9]+@[a-z]+[.]+[a-z]+/.test(value) ? ''
  : 'Проверьте введенный e-mail - неправильный формат');
const isVerificationPassword = (password, verificationPassword) => (
  password === verificationPassword ? '' : 'Пароли не совпадают');
const minLength = (value, len) => (value.length > len ? ''
  : `Ваш пароль слишком короткий. Минимальная длина пароля ${len + 1} символов`);

export {
  isRequired,
  isVerificationPassword,
  mailCorrect,
  minLength
};
