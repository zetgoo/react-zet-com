import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { atomic } from '../constant';

const styles = {
  base: {},
  container: {
    maxWidth: 1012,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
};

const Sack = props => {
  const zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map((item, index) => {
      zcss.push(styles[item]);
      zcss.push(atomic[item]);
    });
  }

  return (
    <div {...props} style={[styles.base, ...zcss, props.style]}>
      {props.children}
    </div>
  );
};

Sack.defaultProps = {
  zcss: [],
  style: {},
  children: [],
};

Sack.propTypes = {
  zcss: PropTypes.array.isRequire,
  style: PropTypes.object.isRequire,
  children: PropTypes.array.isRequire,
};

export default Radium(Sack);
