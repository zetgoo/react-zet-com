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

var _Avatar = require('../../components/Avatar/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _SearchInput = require('../../components/SearchInput/SearchInput');

var _SearchInput2 = _interopRequireDefault(_SearchInput);

var _Container = require('../../components/Container/Container');

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var styles = {
  base: {
    backgroundColor: '#fff'
  }
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
    'header',
    { style: styles.base },
    _react2.default.createElement(
      _Container2.default,
      null,
      _react2.default.createElement(
        _Nav2.default,
        null,
        _react2.default.createElement(_NavToggle2.default, { isActive: props.isActive, toggle: props.toogleClick }),
        _react2.default.createElement(
          _NavGroup2.default,
          { zcss: [] },
          _react2.default.createElement(
            _NavItem2.default,
            { zcss: ['logo'] },
            _react2.default.createElement(_Logo2.default, null),
            _react2.default.createElement(_SearchInput2.default, { isSearching: props.isSearching, search: props.search })
          )
        ),
        _react2.default.createElement(
          _NavGroup2.default,
          { zcss: ['menu', !props.isActive ? 'menuHide' : ''] },
          props.menu && props.menu.map(function (item, index) {
            return _react2.default.createElement(
              _NavItem2.default,
              { zcss: [].concat(_toConsumableArray(item.zcss), ['menu']) },
              _react2.default.createElement(
                _Link2.default,
                { to: item.to },
                item.text
              )
            );
          })
        ),
        !props.userLogined && _react2.default.createElement(
          _NavGroup2.default,
          { zcss: ['menu', !props.isActive ? 'menuHide' : ''] },
          props.menu && props.menu.map(function (item, index) {
            return _react2.default.createElement(
              _NavItem2.default,
              { zcss: [].concat(_toConsumableArray(item.zcss), ['menu']) },
              _react2.default.createElement(
                _Link2.default,
                { to: item.to },
                item.text
              )
            );
          })
        ),
        props.userLogined && _react2.default.createElement(
          _NavGroup2.default,
          { zcss: ['icon'] },
          _react2.default.createElement(
            _NavItem2.default,
            { zcss: ['icon'] },
            props.iconMenuUser && props.iconMenuUser.map(function (item, index) {
              return _react2.default.createElement(_Icon2.default, { zcss: [].concat(_toConsumableArray(item.zcss), ['mgL1e']), icon: item.icon,
                onClick: item.action });
            })
          ),
          _react2.default.createElement(
            _NavItem2.default,
            { zcss: ['avatar'] },
            _react2.default.createElement(_Avatar2.default, { zcss: ['isCircle'], image: props.userLogined.avatar })
          )
        )
      )
    )
  );
};

Header.propTypes = {
  zcss: _propTypes2.default.array
};

exports.default = (0, _radium2.default)(Header);