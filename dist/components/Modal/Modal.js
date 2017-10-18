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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  base: {}
};

var Modal = function Modal(props) {
  var zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map(function (item, index) {
      zcss.push(styles[item]);
      zcss.push(_constant.atomic[item]);
    });
  }

  return _react2.default.createElement(
    'div',
    _extends({}, props, { style: [styles.base].concat(zcss)
    }),
    _react2.default.createElement(
      _Overlay2.default,
      { isOpen: props.isOpen, onClose: props.handleClose },
      props.children,
      _react2.default.createElement(
        'div',
        null,
        props.action && props.action.map(function (item, index) {
          return _react2.default.createElement(
            _Button2.default,
            item,
            item.label
          );
        })
      )
    )
  );
};

Modal.propTypes = {
  zcss: _propTypes2.default.array
};

exports.default = (0, _radium2.default)(Modal);