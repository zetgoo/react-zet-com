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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
    verticalAlign: 'top',
    display: 'inline-block',
    position: 'relative'
  },

  image: {
    display: 'block',
    height: '100%',
    width: '100%'
  },

  isCircle: {
    borderRadius: '50%'
  },

  // isAvatar: {
  //   '@media (max-width: 575px)': {
  //     height: 32,
  //     width: 32,
  //   },
  // },
  isBlur: {
    transition: 'opacity 2s linear'
  }
};

var Image = function Image(props) {
  var zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    zcss = props.zcss.map(function (item) {
      if (styles[item]) {
        return zcss.concat(styles[item]);
      }
      return zcss.concat(_constant.atomic[item]);
    });
  }

  return _react2.default.createElement(
    'figure',
    _extends({}, props, {
      style: [styles.base, { maxWidth: props.width, height: props.width / props.ratio }]
    }),
    _react2.default.createElement('img', { style: [styles.image].concat(_toConsumableArray(zcss)), src: props.src, alt: props.alt })
  );
};

Image.propTypes = {
  zcss: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  width: _propTypes2.default.number.isRequired,
  height: _propTypes2.default.number.isRequired,
  ratio: _propTypes2.default.number.isRequired,
  alt: _propTypes2.default.string.isRequired,
  src: _propTypes2.default.string.isRequired
};

exports.default = (0, _radium2.default)(Image);