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
    textRendering: 'optimizeLegibility',
    color: '#69707a',
    padding: '.75em',
    border: 0,
    boxSizing: 'border-box',
    fontWeight: 'normal',
    verticalAlign: 'baseline',
    display: 'flex',
    alignItems: 'center'
  },
  logo: {
    width: '100%',
    '@media (max-width: 575px)': {
      display: 'none'
      // justifyContent: 'center',
      // padding: '0 5px'
    }
  },
  icon: {
    '@media (max-width: 575px)': {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  },
  menu: {
    '@media (max-width: 575px)': {
      padding: 10,
      borderBottom: 'solid 1px #dbdbdb'
    }
  }
};

var NavItem = function NavItem(props) {
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
    _extends({}, props, { style: [styles.base].concat(_toConsumableArray(zcss), [props.style]) }),
    props.children
  );
};

NavItem.propTypes = {
  zcss: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  style: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired,
  action: _propTypes2.default.func.isRequired
};

exports.default = (0, _radium2.default)(NavItem);