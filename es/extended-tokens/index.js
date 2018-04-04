'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pythonExtended = require('./python/python-extended.js');

Object.defineProperty(exports, 'python', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_pythonExtended).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }