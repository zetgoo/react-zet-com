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
    color: '#69707a',
    fontSize: '.875em',
    cursor: 'pointer',
    display: 'inline-block',
    lineHeight: '1em',
    position: 'relative',
    verticalAlign: 'top',
    margin: 0,
    padding: 0
  },
  control: {
    verticalAlign: 'middle',
    margin: 0
  },
  label: {
    margin: '0 .5em'
  }
};

var Checkbox = function Checkbox(props) {
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
    'label',
    { style: styles.base },
    _react2.default.createElement('input', _extends({ type: 'checkbox' }, props, { style: [styles.control].concat(_toConsumableArray(zcss)) })),
    _react2.default.createElement(
      'span',
      { style: styles.label },
      props.label
    )
  );
};

Checkbox.propTypes = {
  zcss: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired,
  label: _propTypes2.default.string.isRequired
};

exports.default = (0, _radium2.default)(Checkbox);