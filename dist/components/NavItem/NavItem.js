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
    padding: '.75em',
    border: 0,
    boxSizing: 'border-box',
    fontWeight: 'normal',
    verticalAlign: 'baseline',
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 575px)': {
      width: '100%',
      padding: '0px 5px'
    }
  },
  logo: {
    width: '100%',
    '@media (max-width: 575px)': {
      display: 'none'
      // justifyContent: 'center',
      // padding: '0 5px'
    }
  },
  icon: {
    '@media (max-width: 575px)': {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  },
  menu: {
    '@media (max-width: 575px)': {
      padding: 10,
      borderBottom: 'solid 1px #dbdbdb'
    }
  }
};

var NavItem = function NavItem(props) {
  var zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map(function (item, index) {
      zcss.push(styles[item]);
      zcss.push(_constant.atomic[item]);
    });
  }

  return _react2.default.createElement(
    'span',
    { style: [styles.base].concat(zcss), onClick: props.action },
    props.children
  );
};

NavItem.propTypes = {
  zcss: _propTypes2.default.array
};

exports.default = (0, _radium2.default)(NavItem);