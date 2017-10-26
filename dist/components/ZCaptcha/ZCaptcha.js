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

var _Box = require('../Box/Box');

var _Box2 = _interopRequireDefault(_Box);

var _Sack = require('../Sack/Sack');

var _Sack2 = _interopRequireDefault(_Sack);

var _Button = require('../Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Checkbox = require('../Checkbox/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _ControlLabel = require('../ControlLabel/ControlLabel');

var _ControlLabel2 = _interopRequireDefault(_ControlLabel);

var _Popover = require('../Popover/Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _Link = require('../Link/Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  base: {}
};

var ZCaptcha = function ZCaptcha(props) {
  var zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map(function (item, index) {
      zcss.push(styles[item]);
      zcss.push(_constant.atomic[item]);
    });
  }

  var isRobot = false;

  var resetToken = function resetToken() {};

  var checkRobot = function checkRobot() {
    isRobot = true;
  };

  var checkVision = function checkVision() {};

  return _react2.default.createElement(
    _Box2.default,
    { zcss: ['bg_no'], style: { maxWidth: 400 } },
    !isRobot && _react2.default.createElement(_Checkbox2.default, { checked: isRobot, onClick: checkRobot }),
    isRobot && _react2.default.createElement(Icon, { icon: 'fa fa-search' }),
    _react2.default.createElement(
      _ControlLabel2.default,
      { zcss: ['f1r', 'dli'], onClick: function onClick() {
          return checkRobot();
        } },
      'I am not Robot'
    ),
    _react2.default.createElement(
      _Sack2.default,
      null,
      _react2.default.createElement(
        _Button2.default,
        { zcss: ['isLink'], onClick: resetToken },
        'refresh'
      ),
      _react2.default.createElement(
        _Link2.default,
        { to: 'http://account.zetgoo.com/privacy' },
        'privacy'
      ),
      _react2.default.createElement(
        _Link2.default,
        { to: 'http://account.zetgoo.com/term' },
        'term'
      )
    )
  );
};

ZCaptcha.defaultProps = {
  zcss: []
};

ZCaptcha.propTypes = {
  zcss: _propTypes2.default.array.isRequired
};

exports.default = (0, _radium2.default)(ZCaptcha);