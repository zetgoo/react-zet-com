import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { colors, atomic } from '../constant';

const styles = {
  base: {

  },
};

const Icon = (props) => {
  const zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map((item, index) => {
      zcss.push(styles[item]);
      zcss.push(atomic[item]);
    });
  }

  return (
    <span>
      <i className={props.icon} style = {[styles.base, ...zcss]}>{props.text}</i>
    </span>
  );
};

Icon.propTypes = {
  zcss: PropTypes.array,
};

export default Radium(Icon);
