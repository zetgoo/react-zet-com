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
    listStyle: 'none',
    textRendering: 'optimizeLegibility',
    lineHeight: 1.428571428571429,
    paddingLeft: 10,
    margin: 0,
    border: 0,
    boxSizing: 'border-box',
    fontSize: 14,
    fontWeight: 'normal',
    verticalAlign: 'baseline'
  },
  item: {
    paddingTop: '0.5em'
    // ':hover':{
    //   backgroundColor: 'red'
    // }
  },
  isActived: {}
};

var MenuItem = function MenuItem(props) {
  var zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map(function (item, index) {
      zcss.push(styles[item]);
      zcss.push(_constant.atomic[item]);
    });
  }

  var buildHtml = function buildHtml() {
    if (!Array.isArray(props.children)) return props.children;
    if (props.children && Array.isArray(props.children)) {
      var htmlElements = props.children.map(function (item, index) {
        if (item.type === 'li') {
          return _react2.default.cloneElement(item, [].concat(_toConsumableArray(item.props)), item.props.children);
        }
        return _react2.default.createElement(
          'li',
          { style: styles.item },
          item
        );
      });
      return htmlElements;
    }
    return null;
  };

  return _react2.default.createElement(
    'ul',
    { style: [styles.base].concat(zcss) },
    buildHtml()
  );
};

MenuItem.propTypes = {
  zcss: _propTypes2.default.array
};

exports.default = (0, _radium2.default)(MenuItem);