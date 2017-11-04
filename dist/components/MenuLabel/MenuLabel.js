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
    whiteSpace: 'nowrap',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    position: 'relative',
    margin: 0,
    marginBottom: 5,
    color: '#4b646f',
    overflow: 'hidden',
    textOverflow: 'clip'
  }
};

var MenuLabel = function MenuLabel(props) {
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
    'p',
    { style: [styles.base].concat(_toConsumableArray(zcss), [props.style]) },
    props.children
  );
};

MenuLabel.propTypes = {
  zcss: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  style: _propTypes2.default.oneOfType([null, _propTypes2.default.object]).isRequired,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired
};

exports.default = (0, _radium2.default)(MenuLabel);