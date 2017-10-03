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
    position: 'fixed',
    right: '2.4rem',
    bottom: 0,
    left: '2.4rem',
    zIndex: 200,
    display: 'flex',
    alignItems: 'center',
    padding: '1.4rem 2.4rem',
    margin: '0 auto',
    marginTop: '1.4rem',
    color: '#fff',
    backgroundColor: '#212121',
    borderRadius: '.2rem',
    transition: 'all .35s cubic-bezier(.4,0,.2,1) .35s'
  }
};

var SnackBar = function SnackBar(props) {
  var zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map(function (item, index) {
      zcss.push(styles[item]);
      zcss.push(_constant.atomic[item]);
    });
  }

  if (!props.isShow) return null;

  return _react2.default.createElement(
    'div',
    {
      style: [styles.base].concat(zcss) },
    props.children
  );
};

SnackBar.propTypes = {
  zcss: _propTypes2.default.array
};

exports.default = (0, _radium2.default)(SnackBar);