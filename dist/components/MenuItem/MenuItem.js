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
    paddingLeft: '1.25rem',
    margin: 0,
    border: 0,
    boxSizing: 'border-box',
    verticalAlign: 'baseline'
  },
  item: {
    // paddingTop: '0.5em',
    // ':hover':{
    //   backgroundColor: 'red'
    // }
  },
  isActived: {}
};

var MenuItem = function MenuItem(props) {
  var zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    zcss = props.zcss.map(function (item) {
      if (styles[item]) {
        return zcss.concat(styles[item]);
      }
      return zcss.concat(_constant.atomic[item]);
    });
  }

  var buildHtml = function buildHtml() {
    if (!Array.isArray(props.children)) return props.children;
    if (props.children && Array.isArray(props.children)) {
      var htmlElements = props.children.map(function (item) {
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
    { style: [styles.base].concat(_toConsumableArray(zcss), [props.style]) },
    buildHtml()
  );
};

MenuItem.propTypes = {
  zcss: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  style: _propTypes2.default.shape().isRequired,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired
};

exports.default = (0, _radium2.default)(MenuItem);