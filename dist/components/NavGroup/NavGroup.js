'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _reactToggle = require('react-toggle');

var _reactToggle2 = _interopRequireDefault(_reactToggle);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constant = require('../constant');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  base: {
    textRendering: 'optimizeLegibility',
    color: '#69707a',
    padding: 0,
    border: 0,
    boxSizing: 'border-box',
    display: 'flex',
    flex: 1,
    fontWeight: 'normal',
    verticalAlign: 'baseline',
    justifyContent: 'flex-start'
  },
  menu: {
    justifyContent: 'flex-end',
    '@media (max-width: 575px)': {
      display: 'block',
      position: 'absolute',
      backgroundColor: '#fff',
      left: 0,
      right: 0,
      top: '100%'
    }
  },
  menuHide: {
    '@media (max-width: 575px)': {
      display: 'none'
    }
  },
  logo: {
    '@media (max-width: 575px)': {
      justifyContent: 'center'
    }
  },
  icon: {
    display: 'none',
    '@media (max-width: 575px)': {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }
};

var NavGroup = function NavGroup(props) {
  var zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map(function (item, index) {
      zcss.push(styles[item]);
      zcss.push(_constant.atomic[item]);
    });
  }

  return _react2.default.createElement(
    'div',
    { style: [styles.base].concat(zcss) },
    props.children
  );
};

NavGroup.propTypes = {
  zcss: _propTypes2.default.array
};

exports.default = (0, _radium2.default)(NavGroup);