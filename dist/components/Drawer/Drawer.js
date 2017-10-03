'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _drawer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constant = require('../constant');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  drawer: (_drawer = {
    boxShadow: '0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12)',
    position: 'absolute',
    top: 0,
    display: 'block',
    width: '24rem',
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
    color: '#424242',
    pointerEvents: 'none',
    backgroundColor: '#000',
    transitionDelay: '0s',
    transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
    transitionDuration: '.35s',
    transitionProperty: '-webkit-transform'
  }, _defineProperty(_drawer, 'transitionProperty', 'transform'), _defineProperty(_drawer, 'transitionProperty', 'transform,-webkit-transform'), _defineProperty(_drawer, 'transformStyle', 'preserve-3d'), _defineProperty(_drawer, 'willChange', 'transform'), _defineProperty(_drawer, 'left', 0), _defineProperty(_drawer, 'borderRight', '1px solid #e0e0e0'), _defineProperty(_drawer, 'pointerEvents', 'all'), _defineProperty(_drawer, 'transform', 'translateX(0)'), _defineProperty(_drawer, 'zIndex', 2), _drawer),
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
    props.zcss.map(function (item, index) {
      zcss.push(styles[item]);
      zcss.push(_constant.atomic[item]);
    });
  }

  if (!props.isShow) return null;

  return _react2.default.createElement(
    'div',
    { style: [styles.base].concat(zcss) },
    _react2.default.createElement('div', { style: [styles.cover].concat(zcss) }),
    _react2.default.createElement(
      'div',
      { style: [styles.drawer].concat(zcss) },
      props.children
    )
  );
};

Drawer.propTypes = {
  zcss: _propTypes2.default.array
};

exports.default = (0, _radium2.default)(Drawer);