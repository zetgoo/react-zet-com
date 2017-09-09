'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radiumNormalize = require('radium-normalize');

var _radiumNormalize2 = _interopRequireDefault(_radiumNormalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppContainer = function AppContainer(props) {
  return _react2.default.createElement(
    _radium.StyleRoot,
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_radium.Style, { rules: _radiumNormalize2.default }),
      props.children
    )
  );
};

exports.default = AppContainer;