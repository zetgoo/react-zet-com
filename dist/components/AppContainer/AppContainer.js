'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = require('radium');

var _Sack = require('../Sack/Sack');

var _Sack2 = _interopRequireDefault(_Sack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import normalize from 'radium-normalize';

var AppContainer = function AppContainer(props) {
  return _react2.default.createElement(
    _radium.StyleRoot,
    null,
    _react2.default.createElement(_radium.Style, { rules: props.rules }),
    _react2.default.createElement(
      _Sack2.default,
      props,
      props.children
    )
  );
};

AppContainer.propTypes = {
  zcss: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  rules: _propTypes2.default.oneOfType([null, _propTypes2.default.object]).isRequired,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired
};

exports.default = AppContainer;