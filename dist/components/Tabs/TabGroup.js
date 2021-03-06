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
    borderBottomColor: '#dbdbdb',
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    display: 'flex',
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: 'flex-start',
    margin: 0,
    padding: 0
  }
};

var TabGroup = function TabGroup(props) {
  var zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map(function (item, index) {
      zcss.push(styles[item]);
      zcss.push(_constant.atomic[item]);
    });
  }

  return _react2.default.createElement(
    'ul',
    { style: [styles.base].concat(zcss) },
    props.children
  );
};

TabGroup.propTypes = {
  zcss: _propTypes2.default.array
};

exports.default = (0, _radium2.default)(TabGroup);