import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { colors, atomic } from '../constant';

const styles = {
  base: {
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    borderRadius: 3,
    color: '#4a4a4a',
    display: 'inline-flex',
    fontSize: '0.75rem',
    height: '2em',
    justifyContent: 'center',
    lineHeight: 1.5,
    paddingLeft: '0.75em',
    paddingRight: '0.75em',
    whiteSpace: 'nowrap',
    verticalAlign: 'top',
  },
  button: {
    padding: '0.25em',
    marginLeft: '0.5em',
    justifyContent: 'center',
    display: 'inline-flex',
    backgroundColor: 'rgba(17, 17, 17, 0.2)',
    border: 0,
    borderRadius: '30%',
  },
  isSmall: {
    fontSize: 11,
    height: 20,
    paddingLeft: 8,
    paddingRight: 8,
  },
  isMedium: {
    fontSize: 14,
    height: 32,
    paddingLeft: 14,
    paddingRight: 14,
  },
  isLarge: {
    fontSize: 18,
    height: 40,
    lineHeight: 24,
    paddingLeft: 18,
    paddingRight: 18,
  },

  primary: {
    backgroundColor: colors.primary,
  },

  success: {
    backgroundColor: colors.success,
  },
  disable: {
    backgroundColor: colors.disable,
    pointerEvents: 'none',
    cursor: 'default',
  },
  info: {
    backgroundColor: colors.info,
  },
  warning: {
    backgroundColor: colors.warning,
  },
  danger: {
    background: colors.danger,
  },
  cancel: {
    background: colors.cancel,
  },
  white: {
    backgroundColor: colors.no,
    borderColor: 'transparent',
    color: '#111',
  },
  light: {
    backgroundColor: '#f5f7fa',
    borderColor: 'transparent',
    color: '#69707a',
  },
  black: {
    backgroundColor: '#111',
    borderColor: 'transparent',
    color: '#fff',
  },
};

const Tag = props => {
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
    <span style={[styles.base, ...zcss, props.style]}>
      {props.text}
      <button
        className={props.icon}
        style={[styles.button]}
        onClick={props.onClick}
      />
    </span>
  );
};

Tag.propTypes = {
  zcss: PropTypes.arrayOf(PropTypes.string).isRequired,
  style: PropTypes.oneOfType([null, PropTypes.object]).isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Radium(Tag);
