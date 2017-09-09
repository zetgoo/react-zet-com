'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constant = require('../constant');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  base: (_base = {
    textRendering: 'optimizeLegibility',
    color: '#69707a',
    border: '1px solid #ddd',
    boxSizing: 'border-box',
    fontWeight: 'normal',
    verticalAlign: 'baseline',
    display: 'flex',
    alignItems: 'stretch',
    backgroundColor: '#fff'
  }, _defineProperty(_base, 'display', 'flex'), _defineProperty(_base, 'minHeight', 50), _defineProperty(_base, 'position', 'relative'), _defineProperty(_base, 'textAlign', 'center'), _defineProperty(_base, 'zIndex', 2), _defineProperty(_base, '@media (max-width: 575px)', {}), _base)
};

var Nav = function Nav(props) {
  var zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map(function (item, index) {
      zcss.push(styles[item]);
      zcss.push(_constant.atomic[item]);
    });
  }

  return _react2.default.createElement(
    'nav',
    { style: [styles.base], role: 'navigation' },
    props.children
  );
};

Nav.propTypes = {
  zcss: _propTypes2.default.array
};

exports.default = (0, _radium2.default)(Nav);