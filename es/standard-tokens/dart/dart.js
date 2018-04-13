'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  defaultToken: 'invalid',
  tokenPostFix: '.dart',

  keywords: ['abstract', 'as', 'assert', 'async', 'async*', 'await', 'break', 'case', 'catch', 'class', 'const', 'continue', 'covariant', 'default', 'deferred', 'do', 'dynamic', 'else', 'enum', 'export', 'extends', 'external', 'factory', 'false', 'final', 'finally', 'for', 'get', 'if', 'implements', 'import', 'in', 'is', 'library', 'new', 'null', 'operator', 'part', 'rethrow', 'return', 'set', 'static', 'super', 'switch', 'sync*', 'this', 'throw', 'true', 'try', 'typedef', 'var', 'void', 'while', 'with', 'yield', 'yield*'],

  builtins: ['print'],

  operators: ['!', '!=', '%', '%=', '&', '&&', '&=', '()', '*', '*=', '+', '++', '++', '+=', '-', '-', '--', '--', '-=', '.', '..', '/', '/=', ':', '<', '<<', '<<=', '<=', '=', '==', '>', '>=', '>>', '>>=', '?', '?.', '??', '??=', '[]', '^', '^=', 'as', 'is', 'is!', '|', '|=', '||', '~', '~/', '~/='],
  symbols: /[@=><!~?:&|+\-*\/\^%,.;]+/,
  escapes: /\\/,

  tokenizer: {
    root: [
    // identifiers and keywords
    [/[a-z_]\w*/, { cases: { '@keywords': 'keyword',
        '@builtins': 'keyword',
        '@default': 'identifier' } }],

    // // module
    [/[A-Z][\w\$]*/, 'type.identifier'],

    // regular expression
    [/r["'].+['"]/, { token: 'regexp' }],

    // // strings
    [/"([^"\\]|\\.)*$/, 'string.invalid'], // non-teminated double quote
    [/'([^'\\]|\\.)*$/, 'string.invalid'], // non-teminated single quote
    [/["']/, { token: 'string.delim', bracket: '@open', next: '@string.$0' }], [/[{}()\[\]]/, '@brackets'], [/\/\*/, 'comment', '@comment'], [/\/\/.*$/, 'comment'], [/@symbols/, { cases: { '@operators': 'operator',
        '@default': '' } }],
    // number
    [/[\dbxe\.-]+/, 'number']],

    comment: [[/[^\/*]+/, 'comment'], [/\/\*/, 'comment', '@push'], // nested comment not allowed :-(
    [/\/\*/, 'comment.invalid'], ["\\*/", 'comment', '@pop'], [/[\/*]/, 'comment']],

    string: [[/[^"']+/, { token: 'string' }], [/\\.+/, 'string.escape'], [/\\./, 'string.escape.invalid'], [/["']/, { cases: { '$#==$S2': { token: 'string.delim', bracket: '@close', next: '@pop' },
        '@default': { token: 'string' } } }], [/./, 'string.invalid']],
    whitespace: [[/[ \t\r\n]+/, 'white']]
  }
};