import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { colors, atomic } from '../constant';

const styles = {
  base: {
    position: 'fixed',
    right: '2.4rem',
    bottom: 0,
    left: '2.4rem',
    zIndex: 200,
    display: 'flex',
    alignItems: 'center',
    padding: '1.4rem 2.4rem',
    margin: '0 auto',
    marginTop: '1.4rem',
    color: '#fff',
    backgroundColor: '#212121',
    borderRadius: '.2rem',
    transition: 'all .35s cubic-bezier(.4,0,.2,1) .35s',
  },
};

const SnackBar = (props) => {
  const zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map((item, index) => {
      zcss.push(styles[item]);
      zcss.push(atomic[item]);
    });
  }

  if (!props.isShow) return null;

  return (
    <div
      style={[
          styles.base,
          ...zcss,
        ]}>
      {props.children}
    </div>
  );
};

SnackBar.propTypes = {
  zcss: PropTypes.array,
};

export default Radium(SnackBar);
