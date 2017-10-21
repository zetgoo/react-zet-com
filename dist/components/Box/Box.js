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

var _Sack = require('../Sack/Sack');

var _Sack2 = _interopRequireDefault(_Sack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Box = function Box(props) {
  var zcss = props.zcss || [];
  zcss.push('pd1r');
  zcss.push('bd_s_solid');
  zcss.push('bd_w_1');
  zcss.push('bd_c_default');
  zcss.push('bd_r_5');

  return _react2.default.createElement(
    _Sack2.default,
    _extends({}, props, { zcss: [].concat(_toConsumableArray(props.zcss), _toConsumableArray(zcss)) }),
    props.children
  );
};

Box.propTypes = {
  zcss: _propTypes2.default.array
};

exports.default = (0, _radium2.default)(Box);