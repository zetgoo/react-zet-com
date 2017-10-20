import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { colors, atomic } from '../constant';

const styles = {
  base: {
    listStyle: 'none',
    textRendering: 'optimizeLegibility',
    lineHeight: 1.428571428571429,
    paddingLeft: 10,
    margin: 0,
    border: 0,
    boxSizing: 'border-box',
    fontSize: 14,
    fontWeight: 'normal',
    verticalAlign: 'baseline',
  },
  item: {
    paddingTop: '0.5em',
    // ':hover':{
    //   backgroundColor: 'red'
    // }
  },
  isActived: {

  },
};

const MenuItem = (props) => {
  const zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map((item, index) => {
      zcss.push(styles[item]);
      zcss.push(atomic[item]);
    });
  }

  const buildHtml = () => {
    if (!Array.isArray(props.children)) return props.children;
    if (props.children && Array.isArray(props.children)) {
      const htmlElements = props.children.map((item, index) => {
        if (item.type === 'li') {
          return React.cloneElement(item, [...item.props], item.props.children);
        }
        return <li style = {styles.item}>{item}</li>;
      });
      return htmlElements;
    }
    return null;
  };

  return (
    <ul style={[
        styles.base,
        ...zcss,
      ]}>
      {buildHtml()}
    </ul>
  );
};

MenuItem.propTypes = {
  zcss: PropTypes.array,
};

export default Radium(MenuItem);
