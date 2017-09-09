"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactVirtualized = require("react-virtualized");

var _constant = require("../constant");

var _immutable = require("immutable");

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var STATUS_LOADING = 1;
var STATUS_LOADED = 2;

var InfiniteLoaderExample = function (_PureComponent) {
  _inherits(InfiniteLoaderExample, _PureComponent);

  // const contextTypes = {
  //   list: PropTypes.instanceOf(Immutable.List).isRequired
  // };

  function InfiniteLoaderExample(props) {
    _classCallCheck(this, InfiniteLoaderExample);

    var _this = _possibleConstructorReturn(this, (InfiniteLoaderExample.__proto__ || Object.getPrototypeOf(InfiniteLoaderExample)).call(this, props));

    _this.state = {
      loadedRowCount: 0,
      loadedRowsMap: {},
      loadingRowCount: 0
    };

    _this._timeoutIdMap = {};

    _this._clearData = _this._clearData.bind(_this);
    _this._isRowLoaded = _this._isRowLoaded.bind(_this);
    _this._loadMoreRows = _this._loadMoreRows.bind(_this);
    _this._rowRenderer = _this._rowRenderer.bind(_this);
    return _this;
  }

  _createClass(InfiniteLoaderExample, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      Object.keys(this._timeoutIdMap).forEach(function (timeoutId) {
        clearTimeout(timeoutId);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var list = this.context.list;
      var _state = this.state,
          loadedRowCount = _state.loadedRowCount,
          loadingRowCount = _state.loadingRowCount;


      return _react2.default.createElement(
        _reactVirtualized.InfiniteLoader,
        {
          isRowLoaded: this._isRowLoaded,
          loadMoreRows: this._loadMoreRows,
          rowCount: 20
        },
        function (_ref) {
          var onRowsRendered = _ref.onRowsRendered,
              registerChild = _ref.registerChild;
          return _react2.default.createElement(
            _reactVirtualized.AutoSizer,
            { disableHeight: true },
            function (_ref2) {
              var width = _ref2.width;
              return _react2.default.createElement(_reactVirtualized.List, {
                ref: registerChild,
                height: 200,
                onRowsRendered: onRowsRendered,
                rowCount: 20,
                rowHeight: 30,
                rowRenderer: _this2._rowRenderer,
                width: width
              });
            }
          );
        }
      );
    }
  }, {
    key: "_clearData",
    value: function _clearData() {
      this.setState({
        loadedRowCount: 0,
        loadedRowsMap: {},
        loadingRowCount: 0
      });
    }
  }, {
    key: "_isRowLoaded",
    value: function _isRowLoaded(_ref3) {
      var index = _ref3.index;
      var loadedRowsMap = this.state.loadedRowsMap;

      return !!loadedRowsMap[index]; // STATUS_LOADING or STATUS_LOADED
    }
  }, {
    key: "_loadMoreRows",
    value: function _loadMoreRows(_ref4) {
      var _this3 = this;

      var startIndex = _ref4.startIndex,
          stopIndex = _ref4.stopIndex;
      var _state2 = this.state,
          loadedRowsMap = _state2.loadedRowsMap,
          loadingRowCount = _state2.loadingRowCount;

      var increment = stopIndex - startIndex + 1;

      for (var i = startIndex; i <= stopIndex; i++) {
        loadedRowsMap[i] = STATUS_LOADING;
      }

      this.setState({
        loadingRowCount: loadingRowCount + increment
      });

      var timeoutId = setTimeout(function () {
        var _state3 = _this3.state,
            loadedRowCount = _state3.loadedRowCount,
            loadingRowCount = _state3.loadingRowCount;


        delete _this3._timeoutIdMap[timeoutId];

        for (var i = startIndex; i <= stopIndex; i++) {
          loadedRowsMap[i] = STATUS_LOADED;
        }

        _this3.setState({
          loadingRowCount: loadingRowCount - increment,
          loadedRowCount: loadedRowCount + increment
        });

        promiseResolver();
      }, 1000 + Math.round(Math.random() * 2000));

      this._timeoutIdMap[timeoutId] = true;

      var promiseResolver = void 0;

      return new Promise(function (resolve) {
        promiseResolver = resolve;
      });
    }
  }, {
    key: "_rowRenderer",
    value: function _rowRenderer(_ref5) {
      var index = _ref5.index,
          key = _ref5.key,
          style = _ref5.style;
      var list = this.context.list;
      var loadedRowsMap = this.state.loadedRowsMap;


      var row = 1;
      var content = void 0;

      if (loadedRowsMap[index] === STATUS_LOADED) {
        content = row.name;
      } else {
        content = _react2.default.createElement(
          "div",
          null,
          "Ballard"
        );
      }

      return _react2.default.createElement(
        "div",
        { key: key },
        content
      );
    }
  }]);

  return InfiniteLoaderExample;
}(_react.PureComponent);

exports.default = InfiniteLoaderExample;