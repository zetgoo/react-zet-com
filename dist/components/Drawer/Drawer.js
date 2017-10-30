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

var _Overlay = require('../../components/Overlay/Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var styles = {
  base: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 300,
    display: 'flex',
    width: '100vw',
    height: '100vh',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'all'
  },
  drawer: {
    boxShadow: '0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12)',
    position: 'absolute',
    top: 0,
    display: 'block',
    width: '24rem',
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
    color: '#424242',
    backgroundColor: '#000',
    transitionDelay: '0s',
    transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
    transitionDuration: '.35s',
    transitionProperty: 'transform',
    transformStyle: 'preserve-3d',
    willChange: 'transform',
    left: 0,
    borderRight: '1px solid #e0e0e0',
    pointerEvents: 'all',
    transform: 'translateX(0)',
    zIndex: 2
  },
  cover: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    opacity: '.6',
    transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
    transitionDuration: '.35s',
    transitionProperty: 'opacity'
  }
};

var Drawer = function Drawer(props) {
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
    _Overlay2.default,
    { zFront: props.zFront },
    _react2.default.createElement(
      'div',
      { style: [styles.drawer].concat(_toConsumableArray(zcss)) },
      props.children
    )
  );
};

Drawer.propTypes = {
  zcss: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired,
  zFront: _propTypes2.default.node.isRequired
};

exports.default = (0, _radium2.default)(Drawer);