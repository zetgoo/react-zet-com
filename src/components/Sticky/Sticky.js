// http://rawgit.com/captivationsoftware/react-sticky/master/examples/stacked/index.html
import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { colors, atomic } from '../constant';

const styles = {
  base: {
  },
};

const Sticky = (props) => {
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

Sticky.propTypes = {
  zcss: PropTypes.array,
};

export default Radium(Sticky);
