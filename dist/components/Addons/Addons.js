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

var styles = {
  base: {
    boxSizing: 'inherit',
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: '100%',
    fontWeight: 'normal',
    verticalAlign: 'baseline',
    position: 'relative',
    textAlign: 'left',
    display: 'flex'
  },
  isCenter: {
    justifyContent: 'center'
  },
  isRight: {
    justifyContent: 'flex-end'
  }
};

var Addons = function Addons(props) {
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
      _extends({}, props, { style: [styles.base].concat(zcss) }),
      props.children
    )
  );
};

Addons.propTypes = {
  zcss: _propTypes2.default.array
};

exports.default = (0, _radium2.default)(Addons);