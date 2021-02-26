'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _builtins = require('./builtins.json');

var _builtins2 = _interopRequireDefault(_builtins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  tokenPostfix: '.mac',

  defaultToken: '',

  keywords: ['if', 'then', 'else', 'elseif', 'for', 'thru', 'do', 'while', 'until', 'step', 'in', 'and', 'or', 'not'],

  constants: ['true', 'false'],

  operators: ['=', '::', ':', '::=', ':=', '!!', '!', '^', '.', '*', '/', '+', '-', '>=', '<=', '>', '<', '%', '$'],

  builtins: _builtins2.default,

  escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,

  symbols: /[\\|\+|\-|\*|\/|,|;|\.|:|@|~|=|>|<|&|\||_|`|'|\^|\?|!|%|#]+/,

  identifiers: /\b[a-zA-Z][a-zA-Z0-9_]*/,

  brackets: [{ open: '{', close: '}', token: 'delimiter.curly' }, { open: '[', close: ']', token: 'delimiter.bracket' }, { open: '(', close: ')', token: 'delimiter.parenthesis' }],

  tokenizer: {
    root: [
    // Variables
    [/\b([A-Za-z]+[A-Za-z0-9_]*)(?=:)/, 'variable'], [/\b([A-Za-z]+[A-Za-z0-9_]*)(?=\[.*\]:)/, 'variable'],

    // Identifiers
    [/@identifiers/, { cases: {
        "@builtins": "support.function.builtin",
        '@keywords': 'keyword',
        '@constants': 'keyword',
        '@default': 'identifier'
      } }],

    // Whitespace + comments
    { include: '@whitespace' },

    // Strings
    [/"([^"\\]|\\.)*$/, 'invalid'], // non-teminated double quote
    [/"/, { token: 'string.delim', bracket: '@open', next: '@string.$0' }],

    // Numbers
    { include: '@numbers' },

    // Brackets & delimiters
    [/[{}()\[\]]/, '@brackets'], [/[,;$]/, 'delimiter'],

    // Symbols & operators
    [/@symbols/, { cases: { '@operators': 'operator', '@default': '' } }]],

    whitespace: [[/[ \t\r\n]+/, 'white'], [/\/\*/, 'comment', '@comment'], [/\/\/.*$/, 'comment']],

    comment: [[/[^\/*]+/, 'comment'], [/\/\*/, 'comment', '@push'], ['\\*/', 'comment', '@pop'], [/[\/*]/, 'comment']],

    string: [[/[^\\"]+/, 'string'], [/@escapes/, 'string.escape'], [/\\./, 'string.escape.invalid'], [/"/, 'string', '@pop']],

    numbers: [
    // Integer
    [/-?\d+(?:(b|e)-?\d)?/, 'number'],

    // Float including bfloat and exponents
    [/-?\d*\.+\d+(?:(b|e)-?\d)?/, 'number']]
  }
};