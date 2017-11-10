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
    appearance: 'none',
    alignItems: 'center',
    padding: '0 .5em',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 3,
    display: 'inline-flex',
    fontSize: '0.875em',
    height: '2.25em',
    justifyContent: 'flex-start',
    lineHeight: 1.5,
    position: 'relative',
    verticalAlign: 'top',
    backgroundColor: _constant.colors.no,
    borderColor: _constant.colors.initBorder,
    color: _constant.colors.default,
    boxShadow: 'inset 0 1px 2px rgba(10, 10, 10, 0.1)',
    maxWidth: '100%',
    width: '100%',
    boxSizing: 'border-box',
    ':hover': {
      borderColor: _constant.colors.success
    },
    ':focus': {
      borderColor: _constant.colors.success,
      outline: 0
    }
  },
  disabled: {
    backgroundColor: 'whitesmoke',
    borderColor: 'whitesmoke',
    boxShadow: 'none',
    color: '#7a7a7a',
    cursor: 'not-allowed'
  },
  readOnly: {
    boxShadow: 'none'
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
  if (props.readOnly) {
    zcss.push(styles.readOnly);
  }
  if (props.zcss && Array.isArray(props.zcss)) {
    zcss = props.zcss.map(function (item) {
      if (styles[item]) {
        return zcss.concat(styles[item]);
      }
      return zcss.concat(_constant.atomic[item]);
    });
  }
  return _react2.default.createElement('input', _extends({}, props, { style: [styles.base].concat(_toConsumableArray(zcss), [props.style]) }));
};

Input.propTypes = {
  zcss: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  style: _propTypes2.default.oneOfType([null, _propTypes2.default.object]).isRequired,
  readOnly: _propTypes2.default.bool.isRequired
};

exports.default = (0, _radium2.default)(Input);