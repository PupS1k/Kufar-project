import React from 'react';
import Button from '../../Button';
import InputField from '../../InputField';

export default (props) => {
  const {
    onSubmit,
    handleInput,
    mail,
    password,
    verificationPassword,
    formErrors,
    isValid,
    signUpError
  } = props;
  return (
    <form className="form-logIn" onSubmit={onSubmit}>
      <div className="seller-status">
        <label className="icon-label">
          <input
            name="seller"
            className="icon-input"
            value="Частное лицо"
            type="radio"
            onChange={handleInput}
            defaultChecked
          />
          <div className="icon-radio-btn" />
          <p>Частное лицо</p>
        </label>
        <label className="icon-label">
          <input
            name="seller"
            value="Компания"
            onChange={handleInput}
            className="icon-input"
            type="radio"
          />
          <div className="icon-radio-btn" />
          <p>Компания</p>
        </label>
      </div>
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
      <InputField
        type="password"
        name="verificationPassword"
        value={verificationPassword}
        handleInput={handleInput}
        placeholder="Повторите пароль"
        fieldError={formErrors.verificationPassword}
      />
      {signUpError && <span>{signUpError}</span>}
      <Button
        type="submit"
        className="btn-submit"
        disabled={isValid}
        mode="primary_green"
        label="Создать Профиль"
        labelSize="large"
      />
    </form>
  );
}
