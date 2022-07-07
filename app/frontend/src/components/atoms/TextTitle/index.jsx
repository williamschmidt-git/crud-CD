import React from 'react';
import PropTypes from 'prop-types';

export default function TextTitle({
  children,
}) {
  return (
    <h1>
      {children}
    </h1>
  );
}

TextTitle.propTypes = {
  children: PropTypes.string.isRequired,
};
