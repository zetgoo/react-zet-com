import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { atomic } from '../constant';

const styles = {
  base: {
    boxSizing: 'inherit',
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: '100%',
    fontWeight: 'normal',
    verticalAlign: 'baseline',
    position: 'relative',
    textAlign: 'left',
    display: 'flex',
  },
  isCenter: {
    justifyContent: 'center',
  },
  isRight: {
    justifyContent: 'flex-end',
  },
};

const Addons = props => {
  const zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map(item => zcss.concat(styles[item], atomic[item]));
  }

  return (
    <span>
      <p {...props} style={[styles.base, ...zcss]}>
        {props.children}
      </p>
    </span>
  );
};

Addons.propTypes = {
  zcss: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Radium(Addons);
