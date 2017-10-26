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
    padding: '1.7rem 1.2rem',
    fontSize: '.75em',
    fontWeight: 500,
    lineHeight: 1,
    color: 'rgba(0,0,0,.7)',
    textTransform: 'uppercase',
    transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
    transitionDuration: '.35s',
    transitionProperty: 'box-shadow,color',
    flex: 1,
    textAlign: 'center',
    cursor: 'pointer'
  },
  isActived: {
    color: '#000'
  },
  disabled: {
    opacity: '.2',
    cursor: 'default'
  }
};

var Tab = function Tab(props) {
  var zcss = [];

  if (props.zcss && Array.isArray(props.zcss)) {
    if (props.isActived) {
      props.zcss.push('isActived');
    }
    if (props.disabled) {
      props.zcss.push('disabled');
    }
    props.zcss.map(function (item, index) {
      zcss.push(styles[item]);
      zcss.push(_constant.atomic[item]);
    });
  }

  var onActive = function onActive(e) {
    props.onActive();
  };

  return _react2.default.createElement(
    'label',
    _extends({}, props, { style: [styles.base].concat(zcss) }),
    props.label
  );
};

Tab.propTypes = {
  zcss: _propTypes2.default.array
};

exports.default = (0, _radium2.default)(Tab);