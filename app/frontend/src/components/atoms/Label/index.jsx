import PropTypes from 'prop-types';
import React from 'react';

const Label = ({ forInput, label, children }) => (
  <label
    htmlFor={ forInput }
  >
    {label}
    {children}
  </label>
);

Label.propTypes = {
  forInput: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Label.defaultProps = {
  children: null,
};

export default Label;
