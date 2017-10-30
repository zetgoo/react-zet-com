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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
    '@media (max-width: 575px)': {
      display: 'block',
      position: 'absolute',
      backgroundColor: '#fff',
      left: 0,
      right: 0,
      top: '100%',
      width: '100vh'
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
    display: 'flex',
    justifyContent: 'flex-end'
  }
};

var NavGroup = function NavGroup(props) {
  var zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    zcss = props.zcss.map(function (item) {
      if (styles[item]) {
        return zcss.concat(styles[item]);
      }
      return zcss.concat(_constant.atomic[item]);
    });
  }
  console.log('ddk');
  return _react2.default.createElement(
    'div',
    { style: [styles.base].concat(_toConsumableArray(zcss)) },
    props.children
  );
};

NavGroup.propTypes = {
  zcss: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired
};

exports.default = (0, _radium2.default)(NavGroup);