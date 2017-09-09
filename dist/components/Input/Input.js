'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
    appearance: 'none',
    fontFamily: '"Raleway", sans-serif',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 3,
    boxShadow: 'none',
    display: 'inline-flex',
    fontSize: '1rem',
    height: '2.25em',
    justifyContent: 'flex-start',
    lineHeight: 1.5,
    position: 'relative',
    verticalAlign: 'top',
    backgroundColor: _constant.colors.no,
    borderColor: _constant.colors.initBorder,
    color: _constant.colors.default
  }, _defineProperty(_base, 'boxShadow', 'inset 0 1px 2px rgba(10, 10, 10, 0.1)'), _defineProperty(_base, 'maxWidth', '100%'), _defineProperty(_base, 'width', '100%'), _defineProperty(_base, 'boxSizing', 'border-box'), _defineProperty(_base, ':hover', {
    borderColor: _constant.colors.success
  }), _defineProperty(_base, ':focus', {
    borderColor: _constant.colors.success,
    outline: 0
  }), _base),
  disabled: {
    backgroundColor: '#eee',
    borderColor: _constant.colors.no,
    ':hover': {
      borderColor: _constant.colors.no
    },
    ':focus': {
      borderColor: _constant.colors.no,
      outline: 0
    }
  },
  error: {
    borderColor: _constant.colors.danger,
    ':hover': {
      borderColor: _constant.colors.danger
    },
    ':focus': {
      borderColor: _constant.colors.danger,
      outline: 0
    }
  }
};

var Input = function Input(props) {
  var zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map(function (item, index) {
      zcss.push(styles[item]);
      zcss.push(_constant.atomic[item]);
    });
  }
  return _react2.default.createElement('input', _extends({}, props, { style: [styles.base].concat(zcss) }));
};

Input.propTypes = {
  value: _propTypes2.default.string.isRequired,
  onChange: _propTypes2.default.func.isRequired
};

exports.default = (0, _radium2.default)(Input);