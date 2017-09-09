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

var styles = {
  base: {
    boxSizing: 'border-box',
    order: 'initial'
  }
};

var custom = function custom(props) {
  var _screen = screen,
      width = _screen.width;
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
  viewport.small = { flexBasis: 'calc(' + smallCell / smallCol * 100 + '% - ' + gutter + ')' };
  viewport.medium = { flexBasis: 'calc(' + mediumCell / mediumCol * 100 + '% - ' + gutter + ')' };
  viewport.large = { flexBasis: 'calc(' + largeCell / largeCol * 100 + '% - ' + gutter + ')' };
  viewport.xLarge = { flexBasis: 'calc(' + xLargeCell / xLargeCol * 100 + '% - ' + gutter + ')' };
  return viewport;
};

var Column = function Column(props) {
  var zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map(function (item, index) {
      zcss.push(styles[item]);
      zcss.push(_constant.atomic[item]);
    });
  }

  var viewport = custom(props);

  styles.base['@media (min-width: 1200px)'] = viewport.xLarge;
  styles.base['@media (min-width: 768px) and (max-width: 991px)'] = viewport.large;
  styles.base['@media (min-width: 576px) and (max-width: 767px)'] = viewport.medium;
  styles.base['@media (max-width: 575px)'] = viewport.small;

  return _react2.default.createElement(
    'div',
    _extends({}, props, { style: [styles.base].concat(zcss) }),
    props.children
  );
};

Column.propTypes = {
  col: _propTypes2.default.number,
  smallCol: _propTypes2.default.number,
  mediumCol: _propTypes2.default.number,
  largeCol: _propTypes2.default.number,
  xLargeCol: _propTypes2.default.number,
  cell: _propTypes2.default.number,
  smallCell: _propTypes2.default.number,
  mediumCell: _propTypes2.default.number,
  largeCell: _propTypes2.default.number,
  xLargeCell: _propTypes2.default.number,
  breakpoints: _propTypes2.default.shape({
    small: _propTypes2.default.string,
    medium: _propTypes2.default.string,
    large: _propTypes2.default.string,
    xLarge: _propTypes2.default.string
  }),
  gutter: _propTypes2.default.string,
  order: _propTypes2.default.number,
  children: _propTypes2.default.node
};

exports.default = (0, _radium2.default)(Column);