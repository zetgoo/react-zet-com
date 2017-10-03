'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import normalize from 'radium-normalize';

var AppContainer = function AppContainer(props) {
  return _react2.default.createElement(
    _radium.StyleRoot,
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_radium.Style, { rules: props.style }),
      props.children
    )
  );
};

exports.default = AppContainer;