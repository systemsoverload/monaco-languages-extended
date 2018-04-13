'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extendedTokens = exports.standardTokens = undefined;

var _standardTokens = require('./standard-tokens');

var _extendedTokens = require('./extended-tokens');

var standardTokens = exports.standardTokens = { rust: _standardTokens.rust, elixir: _standardTokens.elixir, perl: _standardTokens.perl, dart: _standardTokens.dart };
var extendedTokens = exports.extendedTokens = { python: _extendedTokens.python };