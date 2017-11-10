import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { atomic } from '../constant';

const styles = {
  base: {
    whiteSpace: 'nowrap',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    position: 'relative',
    margin: 0,
    marginBottom: 5,
    color: '#4b646f',
    overflow: 'hidden',
    textOverflow: 'clip',
  },
};

const MenuLabel = props => {
  let zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    zcss = props.zcss.map(item => {
      if (styles[item]) {
        return zcss.concat(styles[item]);
      }
      return zcss.concat(atomic[item]);
    });
  }

  return <p style={[styles.base, ...zcss, props.style]}>{props.children}</p>;
};

MenuLabel.propTypes = {
  zcss: PropTypes.arrayOf(PropTypes.string).isRequired,
  style: PropTypes.oneOfType([null, PropTypes.object]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Radium(MenuLabel);
