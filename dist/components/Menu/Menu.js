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
    appearance: 'none',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 3,
    boxShadow: 'none',
    display: 'inline-flex',
    fontSize: '1rem',
    height: '2.25em',
    justifyContent: 'flex-start',
    lineHeight: 1.5,
    position: 'relative',
    verticalAlign: 'top',
    touchCallout: 'none',
    userSelect: 'none',
    backgroundColor: 'white',
    borderColor: '#dbdbdb',
    color: _constant.colors.no,
    cursor: 'pointer'
  }, _defineProperty(_base, 'justifyContent', 'center'), _defineProperty(_base, 'paddingLeft', '0.75em'), _defineProperty(_base, 'paddingRight', '0.75em'), _defineProperty(_base, 'textAlign', 'center'), _defineProperty(_base, 'whiteSpace', 'nowrap'), _base),
  primary: {
    backgroundColor: _constant.colors.primary,
    borderColor: 'transparent',
    color: '#fff',
    ':hover': {
      backgroundColor: '#00c4a7',
      borderColor: 'transparent',
      color: '#fff'
    },
    ':active': {
      backgroundColor: '#00b89c',
      borderColor: 'transparent',
      boxShadow: 'inset 0 1px 2px rgba(10, 10, 10, 0.2)',
      color: '#fff'
    }
  },
  success: {
    backgroundColor: _constant.colors.success
  },
  disable: {
    backgroundColor: _constant.colors.disable
  },
  info: {
    backgroundColor: _constant.colors.info
  },
  warning: {
    backgroundColor: _constant.colors.warning
  },
  danger: {
    background: _constant.colors.danger
  },
  isLoading: {
    color: 'transparent',
    pointerEvents: 'none',
    ':after': {
      animation: 'spinAround 500ms infinite linear',
      border: '2px solid #dbdbdb',
      borderRadius: '290486px',
      borderRightColor: 'transparent',
      borderTopColor: 'transparent',
      content: 'hjghjg',
      display: 'block',
      height: '1em',
      width: '1em',
      left: 2,
      top: 2,
      position: 'absolute'
    }
  }
};

var Menu = function Menu(props) {
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

Menu.propTypes = {
  zcss: _propTypes2.default.array
};

exports.default = (0, _radium2.default)(Menu);