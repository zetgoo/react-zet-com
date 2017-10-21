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

var _TabGroup = require('./TabGroup');

var _TabGroup2 = _interopRequireDefault(_TabGroup);

var _Tab = require('./Tab');

var _Tab2 = _interopRequireDefault(_Tab);

var _constant = require('../constant');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  base: {},
  isBox: {},
  list: {},
  slider: {
    position: 'absolute',
    bottom: 0
  }
};

var Tabs = function Tabs(props) {
  var zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map(function (item) {
      zcss.push(styles[item]);
      zcss.push(_constant.atomic[item]);
    });
  }
  var content = null;
  var buildHtml = function buildHtml() {
    return _react2.default.Children.map(props.children, function (child, index) {
      if (child.type.displayName === 'Tab') {
        if (props.index === index) {
          content = _react2.default.cloneElement(_react2.default.createElement('section', null), { children: child.props.children });
          return _react2.default.cloneElement(child, _extends({}, child.props, {
            isActived: true,
            onClick: function onClick() {
              return props.onChange(index);
            }
          }));
        }
      }
      return _react2.default.cloneElement(child, _extends({}, child.props, {
        onClick: function onClick() {
          return props.onChange(index);
        }
      }));
    });
  };

  var htmlElement = buildHtml();

  return _react2.default.createElement(
    'div',
    { style: [styles.base].concat(zcss) },
    _react2.default.createElement(
      'div',
      {
        style: {
          position: 'relative',
          display: 'inline-flex',
          width: '100%'
        } },
      htmlElement,
      _react2.default.createElement('div', { style: {
          position: 'absolute',
          bottom: 0,
          height: 2,
          backgroundColor: '#6bb551',
          left: 100 / props.children.length * props.index + '%',
          transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
          transitionDuration: '.35s',
          transitionProperty: 'left,width',
          width: '20%'
        } })
    ),
    content
  );
};

Tabs.propTypes = {
  zcss: _propTypes2.default.array
};

exports.default = (0, _radium2.default)(Tabs);