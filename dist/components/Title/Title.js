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
    fontWeight: 300,
    wordBreak: 'break-word',
    textRendering: 'optimizeLegibility',
    color: '#222324',
    fontSize: 28
  },
  is1: {
    fontSize: '3em'
  },
  is2: {
    fontSize: '2.5em'
  },
  is3: {
    fontSize: '1.75em'
  },
  is4: {
    fontSize: '1.5em'
  },
  is5: {
    fontSize: '1.125em'
  },
  is6: {
    fontSize: '0.875em'
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
    { style: [styles.base].concat(zcss) },
    props.children
  );
};

Title.propTypes = {
  zcss: _propTypes2.default.array
};

exports.default = (0, _radium2.default)(Title);