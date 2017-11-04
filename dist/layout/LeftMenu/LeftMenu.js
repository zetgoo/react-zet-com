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

var _Menu = require('../../components/Menu/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuLabel = require('../../components/MenuLabel/MenuLabel');

var _MenuLabel2 = _interopRequireDefault(_MenuLabel);

var _MenuItem = require('../../components/MenuItem/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _MenuGroup = require('../../components/MenuGroup/MenuGroup');

var _MenuGroup2 = _interopRequireDefault(_MenuGroup);

var _Link = require('../../components/Link/Link');

var _Link2 = _interopRequireDefault(_Link);

var _Icon = require('../../components/Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Sack = require('../../components/Sack/Sack');

var _Sack2 = _interopRequireDefault(_Sack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  base: {}
};

var LeftMenu = function LeftMenu(props) {
  var zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    zcss = props.zcss.map(function (item) {
      if (styles[item]) {
        return zcss.concat(styles[item]);
      }
      return zcss.concat(_constant.atomic[item]);
    });
  }

  var rootNode = _react2.default.cloneElement(_react2.default.createElement(_Sack2.default, null), [], []);
  var childArr = [];

  var buildHtml = function buildHtml(data) {
    if (!data) return null;

    var currentNode = null;

    return data.map(function (item, index) {
      var node = null;
      if (item.groupLabel) {
        return _react2.default.createElement(
          _MenuLabel2.default,
          null,
          item.groupLabel,
          _react2.default.createElement('li', null),
          _react2.default.createElement('li', null)
        );
      }

      return _react2.default.createElement(
        _MenuItem2.default,
        null,
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _Link2.default,
            { to: '/home' },
            _react2.default.createElement(_Icon2.default, {
              zcss: [''],
              icon: 'fa ' + item.icon.split('.')[1],
              text: item.label
            })
          ),
          item.isActived ? _react2.default.createElement(_Icon2.default, {
            zcss: ['fr', 'mgR1/2e'],
            icon: 'fa ' + item.rightActived.split('.')[1]
          }) : _react2.default.createElement(_Icon2.default, {
            zcss: ['fr', 'mgR1/2e'],
            icon: 'fa ' + item.rightNoAcitved.split('.')[1]
          })
        ),
        _react2.default.createElement('li', null)
      );

      childArr.push(node);

      if (item.childMenu) {
        buildHtml(item.childMenu);
        // const temp =  React.cloneElement(node,{...node.props, children: childArr})
        // // childArr = []
        // return temp
      }
      return childArr;
    });
  };

  var htmlElement = buildHtml(props.data);

  return _react2.default.createElement(
    _Menu2.default,
    { zcss: ['fw500'] },
    _react2.default.createElement(
      _MenuGroup2.default,
      null,
      _react2.default.createElement(
        _MenuLabel2.default,
        null,
        'MAIN NAVIGATION'
      ),
      _react2.default.createElement(
        _MenuItem2.default,
        { zcss: ['mgB1r'] },
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _Link2.default,
            { to: '/home' },
            _react2.default.createElement(_Icon2.default, { zcss: ['f1e'], icon: 'fa fa-cog', text: 'Dashboard' })
          ),
          _react2.default.createElement(_Icon2.default, { zcss: ['fr', 'mgR1/2e'], icon: 'fa fa-hand-o-left' })
        ),
        _react2.default.createElement(
          _MenuItem2.default,
          null,
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _Link2.default,
              { to: '/home' },
              _react2.default.createElement(_Icon2.default, { zcss: ['f1e'], icon: 'fa fa-cog', text: 'Visited' })
            ),
            _react2.default.createElement(_Icon2.default, { zcss: ['fr', 'mgR1/2e'], icon: 'fa fa-hand-o-left' })
          ),
          _react2.default.createElement(
            _MenuItem2.default,
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _Link2.default,
                { to: '/home' },
                _react2.default.createElement(_Icon2.default, { zcss: ['f1e'], icon: 'fa fa-cog', text: 'On Week' })
              ),
              _react2.default.createElement(_Icon2.default, { zcss: ['fr', 'mgR1/2e'], icon: 'fa fa-hand-o-left' })
            )
          )
        )
      ),
      _react2.default.createElement(
        _MenuItem2.default,
        null,
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _Link2.default,
            { to: '/home' },
            _react2.default.createElement(_Icon2.default, { zcss: ['f1e'], icon: 'fa fa-cog', text: 'Dashboard 1' })
          ),
          _react2.default.createElement(_Icon2.default, { zcss: ['fr', 'mgR1/2e'], icon: 'fa fa-hand-o-left' })
        ),
        _react2.default.createElement(
          _MenuItem2.default,
          null,
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _Link2.default,
              { to: '/home' },
              _react2.default.createElement(_Icon2.default, { zcss: ['f1e'], icon: 'fa fa-cog', text: 'Visited' })
            ),
            _react2.default.createElement(_Icon2.default, { zcss: ['fr', 'mgR1/2e'], icon: 'fa fa-hand-o-left' })
          ),
          _react2.default.createElement(
            _MenuItem2.default,
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _Link2.default,
                { to: '/home' },
                _react2.default.createElement(_Icon2.default, { zcss: ['f1e'], icon: 'fa fa-cog', text: 'On Week' })
              ),
              _react2.default.createElement(_Icon2.default, { zcss: ['fr', 'mgR1/2e'], icon: 'fa fa-hand-o-left' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _Link2.default,
                { to: '/home' },
                _react2.default.createElement(_Icon2.default, { zcss: ['f1e'], icon: 'fa fa-cog', text: 'On Month' })
              ),
              _react2.default.createElement(_Icon2.default, { zcss: ['fr', 'mgR1/2e'], icon: 'fa fa-hand-o-left' })
            ),
            _react2.default.createElement(
              _MenuItem2.default,
              null,
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _Link2.default,
                  { to: '/home' },
                  _react2.default.createElement(_Icon2.default, {
                    zcss: ['f1e'],
                    icon: 'fa fa-cog',
                    text: 'On Week child'
                  })
                ),
                _react2.default.createElement(_Icon2.default, { zcss: ['fr', 'mgR1/2e'], icon: 'fa fa-hand-o-left' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _Link2.default,
                  { to: '/home' },
                  _react2.default.createElement(_Icon2.default, {
                    zcss: ['f1e'],
                    icon: 'fa fa-cog',
                    text: 'On Month child'
                  })
                ),
                _react2.default.createElement(_Icon2.default, { zcss: ['fr', 'mgR1/2e'], icon: 'fa fa-hand-o-left' })
              )
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      _MenuGroup2.default,
      null,
      _react2.default.createElement(
        _MenuLabel2.default,
        null,
        'MAIN NAVIGATION'
      ),
      _react2.default.createElement(
        _MenuItem2.default,
        null,
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _Link2.default,
            { to: '/home' },
            _react2.default.createElement(_Icon2.default, { zcss: ['f1e'], icon: 'fa fa-cog', text: 'Dashboard' })
          ),
          _react2.default.createElement(_Icon2.default, { zcss: ['fr', 'mgR1/2e'], icon: 'fa fa-hand-o-left' })
        ),
        _react2.default.createElement(
          _MenuItem2.default,
          null,
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _Link2.default,
              { to: '/home' },
              _react2.default.createElement(_Icon2.default, { zcss: ['f1e'], icon: 'fa fa-cog', text: 'Visited' })
            ),
            _react2.default.createElement(_Icon2.default, { zcss: ['fr', 'mgR1/2e'], icon: 'fa fa-hand-o-left' })
          ),
          _react2.default.createElement(
            _MenuItem2.default,
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _Link2.default,
                { to: '/home' },
                _react2.default.createElement(_Icon2.default, { zcss: ['f1e'], icon: 'fa fa-cog', text: 'On Week' })
              ),
              _react2.default.createElement(_Icon2.default, { zcss: ['fr', 'mgR1/2e'], icon: 'fa fa-hand-o-left' })
            )
          )
        )
      ),
      _react2.default.createElement(
        _MenuItem2.default,
        null,
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _Link2.default,
            { to: '/home' },
            _react2.default.createElement(_Icon2.default, { zcss: ['f1e'], icon: 'fa fa-cog', text: 'Dashboard 1' })
          ),
          _react2.default.createElement(_Icon2.default, { zcss: ['fr', 'mgR1/2e'], icon: 'fa fa-hand-o-left' })
        ),
        _react2.default.createElement(
          _MenuItem2.default,
          null,
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _Link2.default,
              { to: '/home' },
              _react2.default.createElement(_Icon2.default, { zcss: ['f1e'], icon: 'fa fa-cog', text: 'Visited' })
            ),
            _react2.default.createElement(_Icon2.default, { zcss: ['fr', 'mgR1/2e'], icon: 'fa fa-hand-o-left' })
          ),
          _react2.default.createElement(
            _MenuItem2.default,
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _Link2.default,
                { to: '/home' },
                _react2.default.createElement(_Icon2.default, { zcss: ['f1e'], icon: 'fa fa-cog', text: 'On Week' })
              ),
              _react2.default.createElement(_Icon2.default, { zcss: ['fr', 'mgR1/2e'], icon: 'fa fa-hand-o-left' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _Link2.default,
                { to: '/home' },
                _react2.default.createElement(_Icon2.default, { zcss: ['f1e'], icon: 'fa fa-cog', text: 'On Month' })
              ),
              _react2.default.createElement(_Icon2.default, { zcss: ['fr', 'mgR1/2e'], icon: 'fa fa-hand-o-left' })
            ),
            _react2.default.createElement(
              _MenuItem2.default,
              null,
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _Link2.default,
                  { to: '/home' },
                  _react2.default.createElement(_Icon2.default, {
                    zcss: ['f1e'],
                    icon: 'fa fa-cog',
                    text: 'On Week child'
                  })
                ),
                _react2.default.createElement(_Icon2.default, { zcss: ['fr', 'mgR1/2e'], icon: 'fa fa-hand-o-left' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _Link2.default,
                  { to: '/home' },
                  _react2.default.createElement(_Icon2.default, { zcss: ['f1e'], icon: 'fa fa-cog', text: 'On Month' })
                ),
                _react2.default.createElement(_Icon2.default, { zcss: ['fr', 'mgR1/2e'], icon: 'fa fa-hand-o-left' })
              )
            )
          )
        )
      )
    )
  );
};

LeftMenu.propTypes = {
  zcss: _propTypes2.default.array
};

exports.default = (0, _radium2.default)(LeftMenu);

// <Menu>
//   {htmlElement}
// </Menu>