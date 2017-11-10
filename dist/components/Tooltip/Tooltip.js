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

var _HOCTooltip = require('./HOCTooltip');

var _HOCTooltip2 = _interopRequireDefault(_HOCTooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var styles = {
  base: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'all'
  },
  content: {
    position: 'absolute',
    opacity: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: '.2rem',
    transitionDelay: '.07s',
    transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
    transitionDuration: '.35s',
    transitionProperty: 'opacity,transform',
    zIndex: 99
  },
  isTop: {
    bottom: '100%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  isRight: {
    left: '100%',
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  isBottom: {
    top: '100%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  isLeft: {
    right: '100%',
    marginTop: 'auto',
    marginBottom: 'auto'
  }
};

var Tooltip = function Tooltip(props) {
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
    'div',
    { style: styles.base },
    _react2.default.cloneElement(props.zFront, {
      onMouseEnter: props.onShow,
      onMouseLeave: props.onHide
    }),
    props.isShow && _react2.default.createElement(
      'div',
      { style: [styles.content].concat(_toConsumableArray(zcss)) },
      props.children
    )
  );
};

Tooltip.propTypes = {
  zcss: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired,
  isShow: _propTypes2.default.bool.isRequired,
  onShow: _propTypes2.default.func.isRequired,
  onHide: _propTypes2.default.func.isRequired,
  zFront: _propTypes2.default.node.isRequired
};

exports.default = (0, _HOCTooltip2.default)((0, _radium2.default)(Tooltip));