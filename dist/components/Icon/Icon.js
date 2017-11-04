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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var styles = {
  base: {
    fontSize: '0.875em'
  },
  icon: {},
  text: {
    marginLeft: 5
  }
};

var Icon = function Icon(props) {
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
    'span',
    { style: [styles.base].concat(_toConsumableArray(zcss), [props.style]), onClick: props.onClick },
    _react2.default.createElement('i', { className: props.icon, style: styles.icon }),
    props.text && props.text.length !== 0 && _react2.default.createElement(
      'span',
      { style: styles.text },
      props.text
    )
  );
};

Icon.propTypes = {
  zcss: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  style: _propTypes2.default.shape().isRequired,
  icon: _propTypes2.default.string.isRequired,
  text: _propTypes2.default.string.isRequired,
  onClick: _propTypes2.default.func.isRequired
};

exports.default = (0, _radium2.default)(Icon);