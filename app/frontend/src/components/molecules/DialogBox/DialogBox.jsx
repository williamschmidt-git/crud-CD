import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button';

export default function DialogBox({ message, onDialog }) {
  return (
    <div
      style={ {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(0,0,0,0.5)',
      } }
    >
      <div
        style={ {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          background: 'white',
          padding: '20px',
          borderRadius: '10px',
        } }
      >
        <h3>{ message }</h3>
        <div
          style={ {
            display: 'flex',
            alignItems: 'center',
            color: 'white',
          } }
        >
          <Button onClick={ () => onDialog(true) } text="Yes" />
          <Button text="No" onClick={ () => onDialog(false) } />
        </div>
      </div>
    </div>
  );
}

DialogBox.propTypes = {
  message: PropTypes.string.isRequired,
  onDialog: PropTypes.func.isRequired,
};
