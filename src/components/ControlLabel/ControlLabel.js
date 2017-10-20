import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { colors, atomic } from '../constant';

const styles = {
  base: {
    color: colors.dark,
    display: 'block',
    fontWeight: 'bold',
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: '100%',
    fontWeight: 'normal',
    verticalAlign: 'baseline',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
};

const ControlLabel = (props) => {
  const zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map((item, index) => {
      zcss.push(styles[item]);
      zcss.push(atomic[item]);
    });
  }

  return (
    <p {...props} style={[
        styles.base,
        ...zcss,
      ]}
      >{props.children}</p>
  );
};

ControlLabel.propTypes = {
  zcss: PropTypes.array,
};

export default Radium(ControlLabel);
