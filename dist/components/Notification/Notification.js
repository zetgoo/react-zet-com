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
    backgroundColor: _constant.colors.danger,
    color: _constant.colors.no,
    lineHeight: '1.428571428571429em',
    margin: 0,
    border: 0,
    boxSizing: 'border-box',
    fontWeight: 'normal',
    verticalAlign: 'baseline',
    borderRadius: 3,
    padding: '16px 20px',
    position: 'relative'
  },
  buttonClose: {
    backgroundColor: 'red',
    border: 'none',
    cursor: 'pointer',
    display: 'inline-block',
    height: 24,
    position: 'relative',
    verticalAlign: 'top',
    width: 24,
    userSelect: 'none',
    borderRadius: '0 3px',
    float: 'right',
    margin: '-16px -20px 0 20px',
    alignItems: 'flex-start',
    textAlign: 'center',
    textRendering: 'auto',
    letterSpacing: 'normal',
    wordSpacing: 'normal',
    textTransform: 'none',
    textIndent: 0,
    textShadow: 'none'
  }
};

var Notification = function Notification(props) {
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
    'div',
    { style: [styles.base].concat(_toConsumableArray(zcss)) },
    props.enableCloseButton ? _react2.default.createElement(
      'button',
      _extends({
        style: [styles.buttonClose].concat(_toConsumableArray(zcss))
      }, props.closeButtonProps),
      _react2.default.createElement('i', { className: 'fa fa-remove' })
    ) : null,
    props.children
  );
};

Notification.propTypes = {
  zcss: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired,
  enableCloseButton: _propTypes2.default.bool.isRequired,
  closeButtonProps: _propTypes2.default.func.isRequired
};

exports.default = (0, _radium2.default)(Notification);