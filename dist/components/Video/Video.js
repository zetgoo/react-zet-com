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
  base: {}
};

var Video = function Video(props) {
  var zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map(function (item, index) {
      zcss.push(styles[item]);
      zcss.push(_constant.atomic[item]);
    });
  }

  return _react2.default.createElement(
    'video',
    { controls: true, style: 'width:640px;height:360px;', poster: 'https://www.html5rocks.com/en/tutorials/video/basics/poster.png' },
    _react2.default.createElement('source', { src: 'https://www.html5rocks.com/en/tutorials/video/basics/devstories.webm',
      type: 'video/webm;codecs="vp8, vorbis"' }),
    _react2.default.createElement('source', { src: 'https://www.html5rocks.com/en/tutorials/video/basics/devstories.mp4',
      type: 'video/mp4;codecs="avc1.42E01E, mp4a.40.2"' }),
    _react2.default.createElement('track', { src: 'https://www.html5rocks.com/en/tutorials/video/basics/devstories-en.vtt', label: 'English subtitles',
      kind: 'subtitles', srclang: 'en', 'default': true })
  );
};

Video.propTypes = {
  zcss: _propTypes2.default.array
};

exports.default = (0, _radium2.default)(Video);