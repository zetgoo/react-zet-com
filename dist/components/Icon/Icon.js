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
    props.zcss.map(function (item, index) {
      zcss.push(styles[item]);
      zcss.push(_constant.atomic[item]);
    });
  }

  return _react2.default.createElement(
    'span',
    { style: [styles.base].concat(zcss) },
    _react2.default.createElement('i', { className: props.icon, style: [styles.icon].concat(zcss) }),
    props.text && props.text.length !== 0 && _react2.default.createElement(
      'span',
      { style: styles.text },
      props.text
    )
  );
};

Icon.propTypes = {
  zcss: _propTypes2.default.array
};

exports.default = (0, _radium2.default)(Icon);