import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { colors, atomic } from '../constant';
import Sack from '../Sack/Sack';

const FormGroup = (props) => {
  const zcss = props.zcss || [];
  zcss.push('mgB.5r');

  return (
    <Sack {...props} zcss = {zcss} >
      {props.children}
    </Sack>
  );
};

FormGroup.propTypes = {
  zcss: PropTypes.array,
};

export default Radium(FormGroup);
