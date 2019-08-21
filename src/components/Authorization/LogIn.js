import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {compose} from 'redux';
import InputField from './InputField';
import submit from './asyncValidation';
import {required, emailVerification, minLengthPassword} from './validation';

const FormLogIn = ({handleSubmit, invalid, error}) => {
  console.log(error);
  return (
    <div >
      <form onSubmit={handleSubmit(submit)}>
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
        {error && <span>{error}</span>}
        <button type="submit" className="btn-submit" disabled={invalid}>Войти</button>
      </form>
    </div>
  );
}

export default compose(
  connect(null, {}),
  reduxForm({
    form: 'formLogIn',
  })
)(FormLogIn);
