import React from 'react';
import Button from '../../Button';
import InputField from '../../InputField';

const AuthView = (props) => {
  const {
    onSubmit,
    handleInput,
    mail,
    password,
    formErrors,
    signInError,
    isValid
  } = props;
  return (
    <form className="form-logIn" onSubmit={onSubmit}>
      <InputField
        type="text"
        name="mail"
        value={mail}
        handleInput={handleInput}
        placeholder="E-mail"
        fieldError={formErrors.mail}
      />
      <InputField
        type="password"
        name="password"
        value={password}
        handleInput={handleInput}
        placeholder="Пароль"
        fieldError={formErrors.password}
      />
      {signInError && <span>{signInError}</span>}
      <Button
        type="submit"
        className="btn-submit"
        disabled={isValid}
        mode="primary_green"
        label="Войти"
        labelSize="large"
      />
    </form>
  );
};

export default AuthView;
