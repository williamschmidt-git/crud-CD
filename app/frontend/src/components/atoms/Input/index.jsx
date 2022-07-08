import PropTypes from 'prop-types';
import React from 'react';

export default function Input({
  type,
  placeholder,
  value,
  onChange,
  name,
  id,
}) {
  return (
    <input
      id={ id }
      type={ type }
      placeholder={ placeholder }
      value={ value }
      onChange={ onChange }
      name={ name }
    />
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  id: PropTypes.string.isRequired,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  name: '',
};
