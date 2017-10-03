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

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Link = require('../Link/Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  base: {
    outline: 0,
    boxShadow: 'none',
    padding: '5px 8px',
    lineHeight: 1,
    background: 'transparent',
    border: 0,
    borderRadius: 5,
    margin: 0,
    display: 'none',
    '@media (max-width: 575px)': {
      display: 'flex',
      flex: 1,
      padding: '0 5px'
    }
  }
};

var NavToggle = function NavToggle(props) {
  var zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map(function (item, index) {
      zcss.push(styles[item]);
      zcss.push(_constant.atomic[item]);
    });
  }

  return _react2.default.createElement(
    'button',
    { style: [styles.base], onClick: props.toggle },
    !props.isActive && _react2.default.createElement(_Icon2.default, { zcss: ['cl_success', 'f1r'], icon: 'fa fa-bars', text: 'ZetGoo' }),
    props.isActive && _react2.default.createElement(_Icon2.default, { zcss: ['cl_disable', 'f1r'], icon: 'fa fa-times', text: 'ZetGoo' })
  );
};

NavToggle.propTypes = {
  zcss: _propTypes2.default.array
};

exports.default = (0, _radium2.default)(NavToggle);