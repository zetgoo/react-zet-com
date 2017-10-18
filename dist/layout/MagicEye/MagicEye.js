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

var _Image = require('../../components/Image/Image');

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  base: {}
};

var MagicEye = function MagicEye(props) {
  var zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map(function (item, index) {
      zcss.push(styles[item]);
      zcss.push(_constant.atomic[item]);
    });
  }

  var imgLink = 'data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAABQBQCdASoqABwAP/3+/3+/urWyMBVYA/A/iWIAAR7p/Y3etgh4KD8QqXEZj6waibITSIAA/cndnUz4/z4LEgByYUql75Cq/12W33KFIKQpc8L0Dt19C7NFXin0tKlxd70dzSF978msbuqLjDgAAA==';

  setTimeout(function () {
    imgLink = 'https://cdn-images-1.medium.com/max/1800/1*sg-uLNm73whmdOgKlrQdZA.jpeg';
  }, 2000);

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Image2.default, { zcss: ['' + (props.isFinished ? '' : 'isBlur')], width: 1000, ratio: 8, src: props.url,
      alt: 'Zetgoo', title: 'Zetgoo' }),
    _react2.default.createElement('div', { style: 'padding-bottom: 66.6%;' })
  );
};

MagicEye.propTypes = {
  zcss: _propTypes2.default.array
};

exports.default = (0, _radium2.default)(MagicEye);