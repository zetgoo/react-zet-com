'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _universalRouter = require('universal-router');

var _universalRouter2 = _interopRequireDefault(_universalRouter);

var _AppContainer = require('./components/AppContainer');

var _AppContainer2 = _interopRequireDefault(_AppContainer);

var _Button = require('./components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Link = require('./components/Link');

var _Link2 = _interopRequireDefault(_Link);

var _Input = require('./components/Input');

var _Input2 = _interopRequireDefault(_Input);

var _Checkbox = require('./components/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Radio = require('./components/Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var _Select = require('./components/Select');

var _Select2 = _interopRequireDefault(_Select);

var _Tag = require('./components/Tag');

var _Tag2 = _interopRequireDefault(_Tag);

var _Switch = require('./components/Switch');

var _Switch2 = _interopRequireDefault(_Switch);

var _Infinite = require('./components/Infinite');

var _Infinite2 = _interopRequireDefault(_Infinite);

var _Columns = require('./components/Columns');

var _Columns2 = _interopRequireDefault(_Columns);

var _Column = require('./components/Column');

var _Column2 = _interopRequireDefault(_Column);

var _Icon = require('./components/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Title = require('./components/Title');

var _Title2 = _interopRequireDefault(_Title);

var _SubTitle = require('./components/SubTitle');

var _SubTitle2 = _interopRequireDefault(_SubTitle);

var _ControlLabel = require('./components/ControlLabel');

var _ControlLabel2 = _interopRequireDefault(_ControlLabel);

var _Tabs = require('./components/Tabs');

var _NavToggle = require('./components/NavToggle');

var _NavToggle2 = _interopRequireDefault(_NavToggle);

var _TextField = require('./components/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _Notification = require('./components/Notification');

var _Notification2 = _interopRequireDefault(_Notification);

var _Form = require('./components/Form');

var _Form2 = _interopRequireDefault(_Form);

var _FormGroup = require('./components/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _Box = require('./components/Box');

var _Box2 = _interopRequireDefault(_Box);

var _Sack = require('./components/Sack');

var _Sack2 = _interopRequireDefault(_Sack);

var _Container = require('./components/Container');

var _Container2 = _interopRequireDefault(_Container);

var _Drawer = require('./components/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _SnackBar = require('./components/SnackBar');

var _SnackBar2 = _interopRequireDefault(_SnackBar);

var _Addons = require('./components/Addons');

var _Addons2 = _interopRequireDefault(_Addons);

var _Image = require('./components/Image');

var _Image2 = _interopRequireDefault(_Image);

var _Avatar = require('./components/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Modal = require('./components/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Popover = require('./components/Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _Tooltip = require('./components/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _Video = require('./components/Video');

var _Video2 = _interopRequireDefault(_Video);

var _ZCaptcha = require('./components/ZCaptcha');

var _ZCaptcha2 = _interopRequireDefault(_ZCaptcha);

var _reactDayPicker = require('react-day-picker');

var _reactDayPicker2 = _interopRequireDefault(_reactDayPicker);

var _victory = require('victory');

var _Header = require('./layout/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('./layout/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _LeftMenu = require('./layout/LeftMenu');

var _LeftMenu2 = _interopRequireDefault(_LeftMenu);

var _MagicEye = require('./layout/MagicEye');

var _MagicEye2 = _interopRequireDefault(_MagicEye);

require('./style.css');

var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var rowStyle = { margin: '5px 0' };
var boxStyle = {
  margin: '0 5px 5px 0',
  display: 'inline-flex'
};

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.getData = _this.getData.bind(_this);
    _this.showNotify = _this.showNotify.bind(_this);

    _this.state = {
      inputText: '',
      percent: 25,
      data: _this.getData(0),
      toggleActive: false,
      isLogined: false,
      formText: '',
      formEmail: '',
      formForceChecked: false,
      formForceChecked1: false,
      isSearching: false,
      url: 'data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAABQBQCdASoqABwAP/3+/3+/urWyMBVYA/A/iWIAAR7p/Y3etgh4KD8QqXEZj6waibITSIAA/cndnUz4/z4LEgByYUql75Cq/12W33KFIKQpc8L0Dt19C7NFXin0tKlxd70dzSF978msbuqLjDgAAA==',
      tabIndex: 2,
      openModal: false,
      popover: false,
      popoverTop: false,
      popoverRight: false,
      popoverBottom: false,
      popoverLeft: false,
      tooltip: false,
      tooltipTop: false,
      tooltipRight: false,
      tooltipBottom: false,
      tooltipLeft: false,
      notifications: [{ content: '', link: '/a' }, { content: '', link: '/b' }, { content: '', link: '/c' }, { content: '', link: '/d' }]
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var percent = 25;
      this.setStateInterval = window.setInterval(function () {
        percent += Math.random() * 25;
        percent = percent > 100 ? 0 : percent;
        _this2.setState({
          percent: percent,
          data: _this2.getData(percent)
        });
      }, 2000);
      setTimeout(function () {
        return _this2.setState({
          url: 'https://cdn-images-1.medium.com/max/1800/1*sg-uLNm73whmdOgKlrQdZA.jpeg'
        });
      }, 2000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.clearInterval(this.setStateInterval);
    }
  }, {
    key: 'getData',
    value: function getData(percent) {
      return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
    }
  }, {
    key: 'showNotify',
    value: function showNotify() {
      console.log('bell clicked!');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        _AppContainer2.default,
        null,
        _react2.default.createElement(
          _Container2.default,
          null,
          _react2.default.createElement(_Header2.default, {
            isActive: this.state.toggleActive,
            userLogined: {
              userName: 'Ballard',
              avatar: 'https://avatars1.githubusercontent.com/u/6657580?v=4&s=80'
            },
            isSearching: this.state.isSearching,
            search: function search() {
              return _this3.setState({ isSearching: !_this3.state.isSearching });
            },
            toogleClick: function toogleClick() {
              return _this3.setState({ toggleActive: !_this3.state.toggleActive });
            },
            zBackUser: _react2.default.createElement(
              _Sack2.default,
              { zcss: ['mg1e', 'ta_l'], style: { width: 220 } },
              _react2.default.createElement(
                _ControlLabel2.default,
                { zcss: ['f1e'] },
                'Ballard'
              ),
              _react2.default.createElement(
                _Link2.default,
                { href: 'https://github.com' },
                'github'
              ),
              _react2.default.createElement(
                _Link2.default,
                { to: 'profile' },
                _react2.default.createElement(_Icon2.default, { zcss: [''], icon: 'fa fa-user', text: 'Setting' })
              ),
              _react2.default.createElement(
                _Sack2.default,
                null,
                _react2.default.createElement(
                  _Button2.default,
                  {
                    zcss: ['danger'],
                    onClick: function onClick() {
                      return console.log('logout');
                    }
                  },
                  'Logout'
                )
              )
            ),
            menu: [{
              icon: 'fa fa-home',
              text: 'Create Project',
              to: '/project/create',
              zcss: ['']
            }, {
              icon: 'fa fa-user-circle',
              text: 'Document',
              to: '/document',
              zcss: ['']
            }],
            menuNoneUser: [{
              icon: 'fa fa-home',
              text: 'Register',
              to: '/register',
              zcss: ['cl_success']
            }, {
              icon: 'fa fa-user-circle',
              text: 'Login',
              to: '/login',
              zcss: ['cl_success']
            }],
            iconMenuUser: [
            // {
            //   type: 'link',
            //   icon: 'fa fa-plus',
            //   text: 'Create Project',
            //   link: '/project/create',
            //   zcss: ['f.8125r'],
            // },
            {
              type: 'action',
              icon: 'fa fa-plus',
              text: '',
              onClick: function onClick() {
                return console.log('Zetgoo');
              },
              zcss: ['f.8125r']
            }, {
              type: 'popover',
              icon: 'fa fa-bell',
              info: _react2.default.createElement(
                _Sack2.default,
                {
                  zcss: ['ps_a', 'bg_success', 'cl_no', 'f.5e'],
                  style: { top: 18, left: 5, padding: '0 1px' }
                },
                '777'
              ),
              text: '',
              zcss: ['f.8125r'],
              zBack: _react2.default.createElement(
                _Sack2.default,
                { zcss: ['mg1e', 'ta_l'], style: { width: 220 } },
                _react2.default.createElement(
                  _Sack2.default,
                  { zcss: ['dp_ib'] },
                  _react2.default.createElement(
                    _ControlLabel2.default,
                    { zcss: ['f1e', 'dp_ib'] },
                    'Notifications'
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    { zcss: ['isLink', 'dp_ib', 'fr'] },
                    'Mark all as read'
                  )
                ),
                _react2.default.createElement(
                  _Sack2.default,
                  null,
                  this.state.notifications.map(function (item) {
                    return _react2.default.createElement(
                      _Link2.default,
                      { to: item.link, zcss: ['dp_b'] },
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                    );
                  })
                ),
                _react2.default.createElement(
                  _Sack2.default,
                  null,
                  _react2.default.createElement(
                    _Link2.default,
                    { to: '/notifications' },
                    _react2.default.createElement(
                      _Button2.default,
                      { zcss: ['isLink'] },
                      'see all'
                    )
                  )
                )
              )
            }]
          })
        ),
        _react2.default.createElement(
          _Container2.default,
          null,
          _react2.default.createElement(
            _Columns2.default,
            { xLargeCol: 6, smallCol: 1, gutter: '8px' },
            _react2.default.createElement(
              _Column2.default,
              { zcss: [''], xLargeCell: 2, smallCell: 1 },
              _react2.default.createElement(_LeftMenu2.default, {
                data: [{
                  groupLabel: 'Main',
                  childMenu: [{
                    icon: 'aws.fa-user-circle-o',
                    label: '1',
                    rightActived: 'aws.fa-user-circle-o',
                    rightNoAcitved: 'aws.fa-user-circle-o',
                    isActived: true,
                    type: 'link',
                    uri: 'http://vision.zetgoo.com/face/detect/2017',
                    childMenu: [{
                      icon: 'aws.fa-user-circle-o',
                      label: '1.1',
                      rightActived: 'aws.fa-user-circle-o',
                      rightNoAcitved: 'aws.fa-user-circle-o',
                      isActived: true,
                      type: 'link',
                      uri: 'http://vision.zetgoo.com/face/detect/2017',
                      childMenu: [{
                        icon: 'aws.fa-user-circle-o',
                        label: '1.1.1',
                        rightActived: 'aws.fa-user-circle-o',
                        rightNoAcitved: 'aws.fa-user-circle-o',
                        isActived: true,
                        type: 'link',
                        uri: 'http://vision.zetgoo.com/face/detect/2017'
                      }, {
                        icon: 'aws.fa-user-circle-o',
                        label: '1.1.2',
                        rightActived: 'aws.fa-user-circle-o',
                        rightNoAcitved: 'aws.fa-user-circle-o',
                        isActived: true,
                        type: 'link',
                        uri: 'http://vision.zetgoo.com/face/detect/2017'
                      }]
                    }, {
                      icon: 'aws.fa-user-circle-o',
                      label: '1.2',
                      rightActived: 'aws.fa-user-circle-o',
                      rightNoAcitved: 'aws.fa-user-circle-o',
                      isActived: true,
                      type: 'link',
                      uri: 'http://vision.zetgoo.com/face/detect/2017',
                      childMenu: [{
                        icon: 'aws.fa-user-circle-o',
                        label: '1.2.1',
                        rightActived: 'aws.fa-user-circle-o',
                        rightNoAcitved: 'aws.fa-user-circle-o',
                        isActived: true,
                        type: 'link',
                        uri: 'http://vision.zetgoo.com/face/detect/2017'
                      }]
                    }]
                  }]
                }]
              })
            ),
            _react2.default.createElement(
              _Column2.default,
              { zcss: [''], xLargeCell: 4, smallCell: 1 },
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(
                  'div',
                  { style: boxStyle },
                  _react2.default.createElement(
                    _Button2.default,
                    { zcss: [''] },
                    'Nomal'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { style: boxStyle },
                  _react2.default.createElement(
                    _Button2.default,
                    { zcss: ['white'] },
                    'white'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { style: boxStyle },
                  _react2.default.createElement(
                    _Button2.default,
                    { zcss: ['light'] },
                    'light'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { style: boxStyle },
                  _react2.default.createElement(
                    _Button2.default,
                    { zcss: ['black'] },
                    'black'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { style: boxStyle },
                  _react2.default.createElement(
                    _Button2.default,
                    { zcss: ['isLink'] },
                    'Link'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { style: boxStyle },
                  _react2.default.createElement(
                    _Button2.default,
                    { zcss: ['primary'] },
                    'primary'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { style: boxStyle },
                  _react2.default.createElement(
                    _Button2.default,
                    { zcss: ['info'] },
                    'info'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { style: boxStyle },
                  _react2.default.createElement(
                    _Button2.default,
                    { zcss: ['success'] },
                    'success'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { style: boxStyle },
                  _react2.default.createElement(
                    _Button2.default,
                    { zcss: ['warning'] },
                    'warning'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { style: boxStyle },
                  _react2.default.createElement(
                    _Button2.default,
                    { zcss: ['danger'] },
                    'danger'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { style: boxStyle },
                  _react2.default.createElement(
                    _Button2.default,
                    { zcss: ['disable'] },
                    'disable'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { style: boxStyle },
                  _react2.default.createElement(
                    _Button2.default,
                    { zcss: ['cancel'] },
                    'cancel'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { style: boxStyle },
                  _react2.default.createElement(
                    _Button2.default,
                    { zcss: ['isLoading'] },
                    'loading'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(
                  _Drawer2.default,
                  {
                    zFront: _react2.default.createElement(
                      _Button2.default,
                      { zcss: ['primary'] },
                      'Drawer Click!'
                    )
                  },
                  _react2.default.createElement(_LeftMenu2.default, null)
                )
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(_SnackBar2.default, { isShow: this.state.snackBarIsShow, timeout: 5000 }),
                _react2.default.createElement(
                  _Button2.default,
                  {
                    zcss: ['primary'],
                    onClick: function onClick() {
                      return _this3.setState({
                        snackBarIsShow: !_this3.state.snackBarIsShow
                      });
                    }
                  },
                  'SnackBar Click!'
                )
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(
                  'div',
                  { style: _extends({}, boxStyle, { position: 'relative' }) },
                  _react2.default.createElement(
                    _Popover2.default,
                    {
                      zcss: [''],
                      isShow: this.state.popover,
                      zFront: _react2.default.createElement(
                        _Button2.default,
                        { zcss: [''] },
                        'Popover Click!'
                      )
                    },
                    _react2.default.createElement(
                      'h3',
                      null,
                      'Zetgoo'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { style: boxStyle },
                  _react2.default.createElement(
                    _Popover2.default,
                    {
                      zcss: ['isTop'],
                      isShow: this.state.popoverTop,
                      zFront: _react2.default.createElement(
                        _Button2.default,
                        {
                          zcss: [''],
                          onClick: function onClick() {
                            return _this3.setState({ popover: !_this3.state.popover });
                          }
                        },
                        'Top Click!'
                      )
                    },
                    _react2.default.createElement(
                      'div',
                      null,
                      'Zetgoo jdlkfe dklje fkdjlsei dlkfjsl'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { style: boxStyle },
                  _react2.default.createElement(
                    _Popover2.default,
                    {
                      zcss: ['isRight'],
                      isShow: this.state.popoverRight,
                      timeout: 5000,
                      zFront: _react2.default.createElement(
                        _Button2.default,
                        {
                          zcss: [''],
                          onClick: function onClick() {
                            return _this3.setState({ popover: !_this3.state.popover });
                          }
                        },
                        'Right Click!'
                      )
                    },
                    _react2.default.createElement(
                      'h3',
                      null,
                      'Zetgoo'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { style: boxStyle },
                  _react2.default.createElement(
                    _Popover2.default,
                    {
                      zcss: ['isBottom'],
                      isShow: this.state.popoverBottom,
                      timeout: 5000,
                      zFront: _react2.default.createElement(
                        _Button2.default,
                        {
                          zcss: [''],
                          onClick: function onClick() {
                            return _this3.setState({ popover: !_this3.state.popover });
                          }
                        },
                        'Bottom Click!'
                      )
                    },
                    _react2.default.createElement(
                      'h3',
                      null,
                      'Zetgoo'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { style: boxStyle },
                  _react2.default.createElement(
                    _Popover2.default,
                    {
                      zcss: ['isLeft'],
                      isShow: this.state.popoverLeft,
                      timeout: 5000,
                      onClose: function onClose() {
                        return _this3.setState({ popoverLeft: false });
                      },
                      zFront: _react2.default.createElement(
                        _Button2.default,
                        {
                          zcss: [''],
                          onClick: function onClick() {
                            return _this3.setState({ popover: !_this3.state.popover });
                          }
                        },
                        'Left Click!'
                      )
                    },
                    _react2.default.createElement(
                      'h3',
                      null,
                      'Zetgoo'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(
                  'div',
                  { style: boxStyle },
                  _react2.default.createElement(
                    _Tooltip2.default,
                    {
                      zcss: [''],
                      isShow: this.state.popoverLeft,
                      timeout: 5000,
                      onClose: function onClose() {
                        return _this3.setState({ popoverLeft: false });
                      },
                      zFront: _react2.default.createElement(
                        _Button2.default,
                        { zcss: [''] },
                        'Tooltip Hover!'
                      )
                    },
                    _react2.default.createElement(
                      'h3',
                      null,
                      'Zetgoo'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { style: boxStyle },
                  _react2.default.createElement(
                    _Tooltip2.default,
                    {
                      zcss: ['isTop'],
                      isShow: this.state.popoverLeft,
                      timeout: 5000,
                      onClose: function onClose() {
                        return _this3.setState({ popoverLeft: false });
                      },
                      zFront: _react2.default.createElement(
                        _Button2.default,
                        { zcss: [''] },
                        'Tooltip Top Hover!'
                      )
                    },
                    _react2.default.createElement(
                      'h3',
                      null,
                      'Zetgoo'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { style: boxStyle },
                  _react2.default.createElement(
                    _Tooltip2.default,
                    {
                      zcss: ['isRight'],
                      isShow: this.state.popoverLeft,
                      timeout: 5000,
                      onClose: function onClose() {
                        return _this3.setState({ popoverLeft: false });
                      },
                      zFront: _react2.default.createElement(
                        _Button2.default,
                        { zcss: [''] },
                        'Tooltip Right Hover!'
                      )
                    },
                    _react2.default.createElement(
                      'h3',
                      null,
                      'Zetgoo'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { style: boxStyle },
                  _react2.default.createElement(
                    _Tooltip2.default,
                    {
                      zcss: ['isBottom'],
                      isShow: this.state.popoverLeft,
                      timeout: 5000,
                      onClose: function onClose() {
                        return _this3.setState({ popoverLeft: false });
                      },
                      zFront: _react2.default.createElement(
                        _Button2.default,
                        { zcss: [''] },
                        'Tooltip Bottom Hover!'
                      )
                    },
                    _react2.default.createElement(
                      'h3',
                      null,
                      'Zetgoo'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { style: boxStyle },
                  _react2.default.createElement(
                    _Tooltip2.default,
                    {
                      zcss: ['isLeft'],
                      isShow: this.state.popoverLeft,
                      timeout: 5000,
                      onClose: function onClose() {
                        return _this3.setState({ popoverLeft: false });
                      },
                      zFront: _react2.default.createElement(
                        _Button2.default,
                        { zcss: [''] },
                        'Tooltip Left Hover!'
                      )
                    },
                    _react2.default.createElement(
                      'h3',
                      null,
                      'Zetgoo'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(
                  _Modal2.default,
                  {
                    alignAction: 'center',
                    action: [{
                      label: 'Save',
                      zcss: ['success'],
                      onClick: function onClick() {
                        return _this3.console('zetgoo');
                      }
                    }],
                    zFront: _react2.default.createElement(
                      _Button2.default,
                      { zcss: ['success'] },
                      'Modal Click!'
                    ),
                    title: 'Welcome to zetgoo'
                  },
                  _react2.default.createElement(
                    'h2',
                    null,
                    'We are king'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(_Input2.default, {
                  zcss: [],
                  placeholder: 'zetgoo',
                  value: this.state.inputText,
                  onChange: function onChange(event, text) {
                    return _this3.setState({ inputText: text });
                  }
                })
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(_Input2.default, {
                  zcss: ['readOnly'],
                  placeholder: 'read only',
                  readOnly: true,
                  value: this.state.inputText,
                  onChange: function onChange(event, text) {
                    return _this3.setState({ inputText: text });
                  }
                })
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(_Input2.default, {
                  zcss: ['disabled'],
                  placeholder: 'disable',
                  value: this.state.inputText,
                  onChange: function onChange(event, text) {
                    return _this3.setState({ inputText: text });
                  },
                  disabled: true
                })
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(_Input2.default, {
                  zcss: ['error'],
                  placeholder: 'input error',
                  value: this.state.inputText,
                  onChange: function onChange(event, text) {
                    return _this3.setState({ inputText: text });
                  }
                })
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(_TextField2.default, {
                  label: 'Username',
                  errors: [{ text: 'it is require' }, { text: 'More than 6 characters' }],
                  valid: false,
                  help: 'More than 6 characters',
                  placeholder: 'textfield error',
                  type: 'text'
                })
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(_TextField2.default, {
                  label: 'Password',
                  placeholder: 'password',
                  valid: true,
                  value: 'Zetgoo',
                  help: 'More than 6 characters',
                  type: 'password'
                })
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(_Checkbox2.default, { zcss: [''], label: 'zetgoo', name: 'zetgooCheckbox' }),
                _react2.default.createElement(_Checkbox2.default, { zcss: [''], label: 'zetgoo', name: 'zetgooCheckbox' }),
                _react2.default.createElement(_Checkbox2.default, { zcss: [''], label: 'zetgoo', name: 'zetgooCheckbox' }),
                _react2.default.createElement(_Checkbox2.default, { zcss: [''], label: 'zetgoo', name: 'zetgooCheckbox' }),
                _react2.default.createElement(_Checkbox2.default, { zcss: [''], label: 'zetgoo', name: 'zetgooCheckbox' })
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(_Radio2.default, { zcss: [''], label: 'zetgoo', name: 'zetgooRadio' }),
                _react2.default.createElement(_Radio2.default, { zcss: [''], label: 'zetgoo', name: 'zetgooRadio' }),
                _react2.default.createElement(_Radio2.default, { zcss: [''], label: 'zetgoo', name: 'zetgooRadio' }),
                _react2.default.createElement(_Radio2.default, { zcss: [''], label: 'zetgoo', name: 'zetgooRadio' }),
                _react2.default.createElement(_Radio2.default, { zcss: [''], label: 'zetgoo', name: 'zetgooRadio' })
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(_Video2.default, null)
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(_ZCaptcha2.default, null)
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(
                  _Tabs.Tabs,
                  {
                    index: this.state.tabIndex,
                    onChange: function onChange(index) {
                      return _this3.setState({ tabIndex: index });
                    }
                  },
                  _react2.default.createElement(
                    _Tabs.Tab,
                    { zcss: [''], label: 'Primary' },
                    _react2.default.createElement(
                      'h2',
                      null,
                      'Primary content'
                    )
                  ),
                  _react2.default.createElement(
                    _Tabs.Tab,
                    {
                      zcss: [''],
                      label: 'Secondary',
                      onActive: this.handleActive
                    },
                    _react2.default.createElement(
                      'h2',
                      null,
                      'Secondary content'
                    )
                  ),
                  _react2.default.createElement(
                    _Tabs.Tab,
                    { zcss: [''], label: 'Third', disabled: true },
                    _react2.default.createElement(
                      'h2',
                      null,
                      'Disabled content'
                    )
                  ),
                  _react2.default.createElement(
                    _Tabs.Tab,
                    { zcss: [''], label: 'Fourth' },
                    _react2.default.createElement(
                      'h2',
                      null,
                      'Fourth content hidden'
                    )
                  ),
                  _react2.default.createElement(
                    _Tabs.Tab,
                    { zcss: [''], label: 'Fifth' },
                    _react2.default.createElement(
                      'h2',
                      null,
                      'Fifth content'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(_Select2.default, {
                  options: [{ label: 'bl', value: 1 }, { label: 'yl', value: 2 }],
                  zcss: [''],
                  value: this.state.selectedValue ? this.state.selectedValue : 1,
                  onChange: function onChange(value) {
                    return _this3.setState({ selectedValue: value });
                  }
                })
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(
                  'div',
                  { style: boxStyle },
                  _react2.default.createElement(_Tag2.default, {
                    zcss: ['isSmall', 'success'],
                    text: 'zetgoo',
                    icon: 'fa fa-remove',
                    onClick: function onClick() {
                      return console.log('trainee');
                    }
                  })
                ),
                _react2.default.createElement(
                  'div',
                  { style: boxStyle },
                  _react2.default.createElement(_Tag2.default, {
                    zcss: ['isMedium', 'primary'],
                    text: 'zetgoo',
                    icon: 'fa fa-remove',
                    onClick: function onClick() {
                      return console.log('trainee');
                    }
                  })
                ),
                _react2.default.createElement(
                  'div',
                  { style: boxStyle },
                  _react2.default.createElement(_Tag2.default, {
                    zcss: ['isLarge', 'cancel'],
                    text: 'zetgoo',
                    icon: 'fa fa-remove',
                    onClick: function onClick() {
                      return console.log('trainee');
                    }
                  })
                )
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(_Switch2.default, null)
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(
                  _Columns2.default,
                  { xLargeCol: 6, smallCol: 1, gutter: '10px' },
                  _react2.default.createElement(
                    _Column2.default,
                    { zcss: ['bg_success'], xLargeCell: 2, smallCell: 1 },
                    'First column'
                  ),
                  _react2.default.createElement(
                    _Column2.default,
                    { zcss: ['bg_danger'], xLargeCell: 2, smallCell: 1 },
                    'Second column'
                  ),
                  _react2.default.createElement(
                    _Column2.default,
                    { zcss: ['bg_primary'], xLargeCell: 2, smallCell: 1 },
                    'Third column'
                  ),
                  _react2.default.createElement(
                    _Column2.default,
                    { zcss: ['bg_primary'], xLargeCell: 2, smallCell: 1 },
                    'Third column'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(_Icon2.default, { zcss: ['cl_primary'], icon: 'fa fa-home', text: 'zetgoo' }),
                _react2.default.createElement(_Icon2.default, { zcss: ['cl_success'], icon: 'fa fa-check' }),
                _react2.default.createElement(_Icon2.default, { zcss: ['cl_success'], icon: 'fa fa-check-circle' }),
                _react2.default.createElement(_Icon2.default, { zcss: ['cl_danger'], icon: 'fa fa-exclamation-circle' })
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(_Avatar2.default, {
                  image: 'https://placeimg.com/80/80/animals',
                  zcss: ['isCircle']
                }),
                _react2.default.createElement(_Avatar2.default, { icon: 'fa fa-play-circle-o', zcss: ['isCircle'] }),
                _react2.default.createElement(_Avatar2.default, { text: 'BL', zcss: ['isCircle'] }),
                _react2.default.createElement(_Avatar2.default, { src: 'https://placeimg.com/80/80/animals', zcss: [] }),
                _react2.default.createElement(_Avatar2.default, { icon: 'fa fa-play-circle-o', zcss: [] }),
                _react2.default.createElement(_Avatar2.default, { text: 'BL', zcss: [] })
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(
                  'div',
                  { style: boxStyle },
                  _react2.default.createElement(
                    _Title2.default,
                    { zcss: ['is1'] },
                    'Title 1'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { style: boxStyle },
                  _react2.default.createElement(
                    _Title2.default,
                    { zcss: ['is2'] },
                    'Title 2'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { style: boxStyle },
                  _react2.default.createElement(
                    _Title2.default,
                    { zcss: ['is3'] },
                    'Title 3'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { style: boxStyle },
                  _react2.default.createElement(
                    _Title2.default,
                    { zcss: ['is4'] },
                    'Title 4'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { style: boxStyle },
                  _react2.default.createElement(
                    _Title2.default,
                    { zcss: ['is5'] },
                    'Title 5'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { style: boxStyle },
                  _react2.default.createElement(
                    _Title2.default,
                    { zcss: ['is6'] },
                    'Title 6'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(
                  'div',
                  { style: boxStyle },
                  _react2.default.createElement(
                    _SubTitle2.default,
                    { zcss: ['is1'] },
                    'SubTitle 1'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { style: boxStyle },
                  _react2.default.createElement(
                    _SubTitle2.default,
                    { zcss: ['is2'] },
                    'SubTitle 2'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { style: boxStyle },
                  _react2.default.createElement(
                    _SubTitle2.default,
                    { zcss: ['is3'] },
                    'SubTitle 3'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { style: boxStyle },
                  _react2.default.createElement(
                    _SubTitle2.default,
                    { zcss: ['is4'] },
                    'SubTitle 4'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { style: boxStyle },
                  _react2.default.createElement(
                    _SubTitle2.default,
                    { zcss: ['is5'] },
                    'SubTitle 5'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { style: boxStyle },
                  _react2.default.createElement(
                    _SubTitle2.default,
                    { zcss: ['is6'] },
                    'SubTitle 6'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(
                  'div',
                  { style: boxStyle },
                  _react2.default.createElement(
                    _ControlLabel2.default,
                    { zcss: ['f1e'] },
                    'ControlLabel'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { style: boxStyle },
                  _react2.default.createElement(
                    _ControlLabel2.default,
                    { zcss: ['f2e'] },
                    'ControlLabel'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { style: boxStyle },
                  _react2.default.createElement(
                    _ControlLabel2.default,
                    { zcss: ['f3e'] },
                    'ControlLabel'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(
                  _Notification2.default,
                  {
                    zcss: ['bg_danger'],
                    enableCloseButton: true,
                    closeButtonProps: { onClick: function onClick() {
                        return console.log('clicked');
                      } }
                  },
                  'lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'
                )
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(
                  _Columns2.default,
                  { xLargeCol: 6, smallCol: 1, gutter: '10px' },
                  _react2.default.createElement(
                    _Column2.default,
                    { zcss: [''], xLargeCell: 3, smallCell: 1 },
                    _react2.default.createElement(
                      _Addons2.default,
                      { hasAddonsRight: true },
                      _react2.default.createElement(
                        _Button2.default,
                        { zcss: ['primary', 'bd_rTR_0', 'bd_rBR_0'] },
                        'Transfer'
                      ),
                      _react2.default.createElement(_Input2.default, {
                        zcss: ['bd_rTL_0', 'bd_rBL_0'],
                        placeholder: 'Amount of money'
                      })
                    )
                  ),
                  _react2.default.createElement(
                    _Column2.default,
                    { zcss: [''], xLargeCell: 3, smallCell: 1 },
                    _react2.default.createElement(
                      _Addons2.default,
                      { hasAddonsRight: true },
                      _react2.default.createElement(_Input2.default, {
                        zcss: ['bd_rTR_0', 'bd_rBR_0'],
                        placeholder: 'Amount of money'
                      }),
                      _react2.default.createElement(
                        _Button2.default,
                        { zcss: ['light', 'bd_rTL_0', 'bd_rBL_0'] },
                        'Transfer'
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(
                  _Form2.default,
                  {
                    schema: {
                      username: {
                        type: 'text',
                        maxLength: 20,
                        minLength: 0,
                        isRequire: true,
                        message: {
                          isRequire: 'Username is require',
                          length: 'Length of Username between 0 and 20'
                        }
                      },
                      email: {
                        type: 'email',
                        maxLength: 20,
                        minLength: 0,
                        isRequire: true,
                        message: {
                          isRequire: 'Email is require',
                          length: 'Length of Email between 0 and 20'
                        }
                      }
                    },
                    onSubmit: function onSubmit() {
                      return console.log('form submit');
                    },
                    onReset: function onReset() {
                      return console.log('form reset');
                    }
                  },
                  _react2.default.createElement(
                    _FormGroup2.default,
                    null,
                    _react2.default.createElement(
                      _Columns2.default,
                      { xLargeCol: 6, smallCol: 1, gutter: '10px' },
                      _react2.default.createElement(
                        _Column2.default,
                        { zcss: [''], xLargeCell: 3, smallCell: 1 },
                        _react2.default.createElement(_TextField2.default, {
                          name: 'username',
                          label: 'Username',
                          errors: [],
                          valid: false,
                          help: 'More than 6 characters',
                          placeholder: 'username',
                          type: 'text',
                          value: this.state.formText,
                          onChange: function onChange(e) {
                            return _this3.setState({ formText: e.target.value });
                          }
                        })
                      ),
                      _react2.default.createElement(
                        _Column2.default,
                        { zcss: [''], xLargeCell: 3, smallCell: 1 },
                        _react2.default.createElement(_TextField2.default, {
                          name: 'username',
                          label: 'Username',
                          errors: [],
                          valid: false,
                          help: 'More than 6 characters',
                          placeholder: 'username',
                          type: 'text',
                          value: this.state.formText,
                          onChange: function onChange(e) {
                            return _this3.setState({ formText: e.target.value });
                          }
                        })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _Columns2.default,
                    { xLargeCol: 6, smallCol: 1, gutter: '10px' },
                    _react2.default.createElement(
                      _Column2.default,
                      { zcss: [''], xLargeCell: 3, smallCell: 1 },
                      _react2.default.createElement(
                        _FormGroup2.default,
                        null,
                        _react2.default.createElement(_TextField2.default, {
                          name: 'email',
                          label: 'Username',
                          errors: [],
                          valid: false,
                          help: 'More than 6 characters',
                          placeholder: 'username',
                          type: 'text',
                          value: this.state.formEmail,
                          onChange: function onChange(e) {
                            return _this3.setState({ formEmail: e.target.value });
                          }
                        }),
                        _react2.default.createElement(_TextField2.default, {
                          name: 'email',
                          label: 'Username',
                          errors: [],
                          valid: false,
                          help: 'More than 6 characters',
                          placeholder: 'username',
                          type: 'text',
                          value: this.state.formEmail,
                          onChange: function onChange(e) {
                            return _this3.setState({ formEmail: e.target.value });
                          }
                        })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _Columns2.default,
                    { xLargeCol: 6, smallCol: 1, gutter: '10px' },
                    _react2.default.createElement(
                      _Column2.default,
                      { zcss: [''], xLargeCell: 6, smallCell: 1 },
                      _react2.default.createElement(
                        _FormGroup2.default,
                        null,
                        _react2.default.createElement(_Checkbox2.default, {
                          zcss: [''],
                          isForce: true,
                          checked: this.state.formForceChecked1,
                          label: 'I accept to terms',
                          onClick: function onClick() {
                            return _this3.setState({
                              formForceChecked1: !_this3.state.formForceChecked1
                            });
                          }
                        })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _Button2.default,
                    { zcss: ['success'], type: 'submit' },
                    'Submit'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(
                  _Box2.default,
                  { zcss: ['bg_primary'] },
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.'
                )
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(_Image2.default, {
                  zcss: [],
                  src: 'http://placehold.it/480x480',
                  alt: 'Zetgoo',
                  title: 'Zetgoo',
                  width: 16,
                  ratio: 1
                })
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(_Image2.default, {
                  zcss: [],
                  src: 'http://placehold.it/480x480',
                  alt: 'Zetgoo',
                  title: 'Zetgoo',
                  width: 24,
                  ratio: 1
                })
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(_Image2.default, {
                  zcss: [],
                  src: 'http://placehold.it/480x480',
                  alt: 'Zetgoo',
                  title: 'Zetgoo',
                  width: 32,
                  ratio: 1
                })
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(_Image2.default, {
                  zcss: [],
                  src: 'http://placehold.it/480x480',
                  alt: 'Zetgoo',
                  title: 'Zetgoo',
                  width: 48,
                  ratio: 1
                })
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(_Image2.default, {
                  zcss: [],
                  src: 'http://placehold.it/480x480',
                  alt: 'Zetgoo',
                  title: 'Zetgoo',
                  width: 64,
                  ratio: 1
                })
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(_Image2.default, {
                  zcss: [],
                  src: 'http://placehold.it/480x480',
                  alt: 'Zetgoo',
                  title: 'Zetgoo',
                  width: 96,
                  ratio: 1
                })
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(_Image2.default, {
                  zcss: [],
                  src: 'http://placehold.it/480x480',
                  alt: 'Zetgoo',
                  title: 'Zetgoo',
                  width: 128,
                  ratio: 1
                })
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(_Image2.default, {
                  zcss: [],
                  src: 'http://placehold.it/480x480',
                  alt: 'Zetgoo',
                  title: 'Zetgoo',
                  width: 256,
                  ratio: 1
                })
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(_Image2.default, {
                  zcss: [],
                  src: 'http://placehold.it/480x480',
                  alt: 'Zetgoo',
                  title: 'Zetgoo',
                  width: 320,
                  ratio: 1
                })
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(_Image2.default, {
                  zcss: [],
                  src: 'http://placehold.it/480x480',
                  alt: 'Zetgoo',
                  title: 'Zetgoo',
                  width: 480,
                  ratio: 1
                })
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(_Image2.default, {
                  zcss: ['isCircle'],
                  src: 'http://placehold.it/480x480',
                  alt: 'Zetgoo',
                  title: 'Zetgoo',
                  width: 480,
                  ratio: 1
                })
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(_Image2.default, {
                  zcss: [],
                  src: 'http://placehold.it/480x480',
                  alt: 'Zetgoo',
                  title: 'Zetgoo',
                  width: 480,
                  ratio: 4 / 3
                })
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(_Image2.default, {
                  zcss: [],
                  src: 'http://placehold.it/480x480',
                  alt: 'Zetgoo',
                  title: 'Zetgoo',
                  width: 480,
                  ratio: 3 / 2
                })
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(_Image2.default, {
                  zcss: [],
                  src: 'http://placehold.it/480x480',
                  alt: 'Zetgoo',
                  title: 'Zetgoo',
                  width: 480,
                  ratio: 16 / 9
                })
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(_Image2.default, {
                  zcss: [],
                  src: 'http://placehold.it/480x480',
                  alt: 'Zetgoo',
                  title: 'Zetgoo',
                  width: 480,
                  ratio: 2
                })
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(_reactDayPicker2.default, { onDayClick: function onDayClick(day) {
                    return alert(day);
                  } })
              ),
              _react2.default.createElement(
                'div',
                { style: rowStyle },
                _react2.default.createElement(
                  _Columns2.default,
                  { xLargeCol: 4, largeCol: 3, mediumCol: 2, smallCol: 2 },
                  _react2.default.createElement(
                    _Column2.default,
                    {
                      xLargeCell: 1,
                      largeCell: 1,
                      mediumCell: 1,
                      smallCell: 1
                    },
                    _react2.default.createElement(
                      _victory.VictoryChart,
                      {
                        style: {
                          parent: { border: '1px solid #ccc', margin: '2%' }
                        },
                        domainPadding: { x: 30, y: 30 },
                        height: 600,
                        width: 600,
                        events: [{
                          childName: 'bar',
                          target: 'data',
                          eventHandlers: {
                            onClick: function onClick() {
                              return [{
                                target: 'labels',
                                mutation: function mutation() {
                                  return { text: 'o shit' };
                                }
                              }, {
                                childName: 'line',
                                target: 'data',
                                mutation: function mutation() {
                                  return { style: { stroke: 'lime' } };
                                }
                              }, {
                                childName: 'line',
                                target: 'labels',
                                mutation: function mutation() {
                                  return {
                                    style: { fill: 'green' },
                                    text: 'waddup'
                                  };
                                }
                              }];
                            }
                          }
                        }]
                      },
                      _react2.default.createElement(_victory.VictoryBar, {
                        name: 'bar',
                        style: { data: { width: 15, fill: 'green' } },
                        data: [{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }, { x: 4, y: 2 }, { x: 5, y: 1 }, { x: 6, y: 2 }, { x: 7, y: 3 }, { x: 8, y: 2 }, { x: 9, y: 1 }, { x: 10, y: 2 }, { x: 11, y: 3 }, { x: 12, y: 2 }, { x: 13, y: 1 }]
                      }),
                      _react2.default.createElement(_victory.VictoryLine, {
                        name: 'line',
                        y: function y() {
                          return 0.5;
                        },
                        style: { data: { stroke: 'blue', strokeWidth: 5 } },
                        label: 'LINE'
                      })
                    )
                  ),
                  _react2.default.createElement(
                    _Column2.default,
                    {
                      xLargeCell: 1,
                      largeCell: 1,
                      mediumCell: 1,
                      smallCell: 1
                    },
                    _react2.default.createElement(_victory.VictoryPie, {
                      animate: { duration: 1000 },
                      width: 400,
                      height: 400,
                      data: this.state.data,
                      innerRadius: 120,
                      cornerRadius: 25,
                      labels: function labels() {
                        return null;
                      },
                      style: {
                        data: {
                          fill: function fill(d) {
                            var color = d.y > 30 ? 'green' : 'red';
                            return d.x === 1 ? color : 'transparent';
                          }
                        }
                      }
                    }),
                    _react2.default.createElement(
                      _victory.VictoryAnimation,
                      { duration: 1000, data: this.state },
                      function (newProps) {
                        return _react2.default.createElement(_victory.VictoryLabel, {
                          textAnchor: 'middle',
                          verticalAnchor: 'middle',
                          x: 200,
                          y: 200,
                          text: Math.round(newProps.percent) + '%',
                          style: { fontSize: 45 }
                        });
                      }
                    )
                  ),
                  _react2.default.createElement(
                    _Column2.default,
                    { xLargeCell: 1, smallCell: 1 },
                    _react2.default.createElement(
                      _victory.VictoryChart,
                      {
                        theme: _victory.VictoryTheme.material,
                        animate: { duration: 1000 }
                      },
                      _react2.default.createElement(
                        _victory.VictoryStack,
                        { colorScale: 'blue' },
                        this.state.data.map(function (data, i) {
                          return _react2.default.createElement(_victory.VictoryArea, {
                            key: i,
                            data: [{ x: 1, y: 1 }, { x: 2, y: 5 }, { x: 3, y: 3 }, { x: 4, y: 2 }, { x: 5, y: 8 }],
                            interpolation: 'basis'
                          });
                        })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _Column2.default,
                    {
                      xLargeCell: 1,
                      largeCell: 1,
                      mediumCell: 1,
                      smallCell: 1
                    },
                    _react2.default.createElement(
                      _victory.VictoryChart,
                      {
                        height: 400,
                        width: 400,
                        domainPadding: { x: 50, y: [0, 20] },
                        scale: { x: 'time' }
                      },
                      _react2.default.createElement(_victory.VictoryBar, {
                        dataComponent: _react2.default.createElement(_victory.Bar, {
                          events: {
                            onMouseOver: function onMouseOver() {
                              return console.log('zetgoo');
                            }
                          }
                        }),
                        style: this.state.style,
                        data: [{ x: new Date(1986, 1, 1), y: 2 }, { x: new Date(1996, 1, 1), y: 3 }, { x: new Date(2006, 1, 1), y: 5 }, { x: new Date(2016, 1, 1), y: 4 }]
                      })
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var routes = [{ path: '/', action: function action() {
    return _react2.default.createElement(App, null);
  } }, { path: '/two', action: function action() {
    return _react2.default.createElement(
      'h1',
      null,
      'Page Two'
    );
  } }, { path: '*', action: function action() {
    return _react2.default.createElement(
      'h1',
      null,
      'Not Found'
    );
  } }];

var router = new _universalRouter2.default(routes);

router.resolve({ path: '/' }).then(function (component) {
  _reactDom2.default.render(component, document.getElementById('root'));
});