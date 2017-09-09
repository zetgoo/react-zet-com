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
  base: {
    margin: 0,
    padding: 0,
    fontweight: 300,
    wordBreak: 'break-word',
    textRendering: 'optimizeLegibility',
    color: '#222324',
    fontSize: 28,
    lineHeight: 1
  },
  is1: {
    fontSize: 18
  },
  is2: {
    fontSize: 20
  }
};

var Title = function Title(props) {
  var zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map(function (item, index) {
      zcss.push(styles[item]);
      zcss.push(_constant.atomic[item]);
    });
  }

  return _react2.default.createElement(
    'p',
    {
      style: [styles.base].concat(zcss) },
    props.children
  );
};

Title.propTypes = {
  zcss: _propTypes2.default.array
};

exports.default = (0, _radium2.default)(Title);