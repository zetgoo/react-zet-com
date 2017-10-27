import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { colors, atomic } from '../constant';

const styles = {
  base: {
    textRendering: 'optimizeLegibility',
    backgroundColor: colors.danger,
    color: colors.no,
    lineHeight: '1.428571428571429em',
    margin: 0,
    border: 0,
    boxSizing: 'border-box',
    fontWeight: 'normal',
    verticalAlign: 'baseline',
    borderRadius: 3,
    padding: '16px 20px',
    position: 'relative',
  },
  buttonClose: {
    backgroundColor: 'red',
    border: 'none',
    cursor: 'pointer',
    display: 'inline-block',
    height: 24,
    position: 'relative',
    verticalAlign: 'top',
    width: 24,
    userSelect: 'none',
    borderRadius: '0 3px',
    float: 'right',
    margin: '-16px -20px 0 20px',
    alignItems: 'flex-start',
    textAlign: 'center',
    textRendering: 'auto',
    letterSpacing: 'normal',
    wordSpacing: 'normal',
    textTransform: 'none',
    textIndent: 0,
    textShadow: 'none',
  },
};

const Notification = props => {
  let zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    zcss = props.zcss.map(item => {
      if (styles[item]) {
        return zcss.concat(styles[item]);
      }
      return zcss.concat(atomic[item]);
    });
  }

  return (
    <div style={[styles.base, ...zcss]}>
      {props.enableCloseButton ? (
        <button
          style={[styles.buttonClose, ...zcss]}
          {...props.closeButtonProps}
        >
          <i className="fa fa-remove" />
        </button>
      ) : null}
      {props.children}
    </div>
  );
};

Notification.propTypes = {
  zcss: PropTypes.array,
};

export default Radium(Notification);
