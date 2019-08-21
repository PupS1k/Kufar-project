import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({input, meta, type, placeholder}) => (
  <div className="input-field">
    <input {...input} placeholder={placeholder || ''} type={type} error={(meta.touched && meta.error) ? 'err' : ''}/>
    {meta.touched && meta.error && <span>{meta.error}</span>}
  </div>
);

InputField.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};

InputField.defaultProps = {
  placeholder: ''
};

export default InputField;
