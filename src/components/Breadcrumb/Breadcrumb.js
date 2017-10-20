import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { colors, atomic } from '../constant';

const styles = {
  base: {
  },
};

const Breadcrumb = (props) => {
  const zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map((item, index) => {
      zcss.push(styles[item]);
      zcss.push(atomic[item]);
    });
  }

  return (
    <button {...props} style={[
        styles.base,
        ...zcss,
      ]}
      >{props.children}</button>
  );
};

Breadcrumb.propTypes = {
  zcss: PropTypes.array,
};

export default Radium(Breadcrumb);
