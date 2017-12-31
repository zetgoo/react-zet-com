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
  base: {},
  cover: {
    position: 'relative',
    display: 'inline-flex',
    width: '100%'
  },
  line: {
    position: 'absolute',
    bottom: 0,
    height: 2,
    backgroundColor: '#6bb551',
    transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
    transitionDuration: '.35s',
    transitionProperty: 'left,width'
  },
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
    zcss = props.zcss.map(function (item) {
      if (styles[item]) {
        return zcss.concat(styles[item]);
      }
      return zcss.concat(_constant.atomic[item]);
    });
  }

  var content = null;
  var buildHtml = function buildHtml() {
    return _react2.default.Children.map(props.children, function (child, index) {
      if (child.type.displayName === 'Tab') {
        if (props.index === index) {
          content = _react2.default.cloneElement(_react2.default.createElement('section', null), {
            children: child.props.children
          });
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
    { style: [styles.base].concat(_toConsumableArray(zcss), [props.style]) },
    _react2.default.createElement(
      'div',
      {
        style: styles.cover
      },
      htmlElement,
      _react2.default.createElement('div', {
        style: _extends({}, styles.line, {
          width: 100 / props.children.length + '%',
          left: 100 / props.children.length * props.index + '%' })
      })
    ),
    content
  );
};

Tabs.propTypes = {
  zcss: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  style: _propTypes2.default.oneOfType([null, _propTypes2.default.object]).isRequired,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired,
  index: _propTypes2.default.number.isRequired
};

exports.default = (0, _radium2.default)(Tabs);