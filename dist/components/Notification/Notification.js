'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _base, _buttonClose;

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
    backgroundColor: _constant.colors.danger,
    color: _constant.colors.no,
    lineHeight: '1.428571428571429em',
    margin: 0,
    padding: 0,
    border: 0,
    boxSizing: 'border-box',
    fontWeight: 'normal',
    verticalAlign: 'baseline'
  }, _defineProperty(_base, 'backgroundColor', '#f5f7fa'), _defineProperty(_base, 'borderRadius', 3), _defineProperty(_base, 'padding', '16px 20px'), _defineProperty(_base, 'position', 'relative'), _base),
  buttonClose: (_buttonClose = {
    backgroundColor: 'red',
    border: 'none',
    borderRadius: '290486px',
    cursor: 'pointer',
    display: 'inline-block',
    height: 24,
    position: 'relative',
    verticalAlign: 'top',
    width: 24,
    userSelect: 'none'
  }, _defineProperty(_buttonClose, 'borderRadius', '0 3px'), _defineProperty(_buttonClose, 'float', 'right'), _defineProperty(_buttonClose, 'margin', '-16px -20px 0 20px'), _defineProperty(_buttonClose, 'alignItems', 'flex-start'), _defineProperty(_buttonClose, 'textAlign', 'center'), _defineProperty(_buttonClose, 'textRendering', 'auto'), _defineProperty(_buttonClose, 'letterSpacing', 'normal'), _defineProperty(_buttonClose, 'wordSpacing', 'normal'), _defineProperty(_buttonClose, 'textTransform', 'none'), _defineProperty(_buttonClose, 'textIndent', 0), _defineProperty(_buttonClose, 'textShadow', 'none'), _buttonClose)
};

var Notification = function Notification(props) {
  var zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map(function (item, index) {
      zcss.push(styles[item]);
      zcss.push(_constant.atomic[item]);
    });
  }

  return _react2.default.createElement(
    'div',
    { style: [styles.base].concat(zcss) },
    props.enableCloseButton ? _react2.default.createElement(
      'button',
      _extends({ style: [styles.buttonClose].concat(zcss)
      }, props.closeButtonProps),
      _react2.default.createElement('i', { className: 'fa fa-remove' })
    ) : null,
    props.children
  );
};

Notification.propTypes = {
  zcss: _propTypes2.default.array
};

exports.default = (0, _radium2.default)(Notification);