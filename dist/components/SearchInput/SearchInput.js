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

var _Addons = require('../Addons/Addons');

var _Addons2 = _interopRequireDefault(_Addons);

var _Input = require('../Input/Input');

var _Input2 = _interopRequireDefault(_Input);

var _Button = require('../Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var styles = {
  base: {
    position: 'relative',
    marginLeft: '1em',
    width: '100%',
    backgroundColor: '#f6f6f6'
  },
  icon: {
    position: 'absolute',
    top: 9,
    pointerEvents: 'none',
    left: 7,
    zIndex: 4,
    fontSize: '.8125em'
  }
};

var SearchInput = function SearchInput(props) {
  var zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    zcss = props.zcss.map(function (item) {
      if (styles[item]) {
        return zcss.concat(styles[item]);
      }
      return zcss.concat(_constant.atomic[item]);
    });
  }

  var searchEnter = function searchEnter(e) {
    if (e.which === 13 || e.keyCode === 13) {
      e.preventDefault();
      props.search();
    }
  };

  return _react2.default.createElement(
    'div',
    _extends({}, props, { style: [styles.base].concat(_toConsumableArray(zcss)) }),
    _react2.default.createElement(_Input2.default, {
      zcss: ['pdL2e', 'bd_s_none', 'bs_none', 'bgInherit'],
      placeholder: 'Search for products and resources',
      onKeyDown: searchEnter
    }),
    !props.isSearching && _react2.default.createElement('i', { style: styles.icon, className: 'fa fa-search' }),
    props.isSearching && _react2.default.createElement('i', { style: styles.icon, className: 'fa fa-spinner fa-spin' }),
    props.children
  );
};

SearchInput.propTypes = {
  zcss: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  search: _propTypes2.default.func.isRequired,
  isSearching: _propTypes2.default.bool.isRequired,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired
};

exports.default = (0, _radium2.default)(SearchInput);