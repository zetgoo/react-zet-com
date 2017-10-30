import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { atomic } from '../constant';

const styles = {
  base: {
    textRendering: 'optimizeLegibility',
    color: '#69707a',
    padding: '.75em',
    border: 0,
    boxSizing: 'border-box',
    fontWeight: 'normal',
    verticalAlign: 'baseline',
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    '@media (max-width: 575px)': {
      display: 'none',
      // justifyContent: 'center',
      // padding: '0 5px'
    },
  },
  icon: {
    '@media (max-width: 575px)': {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  },
  menu: {
    '@media (max-width: 575px)': {
      padding: 10,
      borderBottom: 'solid 1px #dbdbdb',
    },
  },
};

const NavItem = props => {
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
    <span {...props} style={[styles.base, ...zcss, props.style]}>
      {props.children}
    </span>
  );
};

NavItem.propTypes = {
  zcss: PropTypes.arrayOf(PropTypes.string).isRequired,
  style: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  action: PropTypes.func.isRequired,
};

export default Radium(NavItem);
