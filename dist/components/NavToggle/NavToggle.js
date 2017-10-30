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

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

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
    zcss = props.zcss.map(function (item) {
      if (styles[item]) {
        return zcss.concat(styles[item]);
      }
      return zcss.concat(_constant.atomic[item]);
    });
  }

  return _react2.default.createElement(
    'button',
    { style: [styles.base], onClick: props.onClick },
    !props.isActive && _react2.default.createElement(_Icon2.default, { zcss: ['cl_success', 'f1r'], icon: 'fa fa-bars' }),
    props.isActive && _react2.default.createElement(_Icon2.default, { zcss: ['cl_disable', 'f1r'], icon: 'fa fa-times' })
  );
};

NavToggle.propTypes = {
  zcss: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  isActive: _propTypes2.default.bool.isRequired,
  onClick: _propTypes2.default.func.isRequired
};

exports.default = (0, _radium2.default)(NavToggle);