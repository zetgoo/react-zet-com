'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constant = require('../constant');

var _HOCPopover = require('./HOCPopover');

var _HOCPopover2 = _interopRequireDefault(_HOCPopover);

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

var Popover = function Popover(props) {
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
    document.addEventListener('click', handleOutsideClick);
  } else {
    document.removeEventListener('click', handleOutsideClick);
  }

  return _react2.default.createElement(
    'div',
    { style: styles.base },
    _react2.default.cloneElement(props.zFront, { onClick: props.onShow }),
    props.isShow && _react2.default.createElement(
      'div',
      {
        style: [styles.content].concat(_toConsumableArray(zcss), [props.style]),
        ref: function ref(node) {
          container = node;
        }
      },
      props.children
    )
  );
};

Popover.propTypes = {
  zcss: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  style: _propTypes2.default.object.isRequire,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired,
  isShow: _propTypes2.default.bool.isRequired,
  onShow: _propTypes2.default.func.isRequired,
  zFront: _propTypes2.default.node.isRequired
};

// const enhancePopover = HOCPopover(Popover);

exports.default = (0, _HOCPopover2.default)((0, _radium2.default)(Popover));