'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createBrowserHistory = require('history/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Navigation manager, e.g. history.push('/home')
// https://github.com/mjackson/history
exports.default = process.env.BROWSER && (0, _createBrowserHistory2.default)(); /**
                                                                                 * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                 *
                                                                                 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
                                                                                 *
                                                                                 * This source code is licensed under the MIT license found in the
                                                                                 * LICENSE.txt file in the root directory of this source tree.
                                                                                 */