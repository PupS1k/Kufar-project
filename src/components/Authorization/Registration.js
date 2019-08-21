import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {compose} from 'redux';
import InputField from './InputField';
import {required, emailVerification, minLengthPassword} from './validation';
import RadioField from './RadioFiled';

const FormRegistration = ({handleSubmit, invalid }) => (
  <div className="form-registration">
    <form onSubmit={handleSubmit}>
      <div className="seller-status">
        <Field
          name="seller"
          type="radio"
          value="Частное лицо"
          text="Частное лицо"
          checked
          component={RadioField}
        />
        <Field
          name="seller"
          type="radio"
          text="Компания"
          value="Компания"
          checked
          component={RadioField}
        />
      </div>
      <p className="form-text">Вы не сможете изменить этот параметр позже</p>
      <Field
        name="mail"
        placeholder="E-mail"
        type="text"
        component={InputField}
        validate={[required, emailVerification]}
      />
      <Field
        name="password"
        placeholder="Пароль"
        type="password"
        component={InputField}
        validate={[required, minLengthPassword]}
      />
      <Field
        name="repeatPassword"
        placeholder="Повторите пароль"
        type="password"
        component={InputField}
        validate={[required, minLengthPassword]}
      />
      <button type="submit" className="btn-submit" disabled={invalid}>Создать профиль</button>
    </form>
  </div>
);

export default compose(
  connect(null, {}),
  reduxForm({
    form: 'formRegistration',
    onSubmit: (values, dispatch, {}) => {
      console.log(values);
    }
  })
)(FormRegistration);
