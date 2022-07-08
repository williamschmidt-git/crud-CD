import React from 'react';
import PropTypes from 'prop-types';
import './style.module.css';

export default function CentralizeTemplate({ children }) {
  return (
    <div className=".centralizeTemplate">
      { children }
    </div>
  );
}

CentralizeTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
