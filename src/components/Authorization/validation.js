const required = value => (value ? undefined : 'Обязательно');
const emailVerification = value => (/[a-zA-Z0-9]+@[a-z]+[.]+[a-z]+/.test(value) ? undefined
  : 'Проверьте введенный e-mail - неправильный формат');
const minLengthPassword = value => (value.length > 4 ? undefined
  : 'Ваш пароль слишком короткий. Минимальная длина пароля 5 символов');

export {
  required,
  emailVerification,
  minLengthPassword
};
