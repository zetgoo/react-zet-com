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

var _constant = require('../constant');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  base: {}
};

var AppBar = function AppBar(props) {
  var zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map(function (item) {
      return zcss.concat(styles[item], _constant.atomic[item]);
    });
  }

  return _react2.default.createElement(
    'header',
    null,
    _react2.default.createElement('div', null)
  );
};

AppBar.propTypes = {
  zcss: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired
};

exports.default = (0, _radium2.default)(AppBar);