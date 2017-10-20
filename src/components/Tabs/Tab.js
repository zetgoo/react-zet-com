import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { colors, atomic } from '../constant';

const styles = {
  base: {
    padding: '1.7rem 1.2rem',
    fontSize: '.75em',
    fontWeight: 500,
    lineHeight: 1,
    color: 'rgba(0,0,0,.7)',
    textTransform: 'uppercase',
    transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
    transitionDuration: '.35s',
    transitionProperty: 'box-shadow,color',
    flex: 1,
    textAlign: 'center',
    cursor: 'pointer',
  },
  isActived: {
    color: '#000',
  },
  disabled: {
    opacity: '.2',
    cursor: 'default',
  },
};

const Tab = (props) => {
  const zcss = [];

  if (props.zcss && Array.isArray(props.zcss)) {
    if (props.isActived) {
      props.zcss.push('isActived');
    }
    if (props.disabled) {
      props.zcss.push('disabled');
    }
    props.zcss.map((item, index) => {
      zcss.push(styles[item]);
      zcss.push(atomic[item]);
    });
  }

  const onActive = (e) => {
    props.onActive();
  };

  return (
    <label {...props} style={[
        styles.base,
        ...zcss,
      ]}>{props.label}</label>
  );
};

Tab.propTypes = {
  zcss: PropTypes.array,
};

export default Radium(Tab);
