import React from 'react';
import PropTypes from 'prop-types';

export default function Button({
  onClick,
  children,
  text,
  type,
  disabled,
}) {
  return (
    <button
      onClick={ onClick }
      type={ !type ? 'button' : 'submit' }
      disabled={ disabled }
    >
      {
        children || text
      }
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  text: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.node,
};

Button.defaultProps = {
  disabled: false,
  text: '',
  type: 'button',
  children: undefined,
};
