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

var _Image = require('../Image/Image');

var _Image2 = _interopRequireDefault(_Image);

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var styles = {
  base: {
    position: 'relative',
    display: 'inline-block',
    width: 32,
    height: 32,
    lineHeight: 1.5,
    overflow: 'hidden',
    fontSize: '1.25em',
    color: '#fff',
    textAlign: 'center',
    verticalAlign: 'middle',
    backgroundColor: '#9e9e9e',
    borderRadius: 5,
    '@media (max-width: 575px)': {
      height: 32,
      width: 32
    }
  },
  isCircle: {
    borderRadius: '50%'
  }
};

var Avatar = function Avatar(props) {
  var zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    zcss = props.zcss.map(function (item) {
      if (styles[item]) {
        return zcss.concat(styles[item]);
      }
      return zcss.concat(_constant.atomic[item]);
    });
  }

  if (props.src) {
    return _react2.default.createElement(_Image2.default, _extends({}, props, {
      zcss: [].concat(_toConsumableArray(props.zcss), ['isAvatar']),
      width: props.width || 32,
      ratio: 1
    }));
  }

  return _react2.default.createElement(
    'div',
    { style: [styles.base].concat(_toConsumableArray(zcss)) },
    props.icon && _react2.default.createElement(_Icon2.default, { icon: props.icon }),
    props.text && props.text
  );
};

Avatar.propTypes = {
  zcss: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired,
  icon: _propTypes2.default.string.isRequired,
  text: _propTypes2.default.string.isRequired,
  src: _propTypes2.default.string.isRequired,
  width: _propTypes2.default.number.isRequired
};

exports.default = (0, _radium2.default)(Avatar);