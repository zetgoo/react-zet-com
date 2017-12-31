import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { atomic } from '../constant';

const styles = {
  base: {
    margin: 0,
    padding: 0,
    fontWeight: 300,
    wordBreak: 'break-word',
    textRendering: 'optimizeLegibility',
    color: '#222324',
    fontSize: 28,
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

const Title = props => {
  let zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    zcss = props.zcss.map(item => {
      if (styles[item]) {
        return zcss.concat(styles[item]);
      }
      return zcss.concat(atomic[item]);
    });
  }

  return <p style={[styles.base, ...zcss, props.style]}>{props.children}</p>;
};

Title.propTypes = {
  zcss: PropTypes.arrayOf(PropTypes.string).isRequired,
  style: PropTypes.oneOfType([null, PropTypes.object]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Radium(Title);
