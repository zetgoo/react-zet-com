'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constant = require('../constant');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var styles = {
  base: {
    boxSizing: 'border-box',
    order: 'initial'
  }
};

var custom = function custom(props) {
  var col = props.col,
      smallCol = props.smallCol,
      mediumCol = props.mediumCol,
      largeCol = props.largeCol,
      xLargeCol = props.xLargeCol,
      cell = props.cell,
      smallCell = props.smallCell,
      mediumCell = props.mediumCell,
      largeCell = props.largeCell,
      xLargeCell = props.xLargeCell,
      breakpoints = props.breakpoints,
      gutter = props.gutter,
      order = props.order;


  var viewport = {};
  viewport.small = {
    flexBasis: 'calc(' + smallCell / smallCol * 100 + '% - ' + (smallCell !== smallCol ? gutter : '0px') + ')'
  };
  viewport.medium = {
    flexBasis: 'calc(' + mediumCell / mediumCol * 100 + '% - ' + (mediumCell !== mediumCol ? gutter : '0px') + ')'
  };
  viewport.large = {
    flexBasis: 'calc(' + largeCell / largeCol * 100 + '% - ' + (largeCell !== largeCol ? gutter : '0px') + ')'
  };
  viewport.xLarge = {
    flexBasis: 'calc(' + xLargeCell / xLargeCol * 100 + '% - ' + (xLargeCell !== xLargeCol ? gutter : '0px') + ')'
  };
  return viewport;
};

var Column = function Column(props) {
  var zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    zcss = props.zcss.map(function (item) {
      if (styles[item]) {
        return zcss.concat(styles[item]);
      }
      return zcss.concat(_constant.atomic[item]);
    });
  }

  var viewport = custom(props);

  styles.base['@media (min-width: 1200px)'] = viewport.xLarge;
  styles.base['@media (min-width: 768px) and (max-width: 1199px)'] = viewport.large;
  styles.base['@media (min-width: 576px) and (max-width: 767px)'] = viewport.medium;
  styles.base['@media (max-width: 575px)'] = viewport.small;

  return _react2.default.createElement(
    'div',
    _extends({}, props, { style: [styles.base].concat(_toConsumableArray(zcss), [props.style]) }),
    props.children
  );
};

Column.propTypes = {
  zcss: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  style: _propTypes2.default.oneOfType([null, _propTypes2.default.object]).isRequired,
  col: _propTypes2.default.number.isRequired,
  smallCol: _propTypes2.default.number.isRequired,
  mediumCol: _propTypes2.default.number.isRequired,
  largeCol: _propTypes2.default.number.isRequired,
  xLargeCol: _propTypes2.default.number.isRequired,
  cell: _propTypes2.default.number.isRequired,
  smallCell: _propTypes2.default.number.isRequired,
  mediumCell: _propTypes2.default.number.isRequired,
  largeCell: _propTypes2.default.number.isRequired,
  xLargeCell: _propTypes2.default.number.isRequired,
  breakpoints: _propTypes2.default.shape({
    small: _propTypes2.default.string.isRequired,
    medium: _propTypes2.default.string.isRequired,
    large: _propTypes2.default.string.isRequired,
    xLarge: _propTypes2.default.string.isRequired
  }).isRequired,
  gutter: _propTypes2.default.string.isRequired,
  order: _propTypes2.default.number.isRequired,
  children: _propTypes2.default.node.isRequired
};

exports.default = (0, _radium2.default)(Column);