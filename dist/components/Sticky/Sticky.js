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

// http://rawgit.com/captivationsoftware/react-sticky/master/examples/stacked/index.html
var styles = {
  base: {}
};

var Sticky = function Sticky(props) {
  var zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map(function (item, index) {
      zcss.push(styles[item]);
      zcss.push(_constant.atomic[item]);
    });
  }

  return _react2.default.createElement(
    'span',
    null,
    _react2.default.createElement(
      'p',
      {
        style: [] },
      undefined.props.children
    )
  );
};

Sticky.propTypes = {
  zcss: _propTypes2.default.array
};

exports.default = (0, _radium2.default)(Sticky);