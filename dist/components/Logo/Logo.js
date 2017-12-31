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

var _constant = require('../constant');

var _Link = require('../Link/Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  base: {
    textRendering: 'optimizeLegibility',
    color: '#69707a',
    fontSize: 14,
    margin: 0,
    padding: 0,
    border: 0,
    boxSizing: 'border-box',
    fontWeight: 'normal',
    verticalAlign: 'baseline',
    display: 'block',
    position: 'relative',
    height: 36,
    width: 36,
    '@media (max-width: 575px)': {
      height: 32,
      width: 32
    }
  },
  logo: {
    display: 'block',
    backgroundSize: '48px 48px',
    height: '100%',
    width: '100%',
    boxShadow: 'none',
    backgroundRepeat: 'no-repeat',
    '@media (max-width: 575px)': {
      backgroundSize: '48px 48px'
    }
  }
};

var Logo = function Logo(props) {
  var zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map(function (item, index) {
      zcss.push(styles[item]);
      zcss.push(_constant.atomic[item]);
    });
  }

  return _react2.default.createElement(
    _Link2.default,
    { to: '/' },
    _react2.default.createElement(
      'figure',
      _extends({}, props, { style: [styles.base].concat(zcss) }),
      _react2.default.createElement('img', { src: props.image, style: [styles.logo] })
    )
  );
};

Logo.propTypes = {
  zcss: _propTypes2.default.array
};

exports.default = (0, _radium2.default)(Logo);