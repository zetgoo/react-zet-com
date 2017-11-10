import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { atomic } from '../constant';

const styles = {
  base: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    paddingBottom: 10,
  },
};

const MenuGroup = props => {
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
    <div style={[styles.base, ...zcss, props.style]}>{props.children}</div>
  );
};

MenuGroup.propTypes = {
  zcss: PropTypes.arrayOf(PropTypes.string).isRequired,
  style: PropTypes.shape().isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Radium(MenuGroup);
