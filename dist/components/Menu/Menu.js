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

var _MenuLabel = require('../../components/MenuLabel/MenuLabel');

var _MenuLabel2 = _interopRequireDefault(_MenuLabel);

var _MenuItem = require('../../components/MenuItem/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _MenuGroup = require('../../components/MenuGroup/MenuGroup');

var _MenuGroup2 = _interopRequireDefault(_MenuGroup);

var _Link = require('../../components/Link/Link');

var _Link2 = _interopRequireDefault(_Link);

var _Icon = require('../../components/Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  base: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    listStyle: 'none',
    margin: 0,
    color: '#fff',
    backgroundColor: '#222d32',
    fontSize: 18
  }
};

var Menu = function Menu(props) {
  var zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map(function (item, index) {
      zcss.push(styles[item]);
      zcss.push(_constant.atomic[item]);
    });
  }

  return _react2.default.createElement(
    'aside',
    { style: [styles.base].concat(zcss) },
    props.children
  );
};

Menu.propTypes = {
  zcss: _propTypes2.default.array
};

exports.default = (0, _radium2.default)(Menu);