import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { colors, atomic } from '../constant';

const styles = {
  base: {
    textRendering: 'optimizeLegibility',
    color: '#66757f',
    padding: 0,
    border: 0,
    boxSizing: 'border-box',
    fontWeight: 'normal',
    verticalAlign: 'baseline',
    display: 'flex',
    alignItems: 'stretch',
    backgroundColor: '#fff',
    minHeight: 50,
    position: 'relative',
    textAlign: 'center',
    zIndex: 2,

    '@media (max-width: 575px)': {
    },
  },
};

const Nav = (props) => {
  const zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map((item, index) => {
      zcss.push(styles[item]);
      zcss.push(atomic[item]);
    });
  }

  return (
    <nav style = {[styles.base]} role='navigation'>
      {props.children}
    </nav>
  );
};

Nav.propTypes = {
  zcss: PropTypes.array,
};

export default Radium(Nav);
