'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rust = require('./rust/rust.js');

Object.defineProperty(exports, 'rust', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_rust).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }