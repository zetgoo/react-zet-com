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

var _HOCOverlay = require('./HOCOverlay');

var _HOCOverlay2 = _interopRequireDefault(_HOCOverlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

  content: {
    opacity: 1,
    width: '50vw',
    display: 'flex',
    maxWidth: '96vw',
    maxHeight: '96vh',
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: '.2rem',
    boxShadow: '0 19px 60px rgba(0,0,0,.3), 0 15px 20px rgba(0,0,0,.22)',
    transitionDelay: '.07s',
    transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
    transitionDuration: '.35s',
    transitionProperty: 'opacity,transform',
    zIndex: 1
  },

  cover: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    transitionDuration: '.35s',
    transitionProperty: 'opacity',
    opacity: '.6'
  }
};

var Overlay = function Overlay(props) {
  var zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    zcss = props.zcss.map(function (item) {
      if (styles[item]) {
        return zcss.concat(styles[item]);
      }
      return zcss.concat(_constant.atomic[item]);
    });
  }

  var container = null;

  var handleOutsideClick = function handleOutsideClick(e) {
    // ignore clicks on the component itself
    if (container && !container.contains(e.target)) {
      props.onShow();
    }
  };

  if (props.isShow) {
    document.addEventListener('click', handleOutsideClick, false);
  } else {
    document.removeEventListener('click', handleOutsideClick, false);
  }

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.cloneElement(props.zFront, { onClick: props.onShow }),
    props.isShow && _react2.default.createElement(
      'div',
      { style: styles.base },
      _react2.default.createElement('div', { style: styles.cover }),
      _react2.default.createElement(
        'div',
        {
          style: styles.content,
          ref: function ref(node) {
            container = node;
          }
        },
        props.children
      )
    )
  );
};

Overlay.propTypes = {
  zcss: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired,
  isShow: _propTypes2.default.bool.isRequired,
  onShow: _propTypes2.default.func.isRequired,
  zFront: _propTypes2.default.node.isRequired
};

var enhanceOverlay = (0, _HOCOverlay2.default)(Overlay);

exports.default = (0, _radium2.default)(enhanceOverlay);