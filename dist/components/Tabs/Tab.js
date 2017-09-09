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
    alignItems: 'center',
    borderBottom: '1px solid #d3d6db',
    color: '#69707a',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: -1,
    padding: '6px 12px',
    verticalAlign: 'top'
  },
  isActived: {
    color: _constant.colors.success,
    borderColor: _constant.colors.success
  }
};

var Tab = function Tab(props) {
  var zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map(function (item, index) {
      zcss.push(styles[item]);
      zcss.push(_constant.atomic[item]);
    });
  }

  return _react2.default.createElement(
    'li',
    { style: { display: 'block' } },
    _react2.default.createElement(
      'span',
      { className: props.icon, style: [styles.base].concat(zcss) },
      props.children
    )
  );
};

Tab.propTypes = {
  zcss: _propTypes2.default.array
};

exports.default = (0, _radium2.default)(Tab);