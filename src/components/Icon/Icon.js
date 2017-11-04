import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { atomic } from '../constant';

const styles = {
  base: {
    fontSize: '0.875em',
  },
  icon: {},
  text: {
    marginLeft: 5,
  },
};

const Icon = props => {
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
    <span style={[styles.base, ...zcss, props.style]} onClick={props.onClick}>
      <i className={props.icon} style={styles.icon} />
      {props.text &&
        props.text.length !== 0 && (
          <span style={styles.text}>{props.text}</span>
        )}
    </span>
  );
};

Icon.propTypes = {
  zcss: PropTypes.arrayOf(PropTypes.string).isRequired,
  style: PropTypes.shape().isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Radium(Icon);
