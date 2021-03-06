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
    zcss = props.zcss.map(function (item) {
      if (styles[item]) {
        return zcss.concat(styles[item]);
      }
      return zcss.concat(_constant.atomic[item]);
    });
  }

  if (props.isMasonry) {}

  return _react2.default.createElement(
    'div',
    _extends({}, props, { style: [styles.base].concat(_toConsumableArray(zcss), [props.style]) }),
    _react2.default.Children.map(props.children, function (child) {
      return _react2.default.cloneElement(child, _extends({}, props, {
        children: child.props.children,
        zcss: child.props.zcss
      }));
    })
  );
};

Columns.propTypes = {
  zcss: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  style: _propTypes2.default.oneOfType([null, _propTypes2.default.object]).isRequired,
  col: _propTypes2.default.number,
  smallCol: _propTypes2.default.number.isRequired,
  mediumCol: _propTypes2.default.number.isRequired,
  largeCol: _propTypes2.default.number.isRequired,
  xLargeCol: _propTypes2.default.number.isRequired,
  breakpoints: _propTypes2.default.shape({
    small: _propTypes2.default.string,
    medium: _propTypes2.default.string,
    large: _propTypes2.default.string,
    xlarge: _propTypes2.default.string
  }),
  gutter: _propTypes2.default.string,
  children: _propTypes2.default.node.isRequired
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