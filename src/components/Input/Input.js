import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';

import { colors, atomic } from '../constant';

const styles = {
  base: {
    appearance: 'none',
    alignItems: 'center',
    padding: '0 .5em',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 3,
    display: 'inline-flex',
    fontSize: '0.875em',
    height: '2.25em',
    justifyContent: 'flex-start',
    lineHeight: 1.5,
    position: 'relative',
    verticalAlign: 'top',
    backgroundColor: colors.no,
    borderColor: colors.initBorder,
    color: colors.default,
    boxShadow: 'inset 0 1px 2px rgba(10, 10, 10, 0.1)',
    maxWidth: '100%',
    width: '100%',
    boxSizing: 'border-box',
    ':hover': {
      borderColor: colors.success,
    },
    ':focus': {
      borderColor: colors.success,
      outline: 0,
    },
  },
  disabled: {
    backgroundColor: 'whitesmoke',
    borderColor: 'whitesmoke',
    boxShadow: 'none',
    color: '#7a7a7a',
    cursor: 'not-allowed',
  },
  readOnly: {
    boxShadow: 'none',
  },
  error: {
    borderColor: colors.danger,
    ':hover': {
      borderColor: colors.danger,
    },
    ':focus': {
      borderColor: colors.danger,
      outline: 0,
    },
  },
};

const Input = props => {
  let zcss = [];
  if (props.readOnly) {
    zcss.push(styles.readOnly);
  }
  if (props.zcss && Array.isArray(props.zcss)) {
    zcss = props.zcss.map(item => {
      if (styles[item]) {
        return zcss.concat(styles[item]);
      }
      return zcss.concat(atomic[item]);
    });
  }
  return <input {...props} style={[styles.base, ...zcss, props.style]} />;
};

Input.propTypes = {
  zcss: PropTypes.arrayOf(PropTypes.string).isRequired,
  style: PropTypes.oneOfType([null, PropTypes.object]).isRequired,
  readOnly: PropTypes.bool.isRequired,
};

export default Radium(Input);
