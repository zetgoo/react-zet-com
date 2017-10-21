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
    const decorate = props.zcss.map(item => {
      zcss.push(styles[item]);
      zcss.push(atomic[item]);
    });
  }

  return (
    <span>
      <p {...props} style={[styles.base, ...zcss]}>
        {props.children}
      </p>
    </span>
  );
};

Addons.defaultProps = {
  zcss: [],
  children: [],
};

Addons.propTypes = {
  zcss: PropTypes.array.isRequire,
  children: PropTypes.array.isRequire,
};

export default Radium(Addons);
