'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constant = require('../constant');

var _Overlay = require('../../components/Overlay/Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

var _Button = require('../../components/Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Sack = require('../../components/Sack/Sack');

var _Sack2 = _interopRequireDefault(_Sack);

var _ControlLabel = require('../../components/ControlLabel/ControlLabel');

var _ControlLabel2 = _interopRequireDefault(_ControlLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var styles = {
  base: {},
  modal: {
    padding: '1em'
  }
};

var Modal = function Modal(props) {
  var zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    zcss = props.zcss.map(function (item) {
      if (styles[item]) {
        return zcss.concat(styles[item]);
      }
      return zcss.concat(_constant.atomic[item]);
    });
  }

  var align = 'ta_l';
  if (props.alignAction === 'center') {
    align = 'ta_c';
  } else if (props.alignAction === 'center') {
    align = 'ta_r';
  }

  return _react2.default.createElement(
    'div',
    _extends({}, props, { style: [styles.base].concat(_toConsumableArray(zcss)) }),
    _react2.default.createElement(
      _Overlay2.default,
      { zFront: props.zFront, isCloseable: true },
      _react2.default.createElement(
        _Sack2.default,
        { zcss: ['pd1e'] },
        _react2.default.createElement(
          _Sack2.default,
          null,
          _react2.default.createElement(
            _ControlLabel2.default,
            { zcss: ['f2e'] },
            props.title
          )
        ),
        _react2.default.createElement(
          _Sack2.default,
          { zcss: [''] },
          props.children
        ),
        _react2.default.createElement(
          _Sack2.default,
          { zcss: [align] },
          props.action && props.action.map(function (item) {
            return _react2.default.createElement(
              _Button2.default,
              item,
              item.label
            );
          })
        )
      )
    )
  );
};

Modal.propTypes = {
  zcss: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  action: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  alignAction: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired,
  title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]).isRequired,
  isShow: _propTypes2.default.bool.isRequired,
  zFront: _propTypes2.default.node.isRequired
};

exports.default = (0, _radium2.default)(Modal);