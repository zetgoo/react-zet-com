import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { colors, atomic } from '../constant';
import Sack from '../Sack/Sack';

const Container = (props) => {
  const zcss = props.zcss || [];
  zcss.push('container');

  return (
    <Sack {...props} zcss = {zcss}>
      {props.children}
    </Sack>
  );
};

Container.propTypes = {
  zcss: PropTypes.array,
};

export default Radium(Container);
