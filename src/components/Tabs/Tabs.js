import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import TabGroup from './TabGroup';
import Tab from './Tab';
import { colors, atomic } from '../constant';

const styles = {
  base: {},
  isBox: {},
  list: {},
  slider: {
    position: 'absolute',
    bottom: 0,
  },
};

const Tabs = props => {
  const zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map(item => {
      zcss.push(styles[item]);
      zcss.push(atomic[item]);
    });
  }
  let content = null;
  const buildHtml = () =>
    React.Children.map(props.children, (child, index) => {
      if (child.type.displayName === 'Tab') {
        if (props.index === index) {
          content = React.cloneElement(<section />, {
            children: child.props.children,
          });
          return React.cloneElement(child, {
            ...child.props,
            isActived: true,
            onClick: () => props.onChange(index),
          });
        }
      }
      return React.cloneElement(child, {
        ...child.props,
        onClick: () => props.onChange(index),
      });
    });

  const htmlElement = buildHtml();

  return (
    <div style={[styles.base, ...zcss]}>
      <div
        style={{
          position: 'relative',
          display: 'inline-flex',
          width: '100%',
        }}
      >
        {htmlElement}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            height: 2,
            backgroundColor: '#6bb551',
            left: `${100 / props.children.length * props.index}%`,
            transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
            transitionDuration: '.35s',
            transitionProperty: 'left,width',
            width: `${100 / props.children.length}%`,
          }}
        />
      </div>
      {content}
    </div>
  );
};

Tabs.propTypes = {
  zcss: PropTypes.array,
};

export default Radium(Tabs);
