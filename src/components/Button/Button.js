import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { colors, atomic } from '../constant';

const styles = {
  base: {
    appearance: 'none',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 3,
    boxShadow: 'none',
    display: 'inline-flex',
    fontSize: '0.875em',
    height: '2.25em',
    lineHeight: 1.5,
    position: 'relative',
    verticalAlign: 'top',
    touchCallout: 'none',
    userSelect: 'none',
    backgroundColor: 'white',
    borderColor: '#dbdbdb',
    color: '#222324',
    cursor: 'pointer',
    justifyContent: 'center',
    paddingLeft: '0.75em',
    paddingRight: '0.75em',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    ':hover': {
      zIndex: 2,
      borderColor: '#aeb1b5',
      color: '#222324',
      textDecoration: 'none',
    },
    ':focus': {
      borderColor: colors.success,
      outline: 'none',
      color: '#222324',
      zIndex: 3,
      textDecoration: 'none',
    },
    ':active': {
      boxShadow: 'inset 0 1px 2px rgba(17, 17, 17, 0.2)',
      zIndex: 4,
      textDecoration: 'none',
    },
  },

  white: {
    backgroundColor: colors.no,
    borderColor: 'transparent',
    color: '#111',
    ':hover': {
      backgroundColor: '#e6e6e6',
      borderColor: 'transparent',
      color: '#111',
    },
    ':focus': {
      backgroundColor: '#e6e6e6',
      borderColor: 'transparent',
      color: '#111',
    },
    ':active': {
      borderColor: 'transparent',
    },
  },

  light: {
    backgroundColor: '#f5f7fa',
    borderColor: 'transparent',
    color: '#69707a',
    ':hover': {
      backgroundColor: '#d3dce9',
      borderColor: 'transparent',
      color: '#69707a',
    },
    ':focus': {
      backgroundColor: '#d3dce9',
      borderColor: 'transparent',
      color: '#69707a',
    },
    ':active': {
      borderColor: 'transparent',
    },
  },

  black: {
    backgroundColor: '#111',
    borderColor: 'transparent',
    color: '#fff',
    ':hover': {
      backgroundColor: '#000',
      color: '#fff',
      borderColor: 'transparent',
    },
    ':focus': {
      backgroundColor: '#000',
      color: '#fff',
      borderColor: 'transparent',
    },
    ':active': {
      borderColor: 'transparent',
    },
  },

  isLink: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    color: '#69707a',
    textDecoration: 'underline',
    ':hover': {
      backgroundColor: '#d3d6db',
      color: '#222324',
      borderColor: 'transparent',
    },
    ':focus': {
      backgroundColor: '#d3d6db',
      color: '#222324',
      borderColor: 'transparent',
    },
  },

  primary: {
    backgroundColor: colors.primary,
    borderColor: 'transparent',
    color: '#fff',
    ':hover': {
      backgroundColor: '#199fae',
      borderColor: 'transparent',
      color: '#fff',
    },
    ':focus': {
      backgroundColor: '#199fae',
      borderColor: 'transparent',
      color: '#fff',
    },
    ':active': {
      borderColor: 'transparent',
    },
  },

  info: {
    backgroundColor: colors.info,
    borderColor: 'transparent',
    color: '#fff',
    ':hover': {
      backgroundColor: '#1f99d3',
      borderColor: 'transparent',
      color: '#fff',
    },
    ':focus': {
      backgroundColor: '#1f99d3',
      borderColor: 'transparent',
      color: '#fff',
    },
    ':active': {
      borderColor: 'transparent',
    },
  },

  success: {
    backgroundColor: colors.success,
    borderColor: 'transparent',
    color: '#fff',
    ':hover': {
      backgroundColor: '#84cf6a',
      borderColor: 'transparent',
      color: '#fff',
    },
    ':focus': {
      backgroundColor: '#84cf6a',
      borderColor: 'transparent',
      color: '#fff',
    },
    ':active': {
      borderColor: 'transparent',
    },
  },
  disable: {
    backgroundColor: colors.disable,
    borderColor: 'transparent',
    color: 'rgba(17, 17, 17, 0.5)',
    cursor: 'not-allowed',
  },

  warning: {
    backgroundColor: colors.warning,
    borderColor: 'transparent',
    color: 'rgba(17, 17, 17, 0.5)',
    ':hover': {
      backgroundColor: '#fbda41',
      borderColor: 'transparent',
      color: 'rgba(17, 17, 17, 0.5)',
    },
    ':focus': {
      backgroundColor: '#fbda41',
      borderColor: 'transparent',
      color: 'rgba(17, 17, 17, 0.5)',
    },
    ':active': {
      borderColor: 'transparent',
    },
  },

  danger: {
    backgroundColor: colors.danger,
    borderColor: 'transparent',
    color: '#fff',
    ':hover': {
      backgroundColor: '#e84135',
      borderColor: 'transparent',
      color: '#fff',
    },
    ':focus': {
      backgroundColor: '#e84135',
      borderColor: 'transparent',
      color: '#fff',
    },
    ':active': {
      borderColor: 'transparent',
    },
  },

  cancel: {
    backgroundColor: colors.cancel,
    borderColor: 'transparent',
    color: '#f5f7fa',
  },

  isLoading: {
    color: 'transparent',
    pointerEvents: 'none',
    ':after': {
      animation: 'spinAround 500ms infinite linear',
      border: '2px solid #dbdbdb',
      borderRadius: '290486px',
      borderRightColor: 'transparent',
      borderTopColor: 'transparent',
      content: 'hjghjg',
      display: 'block',
      height: '1em',
      width: '1em',
      left: 2,
      top: 2,
      position: 'absolute',
    },
  },
};

const Button = props => {
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
    <button {...props} style={[styles.base, ...zcss, props.style]}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  zcss: PropTypes.arrayOf(PropTypes.string).isRequired,
  style: PropTypes.oneOfType([null, PropTypes.object]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Radium(Button);
