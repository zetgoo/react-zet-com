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

const custom = props => {
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
  viewport.small = {
    flexBasis: `calc(${smallCell / smallCol * 100}% - ${smallCell !== smallCol
      ? gutter
      : '0px'})`,
  };
  viewport.medium = {
    flexBasis: `calc(${mediumCell / mediumCol * 100}% - ${mediumCell !==
    mediumCol
      ? gutter
      : '0px'})`,
  };
  viewport.large = {
    flexBasis: `calc(${largeCell / largeCol * 100}% - ${largeCell !== largeCol
      ? gutter
      : '0px'})`,
  };
  viewport.xLarge = {
    flexBasis: `calc(${xLargeCell / xLargeCol * 100}% - ${xLargeCell !==
    xLargeCol
      ? gutter
      : '0px'})`,
  };
  return viewport;
};

const Column = props => {
  let zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    zcss = props.zcss.map(item => {
      if (styles[item]) {
        return zcss.concat(styles[item]);
      }
      return zcss.concat(atomic[item]);
    });
  }

  const viewport = custom(props);

  styles.base['@media (min-width: 1200px)'] = viewport.xLarge;
  styles.base['@media (min-width: 768px) and (max-width: 1199px)'] =
    viewport.large;
  styles.base['@media (min-width: 576px) and (max-width: 767px)'] =
    viewport.medium;
  styles.base['@media (max-width: 575px)'] = viewport.small;

  return (
    <div {...props} style={[styles.base, ...zcss, props.style]}>
      {props.children}
    </div>
  );
};

Column.propTypes = {
  zcss: PropTypes.arrayOf(PropTypes.string).isRequired,
  style: PropTypes.oneOfType([null, PropTypes.object]).isRequired,
  col: PropTypes.number.isRequired,
  smallCol: PropTypes.number.isRequired,
  mediumCol: PropTypes.number.isRequired,
  largeCol: PropTypes.number.isRequired,
  xLargeCol: PropTypes.number.isRequired,
  cell: PropTypes.number.isRequired,
  smallCell: PropTypes.number.isRequired,
  mediumCell: PropTypes.number.isRequired,
  largeCell: PropTypes.number.isRequired,
  xLargeCell: PropTypes.number.isRequired,
  breakpoints: PropTypes.shape({
    small: PropTypes.string.isRequired,
    medium: PropTypes.string.isRequired,
    large: PropTypes.string.isRequired,
    xLarge: PropTypes.string.isRequired,
  }).isRequired,
  gutter: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default Radium(Column);
