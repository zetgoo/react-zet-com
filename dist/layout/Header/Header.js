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

var _constant = require('../../components/constant');

var _Nav = require('../../components/Nav/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _NavToggle = require('../../components/NavToggle/NavToggle');

var _NavToggle2 = _interopRequireDefault(_NavToggle);

var _NavGroup = require('../../components/NavGroup/NavGroup');

var _NavGroup2 = _interopRequireDefault(_NavGroup);

var _NavItem = require('../../components/NavItem/NavItem');

var _NavItem2 = _interopRequireDefault(_NavItem);

var _Button = require('../../components/Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Icon = require('../../components/Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Logo = require('../../components/Logo/Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _Link = require('../../components/Link/Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {Nav, NavItem, NavGroup,Button, Icon} from 're-bulma'

var styles = {
  base: {}
};

var Header = function Header(props) {
  var zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map(function (item, index) {
      zcss.push(styles[item]);
      zcss.push(_constant.atomic[item]);
    });
  }

  return _react2.default.createElement(
    _Nav2.default,
    null,
    _react2.default.createElement(_NavToggle2.default, { isActive: props.isActive, toggle: props.toogleClick }),
    _react2.default.createElement(
      _NavGroup2.default,
      { zcss: [] },
      _react2.default.createElement(
        _NavItem2.default,
        { zcss: ['logo'] },
        _react2.default.createElement(_Logo2.default, null)
      )
    ),
    _react2.default.createElement(
      _NavGroup2.default,
      { zcss: ['menu', !props.isActive ? 'menuHide' : ''] },
      props.menu && props.menu.map(function (item, index) {
        return _react2.default.createElement(
          _NavItem2.default,
          null,
          _react2.default.createElement(
            _Link2.default,
            { to: item.to },
            _react2.default.createElement(_Icon2.default, item)
          )
        );
      })
    ),
    _react2.default.createElement(
      _NavGroup2.default,
      { zcss: ['icon'] },
      props.iconMenu && props.iconMenu.map(function (item, index) {
        return _react2.default.createElement(
          _NavItem2.default,
          { zcss: ['icon'], action: item.action },
          _react2.default.createElement(_Icon2.default, { zcss: item.zcss, icon: item.icon, text: item.text })
        );
      })
    )
  );
};

Header.propTypes = {
  zcss: _propTypes2.default.array
};

exports.default = (0, _radium2.default)(Header);