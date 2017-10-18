'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constant = require('../../components/constant');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
  var styles = {
    base: {
      backgroundColor: '#fff'
    }
  };

  return _react2.default.createElement(
    'footer',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'welcome to zetgo'
    )
  );
};

Footer.propTypes = {
  zcss: _propTypes2.default.array
};

exports.default = (0, _radium2.default)(Footer);