'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _base;

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
  base: (_base = {
    appearance: 'none',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 3,
    boxShadow: 'none',
    display: 'inline-flex',
    fontSize: '0.875em',
    height: '2.25em',
    justifyContent: 'flex-start',
    lineHeight: 1.5,
    position: 'relative',
    verticalAlign: 'top',
    touchCallout: 'none',
    userSelect: 'none',
    backgroundColor: 'white',
    borderColor: '#dbdbdb',
    color: '#222324',
    cursor: 'pointer'
  }, _defineProperty(_base, 'justifyContent', 'center'), _defineProperty(_base, 'paddingLeft', '0.75em'), _defineProperty(_base, 'paddingRight', '0.75em'), _defineProperty(_base, 'textAlign', 'center'), _defineProperty(_base, 'whiteSpace', 'nowrap'), _defineProperty(_base, ':hover', {
    zIndex: 2,
    borderColor: '#aeb1b5',
    color: '#222324'
  }), _defineProperty(_base, ':focus', {
    borderColor: _constant.colors.success,
    outline: 'none',
    color: '#222324',
    zIndex: 3
  }), _defineProperty(_base, ':active', {
    boxShadow: 'inset 0 1px 2px rgba(17, 17, 17, 0.2)',
    zIndex: 4
  }), _base),

  white: {
    backgroundColor: _constant.colors.no,
    borderColor: 'transparent',
    color: '#111',
    ':hover': {
      backgroundColor: '#e6e6e6',
      borderColor: 'transparent',
      color: '#111'
    },
    ':focus': {
      backgroundColor: '#e6e6e6',
      borderColor: 'transparent',
      color: '#111'
    },
    ':active': {
      borderColor: 'transparent'
    }
  },

  light: {
    backgroundColor: '#f5f7fa',
    borderColor: 'transparent',
    color: '#69707a',
    ':hover': {
      backgroundColor: '#d3dce9',
      borderColor: 'transparent',
      color: '#69707a'
    },
    ':focus': {
      backgroundColor: '#d3dce9',
      borderColor: 'transparent',
      color: '#69707a'
    },
    ':active': {
      borderColor: 'transparent'
    }
  },

  black: {
    backgroundColor: '#111',
    borderColor: 'transparent',
    color: '#fff',
    ':hover': {
      backgroundColor: '#000',
      color: '#fff',
      borderColor: 'transparent'
    },
    ':focus': {
      backgroundColor: '#000',
      color: '#fff',
      borderColor: 'transparent'
    },
    ':active': {
      borderColor: 'transparent'
    }
  },

  isLink: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    color: '#69707a',
    textDecoration: 'underline',
    ':hover': {
      backgroundColor: '#d3d6db',
      color: '#222324',
      borderColor: 'transparent'
    },
    ':focus': {
      backgroundColor: '#d3d6db',
      color: '#222324',
      borderColor: 'transparent'
    }
  },

  primary: {
    backgroundColor: _constant.colors.primary,
    borderColor: 'transparent',
    color: '#fff',
    ':hover': {
      backgroundColor: '#199fae',
      borderColor: 'transparent',
      color: '#fff'
    },
    ':focus': {
      backgroundColor: '#199fae',
      borderColor: 'transparent',
      color: '#fff'
    },
    ':active': {
      borderColor: 'transparent'
    }
  },

  info: {
    backgroundColor: _constant.colors.info,
    borderColor: 'transparent',
    color: '#fff',
    ':hover': {
      backgroundColor: '#1f99d3',
      borderColor: 'transparent',
      color: '#fff'
    },
    ':focus': {
      backgroundColor: '#1f99d3',
      borderColor: 'transparent',
      color: '#fff'
    },
    ':active': {
      borderColor: 'transparent'
    }
  },

  success: {
    backgroundColor: _constant.colors.success,
    borderColor: 'transparent',
    color: '#fff',
    ':hover': {
      backgroundColor: '#84cf6a',
      borderColor: 'transparent',
      color: '#fff'
    },
    ':focus': {
      backgroundColor: '#84cf6a',
      borderColor: 'transparent',
      color: '#fff'
    },
    ':active': {
      borderColor: 'transparent'
    }
  },
  disable: {
    backgroundColor: _constant.colors.disable,
    borderColor: 'transparent',
    color: 'rgba(17, 17, 17, 0.5)',
    cursor: 'not-allowed'
  },

  warning: {
    backgroundColor: _constant.colors.warning,
    borderColor: 'transparent',
    color: 'rgba(17, 17, 17, 0.5)',
    ':hover': {
      backgroundColor: '#fbda41',
      borderColor: 'transparent',
      color: 'rgba(17, 17, 17, 0.5)'
    },
    ':focus': {
      backgroundColor: '#fbda41',
      borderColor: 'transparent',
      color: 'rgba(17, 17, 17, 0.5)'
    },
    ':active': {
      borderColor: 'transparent'
    }
  },

  danger: {
    backgroundColor: _constant.colors.danger,
    borderColor: 'transparent',
    color: '#fff',
    ':hover': {
      backgroundColor: '#e84135',
      borderColor: 'transparent',
      color: '#fff'
    },
    ':focus': {
      backgroundColor: '#e84135',
      borderColor: 'transparent',
      color: '#fff'
    },
    ':active': {
      borderColor: 'transparent'
    }
  },

  cancel: {
    backgroundColor: _constant.colors.cancel,
    borderColor: 'transparent',
    color: '#f5f7fa'
  },

  isLoading: {
    color: 'transparent',
    pointerEvents: 'none',
    ':after': {
      animation: 'spinAround 500ms infinite linear',
      border: '2px solid #dbdbdb',
      borderRadius: '290486px',
      borderRightColor: 'transparent',
      borderTopColor: 'transparent',
      content: 'hjghjg',
      display: 'block',
      height: '1em',
      width: '1em',
      left: 2,
      top: 2,
      position: 'absolute'
    }
  }
};

var Button = function Button(props) {
  var zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map(function (item, index) {
      zcss.push(styles[item]);
      zcss.push(_constant.atomic[item]);
    });
  }

  return _react2.default.createElement(
    'button',
    _extends({}, props, { style: [styles.base].concat(zcss)
    }),
    props.children
  );
};

Button.propTypes = {
  zcss: _propTypes2.default.array
};

exports.default = (0, _radium2.default)(Button);