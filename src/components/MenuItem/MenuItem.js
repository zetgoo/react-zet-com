import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { atomic } from '../constant';

const styles = {
  base: {
    listStyle: 'none',
    textRendering: 'optimizeLegibility',
    paddingLeft: '1.25rem',
    margin: 0,
    border: 0,
    boxSizing: 'border-box',
    verticalAlign: 'baseline',
  },
  item: {
    // paddingTop: '0.5em',
    // ':hover':{
    //   backgroundColor: 'red'
    // }
  },
  isActived: {},
};

const MenuItem = props => {
  let zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    zcss = props.zcss.map(item => {
      if (styles[item]) {
        return zcss.concat(styles[item]);
      }
      return zcss.concat(atomic[item]);
    });
  }

  const buildHtml = () => {
    if (!Array.isArray(props.children)) return props.children;
    if (props.children && Array.isArray(props.children)) {
      const htmlElements = props.children.map(item => {
        if (item.type === 'li') {
          return React.cloneElement(item, [...item.props], item.props.children);
        }
        return <li style={styles.item}>{item}</li>;
      });
      return htmlElements;
    }
    return null;
  };

  return <ul style={[styles.base, ...zcss, props.style]}>{buildHtml()}</ul>;
};

MenuItem.propTypes = {
  zcss: PropTypes.arrayOf(PropTypes.string).isRequired,
  style: PropTypes.shape().isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Radium(MenuItem);
