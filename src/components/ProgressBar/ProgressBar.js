import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { colors, atomic } from '../constant';

const styles = {
  base: {
  },
};

const ProgressBar = (props) => {
  const zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map((item, index) => {
      zcss.push(styles[item]);
      zcss.push(atomic[item]);
    });
  }

  return (
    <span>
      <p
        style={[]}>
        {this.props.children}
      </p>
    </span>
  );
};

ProgressBar.propTypes = {
  zcss: PropTypes.array,
};

export default Radium(ProgressBar);
