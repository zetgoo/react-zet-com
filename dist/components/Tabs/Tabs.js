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

var _TabGroup = require('./TabGroup');

var _TabGroup2 = _interopRequireDefault(_TabGroup);

var _Tab = require('./Tab');

var _Tab2 = _interopRequireDefault(_Tab);

var _constant = require('../constant');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  base: {
    alignItems: 'stretch',
    display: 'flex',
    justifyContent: 'space-between',
    lineHeight: 24,
    overflow: 'hidden',
    overflowX: 'auto',
    whiteSpace: 'nowrap'
  },
  isBox: {
    borderSize: 1,
    borderColor: _constant.colors.success,
    borderStyle: 'solid'
  },
  list: {
    alignItems: 'center',
    borderBottom: '1px solid #d3d6db',
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: '100%',
    fontWeight: 'normal',
    verticalAlign: 'baseline',
    backgroundColor: 'transparent',
    userSelect: 'none'
  }
};

var Tabs = function Tabs(props) {
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
    _react2.default.createElement(
      _TabGroup2.default,
      null,
      props.tabs && props.tabs.map(function (item, index) {
        return _react2.default.createElement(
          _Tab2.default,
          { zcss: [index === props.indexActice ? 'isActived' : ''], icon: item.icon, key: index },
          item.text
        );
      })
    )
  );
};

Tabs.propTypes = {
  zcss: _propTypes2.default.array
};

exports.default = (0, _radium2.default)(Tabs);