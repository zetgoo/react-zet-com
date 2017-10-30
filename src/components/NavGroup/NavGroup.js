import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { atomic } from '../constant';

const styles = {
  base: {
    textRendering: 'optimizeLegibility',
    color: '#69707a',
    padding: 0,
    border: 0,
    boxSizing: 'border-box',
    display: 'flex',
    flex: 1,
    fontWeight: 'normal',
    verticalAlign: 'baseline',
    justifyContent: 'flex-start',
  },
  menu: {
    '@media (max-width: 575px)': {
      display: 'block',
      position: 'absolute',
      backgroundColor: '#fff',
      left: 0,
      right: 0,
      top: '100%',
      width: '100vh',
    },
  },
  menuHide: {
    '@media (max-width: 575px)': {
      display: 'none',
    },
  },
  logo: {
    '@media (max-width: 575px)': {
      justifyContent: 'center',
    },
  },
  icon: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
};

const NavGroup = props => {
  let zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    zcss = props.zcss.map(item => {
      if (styles[item]) {
        return zcss.concat(styles[item]);
      }
      return zcss.concat(atomic[item]);
    });
  }
  console.log('ddk');
  return <div style={[styles.base, ...zcss]}>{props.children}</div>;
};

NavGroup.propTypes = {
  zcss: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Radium(NavGroup);
