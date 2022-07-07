import PropTypes from 'prop-types';
import React from 'react';

export default function Input({
  type,
  placeholder,
  value,
  onChange,
  name,
}) {
  return (
    <input
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
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  name: '',
};
