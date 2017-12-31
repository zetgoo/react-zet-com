import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { atomic } from '../constant';

const styles = {
  base: {},
  cover: {
    position: 'relative',
    display: 'inline-flex',
    width: '100%',
  },
  line: {
    position: 'absolute',
    bottom: 0,
    height: 2,
    backgroundColor: '#6bb551',
    transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
    transitionDuration: '.35s',
    transitionProperty: 'left,width'
  },
  isBox: {},
  list: {},
  slider: {
    position: 'absolute',
    bottom: 0,
  },
};

const Tabs = props => {
  let zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    zcss = props.zcss.map(item => {
      if (styles[item]) {
        return zcss.concat(styles[item]);
      }
      return zcss.concat(atomic[item]);
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
    <div style={[styles.base, ...zcss, props.style]}>
      <div
        style={styles.cover}
      >
        {htmlElement}
        <div
          style={{...styles.line,
            width: `${100 / props.children.length}%`,
            left: `${100 / props.children.length * props.index}%`,}}
        />
      </div>
      {content}
    </div>
  );
};

Tabs.propTypes = {
  zcss: PropTypes.arrayOf(PropTypes.string).isRequired,
  style: PropTypes.oneOfType([null, PropTypes.object]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  index: PropTypes.number.isRequired,
};

export default Radium(Tabs);
