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

var _Input = require('../Input/Input');

var _Input2 = _interopRequireDefault(_Input);

var _Label = require('../Label/Label');

var _Label2 = _interopRequireDefault(_Label);

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _constant = require('../constant');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  base: {
    display: 'flex',
    alignItems: 'center'
  },
  help: {
    fontSize: '0.875em',
    fontStyle: 'italic',
    display: 'block'

  }
};

var TextField = function TextField(props) {
  var _React$createElement;

  var zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map(function (item, index) {
      zcss.push(styles[item]);
      zcss.push(_constant.atomic[item]);
    });
  }
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Label2.default,
      null,
      props.label
    ),
    _react2.default.createElement(
      'span',
      { style: [styles.help] },
      props.help
    ),
    _react2.default.createElement(
      'div',
      { style: [styles.base] },
      _react2.default.createElement(_Input2.default, (_React$createElement = { disabled: props.disabled,
        zcss: ['' + (props.errors ? 'error' : ''), '' + (props.disabled ? 'disabled' : '')], placeholder: 'zetgoo', value: props.value,
        onChange: props.onChange }, _defineProperty(_React$createElement, 'placeholder', props.placeholder), _defineProperty(_React$createElement, 'type', props.type), _React$createElement)),
      props.errors && _react2.default.createElement(_Icon2.default, { zcss: ['cl_danger', 'mg1/2e'], icon: 'fa fa-exclamation-circle' }),
      props.valid && _react2.default.createElement(_Icon2.default, { zcss: ['cl_success', 'mg1/2e'], icon: 'fa fa-check-circle' })
    ),
    props.errors && props.errors.map(function (item, index) {
      return _react2.default.createElement(
        'span',
        { style: [styles.help] },
        item.text
      );
    })
  );
};

TextField.propTypes = {};

exports.default = (0, _radium2.default)(TextField);