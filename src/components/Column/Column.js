import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import {
  colors,
  atomic,
  smallBreakpoint,
  mediumBreakpoint,
  largeBreakpoint,
  xLargeBreakpoint,
} from '../constant';

const styles = {
  base: {
    boxSizing: 'border-box',
    order: 'initial',
  },
};

const custom = (props) => {
  const {
    col,
    smallCol,
    mediumCol,
    largeCol,
    xLargeCol,
    cell,
    smallCell,
    mediumCell,
    largeCell,
    xLargeCell,
    breakpoints,
    gutter,
    order,
  } = props;

  const viewport = {};
  viewport.small = { flexBasis: `calc(${(smallCell / smallCol) * 100}% - ${gutter})` };
  viewport.medium = { flexBasis: `calc(${(mediumCell / mediumCol) * 100}% - ${gutter})` };
  viewport.large = { flexBasis: `calc(${(largeCell / largeCol) * 100}% - ${gutter})` };
  viewport.xLarge = { flexBasis: `calc(${(xLargeCell / xLargeCol) * 100}% - ${gutter})` };
  return viewport;
};

const Column = (props) => {
  const zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map((item, index) => {
      zcss.push(styles[item]);
      zcss.push(atomic[item]);
    });
  }

  const viewport = custom(props);

  styles.base['@media (min-width: 1200px)'] = viewport.xLarge;
  styles.base['@media (min-width: 768px) and (max-width: 991px)'] = viewport.large;
  styles.base['@media (min-width: 576px) and (max-width: 767px)'] = viewport.medium;
  styles.base['@media (max-width: 575px)'] = viewport.small;


  return (
    <div {...props} style={[
        styles.base,
        ...zcss,
      ]}>
      {props.children}
    </div>
  );
};

Column.propTypes = {
  col: PropTypes.number,
  smallCol: PropTypes.number,
  mediumCol: PropTypes.number,
  largeCol: PropTypes.number,
  xLargeCol: PropTypes.number,
  cell: PropTypes.number,
  smallCell: PropTypes.number,
  mediumCell: PropTypes.number,
  largeCell: PropTypes.number,
  xLargeCell: PropTypes.number,
  breakpoints: PropTypes.shape({
    small: PropTypes.string,
    medium: PropTypes.string,
    large: PropTypes.string,
    xLarge: PropTypes.string,
  }),
  gutter: PropTypes.string,
  order: PropTypes.number,
  children: PropTypes.node,
};

export default Radium(Column);
