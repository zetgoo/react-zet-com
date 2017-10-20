import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { colors, atomic } from '../constant';
import Link from '../Link/Link';

const styles = {
  base: {
    textRendering: 'optimizeLegibility',
    color: '#69707a',
    fontSize: 14,
    margin: 0,
    padding: 0,
    border: 0,
    boxSizing: 'border-box',
    fontWeight: 'normal',
    verticalAlign: 'baseline',
    display: 'block',
    position: 'relative',
    height: 36,
    width: 36,
    '@media (max-width: 575px)': {
      height: 32,
      width: 32,
    },
  },
  logo: {
    display: 'block',
    backgroundSize: '48px 48px',
    height: '100%',
    width: '100%',
    boxShadow: 'none',
    backgroundRepeat: 'no-repeat',
    '@media (max-width: 575px)': {
      backgroundSize: '48px 48px',
    },
  },
};

const Logo = (props) => {
  const zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map((item, index) => {
      zcss.push(styles[item]);
      zcss.push(atomic[item]);
    });
  }

  return (
    <Link to = '/'>
      <figure {...props} style={[
          styles.base,
          ...zcss,
        ]}
        >
        <img src = 'http://zetgoo.com/images/glogo.png' style={[styles.logo]}/>
      </figure>
    </Link>
  );
};

Logo.propTypes = {
  zcss: PropTypes.array,
};

export default Radium(Logo);
