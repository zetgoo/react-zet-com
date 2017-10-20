import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { colors, atomic } from '../constant';

const styles = {
  base: {
    margin: 0,
    padding: 0,
    fontWeight: 300,
    wordBreak: 'break-word',
    textRendering: 'optimizeLegibility',
    color: '#222324',
    fontSize: 28,
    lineHeight: 1,
  },
  is1: {
    fontSize: '3em',
  },
  is2: {
    fontSize: '2.5em',
  },
  is3: {
    fontSize: '1.75em',
  },
  is4: {
    fontSize: '1.5em',
  },
  is5: {
    fontSize: '1.125em',
  },
  is6: {
    fontSize: '0.875em',
  },
};

const Title = (props) => {
  const zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map((item, index) => {
      zcss.push(styles[item]);
      zcss.push(atomic[item]);
    });
  }

  return (
      <p
        style={[
            styles.base,
            ...zcss,
          ]}>
        {props.children}
      </p>
  );
};

Title.propTypes = {
  zcss: PropTypes.array,
};

export default Radium(Title);
