import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import {
  atomic,
  smallBreakpoint,
  mediumBreakpoint,
  largeBreakpoint,
  xLargeBreakpoint,
} from '../constant';

const styles = {
  base: {
    boxSizing: 'border-box',
    padding: 0,
    border: 0,
    fontSize: '100%',
    fontWeight: 'normal',
    verticalAlign: 'baseline',
    backgroundColor: 'transparent',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
  },
};

const Columns = props => {
  let zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    zcss = props.zcss.map(item => {
      if (styles[item]) {
        return zcss.concat(styles[item]);
      }
      return zcss.concat(atomic[item]);
    });
  }

  if (props.isMasonry) {
  }

  return (
    <div {...props} style={[styles.base, ...zcss, props.style]}>
      {React.Children.map(props.children, child =>
        React.cloneElement(child, {
          ...props,
          children: child.props.children,
          zcss: child.props.zcss,
        }),
      )}
    </div>
  );
};

Columns.propTypes = {
  zcss: PropTypes.arrayOf(PropTypes.string).isRequired,
  style: PropTypes.oneOfType([null, PropTypes.object]).isRequired,
  col: PropTypes.number,
  smallCol: PropTypes.number.isRequired,
  mediumCol: PropTypes.number.isRequired,
  largeCol: PropTypes.number.isRequired,
  xLargeCol: PropTypes.number.isRequired,
  breakpoints: PropTypes.shape({
    small: PropTypes.string,
    medium: PropTypes.string,
    large: PropTypes.string,
    xlarge: PropTypes.string,
  }),
  gutter: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Columns.defaultProps = {
  col: 3,
  breakpoints: {
    small: smallBreakpoint,
    medium: mediumBreakpoint,
    large: largeBreakpoint,
    xLarge: xLargeBreakpoint,
  },
  gutter: '16px',
};

export default Radium(Columns);
