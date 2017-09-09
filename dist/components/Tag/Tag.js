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
    whiteSpace: 'nowrap'
  },
  button: {
    height: 16,
    maxHeight: 16,
    maxWidth: 16,
    minHeight: 16,
    minWidth: 16,
    width: 16,
    marginLeft: '0.25em',
    marginLight: '-0.375em'
  },
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
    _react2.default.createElement('button', { className: 'fa fa-remove', style: [styles.button], onClick: props.onClick })
  );
};

Tag.propTypes = {
  zcss: _propTypes2.default.array
};

exports.default = (0, _radium2.default)(Tag);