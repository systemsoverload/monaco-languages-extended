'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extendedTokens = exports.standardTokens = exports.getLanguageByFileName = undefined;

var _standardTokens = require('./standard-tokens');

var _languages = require('./standard-tokens/languages');

var _extendedTokens = require('./extended-tokens');

var getLanguageByFileName = exports.getLanguageByFileName = _languages.getLanguage;
var standardTokens = exports.standardTokens = { rust: _standardTokens.rust, elixir: _standardTokens.elixir, perl: _standardTokens.perl };
var extendedTokens = exports.extendedTokens = { python: _extendedTokens.python };