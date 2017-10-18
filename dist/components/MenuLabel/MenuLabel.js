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
    whiteSpace: 'nowrap',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    position: 'relative',
    margin: 0,
    marginBottom: 5,
    color: '#4b646f',
    background: '#1a2226',
    overflow: 'hidden',
    textOverflow: 'clip'
  }
};

var MenuLabel = function MenuLabel(props) {
  var zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map(function (item, index) {
      zcss.push(styles[item]);
      zcss.push(_constant.atomic[item]);
    });
  }

  return _react2.default.createElement(
    'p',
    { style: [styles.base].concat(zcss) },
    props.children
  );
};

MenuLabel.propTypes = {
  zcss: _propTypes2.default.array
};

exports.default = (0, _radium2.default)(MenuLabel);