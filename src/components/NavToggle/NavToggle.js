import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { atomic } from '../constant';
import Icon from '../Icon/Icon';

const styles = {
  base: {
    outline: 0,
    boxShadow: 'none',
    padding: '5px 8px',
    lineHeight: 1,
    background: 'transparent',
    border: 0,
    borderRadius: 5,
    margin: 0,
    display: 'none',
    '@media (max-width: 575px)': {
      display: 'flex',
      flex: 1,
      padding: '0 5px',
    },
  },
};

const NavToggle = props => {
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
    <button style={[styles.base]} onClick={props.onClick}>
      {!props.isActive && (
        <Icon zcss={['cl_success', 'f1r']} icon="fa fa-bars" />
      )}
      {props.isActive && (
        <Icon zcss={['cl_disable', 'f1r']} icon="fa fa-times" />
      )}
    </button>
  );
};

NavToggle.propTypes = {
  zcss: PropTypes.arrayOf(PropTypes.string).isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Radium(NavToggle);
