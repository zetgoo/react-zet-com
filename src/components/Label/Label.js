import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { colors, atomic } from '../constant';

const styles = {
  base: {
    color: '#222324',
    fontWeight: 'bold',
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: '100%',
    verticalAlign: 'baseline',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
};

const Label = (props) => {
  const zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map((item, index) => {
      zcss.push(styles[item]);
      zcss.push(atomic[item]);
    });
  }

  return (
    <label {...props} style={[
      styles.base,
      ...zcss,
    ]}>
      {props.children}
    </label>
  );
};

Label.propTypes = {
  zcss: PropTypes.array,
};

export default Radium(Label);
