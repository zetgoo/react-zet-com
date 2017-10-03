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
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    borderRadius: 3,
    color: '#4a4a4a',
    display: 'inline-flex',
    fontSize: '0.75rem',
    height: '2em',
    justifyContent: 'center',
    lineHeight: 1.5,
    paddingLeft: '0.75em',
    paddingRight: '0.75em',
    whiteSpace: 'nowrap',
    verticalAlign: 'top'
  },
  button: {
    padding: '0.25em',
    marginLeft: '0.5em',
    justifyContent: 'center',
    display: 'inline-flex',
    backgroundColor: 'rgba(17, 17, 17, 0.2)',
    border: 0,
    borderRadius: '30%'
  },
  isSmall: {
    fontSize: 11,
    height: 20,
    paddingLeft: 8,
    paddingRight: 8
  },
  isMedium: {
    fontSize: 14,
    height: 32,
    paddingLeft: 14,
    paddingRight: 14
  },
  isLarge: {
    fontSize: 18,
    height: 40,
    lineHeight: 24,
    paddingLeft: 18,
    paddingRight: 18
  },

  primary: {
    backgroundColor: _constant.colors.primary
  },

  success: {
    backgroundColor: _constant.colors.success
  },
  disable: {
    backgroundColor: _constant.colors.disable,
    pointerEvents: 'none',
    cursor: 'default'
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
  cancel: {
    background: _constant.colors.cancel
  },
  white: {
    backgroundColor: _constant.colors.no,
    borderColor: 'transparent',
    color: '#111'
  },
  light: {
    backgroundColor: '#f5f7fa',
    borderColor: 'transparent',
    color: '#69707a'
  },
  black: {
    backgroundColor: '#111',
    borderColor: 'transparent',
    color: '#fff'
  }
};

var Tag = function Tag(props) {
  var zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map(function (item, index) {
      zcss.push(styles[item]);
      zcss.push(_constant.atomic[item]);
    });
  }

  return _react2.default.createElement(
    'span',
    { style: [styles.base].concat(zcss) },
    props.text,
    _react2.default.createElement('button', { className: props.icon, style: [styles.button], onClick: props.onClick })
  );
};

Tag.propTypes = {
  zcss: _propTypes2.default.array
};

exports.default = (0, _radium2.default)(Tag);