import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { atomic } from '../constant';

const styles = {
  base: {
    color: '#69707a',
    fontSize: '.875em',
    cursor: 'pointer',
    display: 'inline-block',
    lineHeight: '1em',
    position: 'relative',
    verticalAlign: 'top',
    margin: 0,
    padding: 0,
  },
  control: {
    verticalAlign: 'middle',
    margin: 0,
  },
  label: {
    margin: '0 .5em',
  },
};

const Radio = props => {
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
    <label style={styles.base}>
      <input type="radio" {...props} style={[styles.control, ...zcss]} />
      <span style={styles.label}>{props.label}</span>
    </label>
  );
};

Radio.propTypes = {
  zcss: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
};

export default Radium(Radio);
