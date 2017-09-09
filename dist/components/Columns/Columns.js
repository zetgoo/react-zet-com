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
    padding: 0,
    border: 0,
    fontSize: '100%',
    fontWeight: 'normal',
    verticalAlign: 'baseline',
    backgroundColor: 'transparent',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between'
  }
};

var Columns = function Columns(props) {
  var zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map(function (item, index) {
      zcss.push(styles[item]);
      zcss.push(_constant.atomic[item]);
    });
  }

  return _react2.default.createElement(
    'div',
    _extends({}, props, { style: [styles.base].concat(zcss) }),
    _react2.default.Children.map(props.children, function (child) {
      return _react2.default.cloneElement(child, _extends({}, props, { children: child.props.children }));
    })
  );
};

Columns.propTypes = {
  col: _propTypes2.default.number,
  smallCol: _propTypes2.default.number,
  mediumCol: _propTypes2.default.number,
  largeCol: _propTypes2.default.number,
  xLargeCol: _propTypes2.default.number,
  breakpoints: _propTypes2.default.shape({
    small: _propTypes2.default.string,
    medium: _propTypes2.default.string,
    large: _propTypes2.default.string,
    xlarge: _propTypes2.default.string
  }),

  gutter: _propTypes2.default.string,

  children: _propTypes2.default.node
};

Columns.defaultProps = {
  col: 3,
  breakpoints: {
    small: _constant.smallBreakpoint,
    medium: _constant.mediumBreakpoint,
    large: _constant.largeBreakpoint,
    xLarge: _constant.xLargeBreakpoint
  },
  gutter: '16px'
};

exports.default = (0, _radium2.default)(Columns);