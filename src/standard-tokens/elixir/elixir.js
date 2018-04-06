export default {
  defaultToken: '',
  tokenPostfix: '.elixir',
  keywords: [
    'after', 'and', 'bc', 'case', 'catch', 'cond', 'defcallback',
    'defdelegate', 'defexception', 'defguardp?', 'defimpl', 'defmodule',
    'defoverridable', 'defprotocol', 'defrecordp?', 'defstruct', 'do', 'else',
    'end', 'exit', 'fn', 'for', 'if', 'in', 'lc', 'not', 'or', 'quote',
    'raise', 'receive', 'rescue', 'super', 'throw', 'try', 'unless', 'unquote',
    'when', 'with',
  ],


  operators: [
    '!==?', '&&&', '*', '**', '+', '++', '-', '--', '->', '..', '/', '::',
    '<-', '<<', '<<<', '<<~', '<=?', '<>', '<|>', '<~', '<~>', '=', '===?',
    '=>', '=~', '>=?', '>>', '>>>', '\\', '|', '|>', '~>', '~>>', '~~~',
  ],

  symbols:  /[@=><!~?:&|+\-*\/\^%,.]+/,
  escapes: /(\\[uU]|[xX])?{.+}/,

  tokenizer: {
    root: [
      [/[a-z_$][\w$]*/, { cases: { '@keywords': 'keyword',
                                   '@default': 'identifier' } }],
      // variables
      [/[A-Z][\w\$]*/, 'type.identifier' ],

      // atoms
      [/(?:[^\W])?:\w+/, 'variable'],

      //attributes
      [/@\w+/, 'constant'],

      // numbers
      [/\d*\.\d+([eE][\-+]?\d+)?/,   'number.float'],
      [/0[xX][0-9a-fA-F]+[lL]?/,     'number.hex'],
      [/0[bB][0-1]+[lL]?/,           'number.binary'],
      [/(0[oO][0-7]+|0[0-7]+)[lL]?/, 'number.octal'],
      [/(0|[1-9]\d*)[lL]?/,          'number'],

      // codepoint
      [/\?[a-zA-Z]/, 'string'],

      //commments
      [/#(.+)?/, 'comment'],

      //strings
      [/"/, 'string', '@string' ],

      //char list
      [/'/, 'string', '@charlist'],

      // delimiters and operators
      [/[{}()\[\]]/, '@brackets'],
      [/[<>](?!@symbols)/, '@brackets'],
      [/@symbols/, { cases: { '@operators': 'operator',
                              '@default'  : '' } } ],

      // whitespace
      { include: '@whitespace' },

    ],
    charlist: [
      [/[^\']+/, 'string'],
      [/'/, 'string', '@pop' ]
    ],
    string: [
      [/[^\"]+/,  'string'],
      [/@escapes/, 'string.escape'],
      [/\\./,      'string.escape.invalid'],
      [/"/,        'string', '@pop' ]
    ],

    whitespace: [
      [/[ \t\r\n]+/, 'white']
    ],
  },
}
