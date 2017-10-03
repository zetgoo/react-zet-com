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

var styles = {
  base: {
    textRendering: 'optimizeLegibility',
    color: '#66757f',
    padding: 0,
    border: 0,
    boxSizing: 'border-box',
    fontWeight: 'normal',
    verticalAlign: 'baseline',
    display: 'flex',
    alignItems: 'stretch',
    backgroundColor: '#fff',
    minHeight: 50,
    position: 'relative',
    textAlign: 'center',
    zIndex: 2,

    '@media (max-width: 575px)': {}
  }
};

var Nav = function Nav(props) {
  var zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map(function (item, index) {
      zcss.push(styles[item]);
      zcss.push(_constant.atomic[item]);
    });
  }

  return _react2.default.createElement(
    'nav',
    { style: [styles.base], role: 'navigation' },
    props.children
  );
};

Nav.propTypes = {
  zcss: _propTypes2.default.array
};

exports.default = (0, _radium2.default)(Nav);