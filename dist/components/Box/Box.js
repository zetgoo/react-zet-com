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

var _Sack = require('../Sack/Sack');

var _Sack2 = _interopRequireDefault(_Sack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Box = function Box(props) {
  var zcss = props.zcss || [];
  zcss.push('pd1r');
  zcss.push('bd_s_solid');
  zcss.push('bd_w_1');
  zcss.push('bd_c_default');
  zcss.push('bd_r_5');

  return _react2.default.createElement(
    _Sack2.default,
    _extends({}, props, { zcss: zcss }),
    props.children
  );
};

Box.propTypes = {
  zcss: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired
};

exports.default = (0, _radium2.default)(Box);