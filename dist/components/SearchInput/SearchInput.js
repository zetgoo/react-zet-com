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

var styles = {
  base: {
    position: 'relative',
    marginLeft: '1em',
    width: '60%'
  },
  icon: {
    position: 'absolute',
    top: 7,
    pointerEvents: 'none',
    left: 7,
    zIndex: 4
  }
};

var SearchInput = function SearchInput(props) {
  var zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map(function (item, index) {
      zcss.push(styles[item]);
      zcss.push(_constant.atomic[item]);
    });
  }

  var searchEnter = function searchEnter(e) {
    if (e.which == 13 || e.keyCode == 13) {
      e.preventDefault;
      props.search();
    }
  };

  return _react2.default.createElement(
    'div',
    _extends({}, props, { style: [styles.base].concat(zcss) }),
    _react2.default.createElement(_Input2.default, {
      zcss: ['pdL2e'],
      placeholder: 'Search for products and resources',
      onKeyDown: searchEnter
    }),
    !props.isSearching && _react2.default.createElement('i', { style: styles.icon, className: 'fa fa-search' }),
    props.isSearching && _react2.default.createElement('i', { style: styles.icon, className: 'fa fa-spinner fa-spin' }),
    props.children
  );
};

SearchInput.propTypes = {
  zcss: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequire
};

exports.default = (0, _radium2.default)(SearchInput);