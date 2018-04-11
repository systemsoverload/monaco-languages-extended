'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  defaultToken: '',
  tokenPostFix: '.perl',

  keywords: ['abs', 'accept', 'alarm', 'atan2', 'AUTOLOAD', 'BEGIN', 'bind', 'binmode', 'bless', 'break', 'caller', 'chdir', 'CHECK', 'chmod', 'chomp', 'chop', 'chown', 'chr', 'chroot', 'close', 'closedir', 'connect', 'cos', 'crypt', 'dbmclose', 'dbmopen', 'defined', 'delete', 'DESTROY', 'die', 'dump', 'each', 'END', 'endgrent', 'endhostent', 'endnetent', 'endprotoent', 'endpwent', 'endservent', 'eof', 'eval', 'exec', 'exists', 'exit', 'fcntl', 'fileno', 'flock', 'fork', 'format', 'formline', 'getc', 'getgrent', 'getgrgid', 'getgrnam', 'gethostbyaddr', 'gethostbyname', 'gethostent', 'getlogin', 'getnetbyaddr', 'getnetbyname', 'getnetent', 'getpeername', 'getpgrp', 'getppid', 'getpriority', 'getprotobyname', 'getprotobynumber', 'getprotoent', 'getpwent', 'getpwnam', 'getpwuid', 'getservbyname', 'getservbyport', 'getservent', 'getsockname', 'getsockopt', 'glob', 'gmtime', 'goto', 'grep', 'hex', 'index', 'INIT', 'int', 'ioctl', 'join', 'keys', 'kill', 'last', 'lc', 'lcfirst', 'length', 'link', 'listen', 'local', 'localtime', 'log', 'lstat', 'map' /*  */, 'mkdir', 'msgctl', 'msgget', 'msgrcv', 'msgsnd', 'my', 'next', 'not', 'oct', 'open', 'opendir', 'ord', 'our', 'pack', 'pipe', 'pop', 'pos', 'print', 'printf', 'prototype', 'push', 'quotemeta', 'rand', 'read', 'readdir', 'readline', 'readlink', 'readpipe', 'recv', 'redo', 'ref', 'rename', 'require', 'reset', 'return', 'reverse', 'rewinddir', 'rindex', 'rmdir', 'say', 'scalar', 'seek', 'seekdir', 'select', 'semctl', 'semget', 'semop', 'send', 'setgrent', 'sethostent', 'setnetent', 'setpgrp', 'setpriority', 'setprotoent', 'setpwent', 'setservent', 'setsockopt', 'shift', 'shmctl', 'shmget', 'shmread', 'shmwrite', 'shutdown', 'sin', 'sleep', 'socket', 'socketpair', 'sort', 'splice', 'split', 'sprintf', 'sqrt', 'srand', 'stat', 'state', 'study', 'substr', 'symlink', 'syscall', 'sysopen', 'sysread', 'sysseek', 'system', 'syswrite', 'tell', 'telldir', 'tie', 'tied', 'time', 'times', 'truncate', 'uc', 'ucfirst', 'umask', 'undef', 'UNITCHECK', 'unlink', 'unpack', 'unshift', 'untie', 'use', 'utime', 'values', 'vec', 'wait', 'waitpid', 'wantarray', 'warn', 'write'],

  builtins: ['$!', '$"', '$#', '$$', '$%', '$&', '$\'', '$(', '$)', '$*', '$+', '$', '$-', '$.', '$/', '$0', '$:', '$;', '$<', '$=', '$>', '$?', '$@', '$[', '$\\', '$]', '$^', '$^A', '$^C', '$^CHILD_ERROR_NATIVE', '$^D', '$^E', '$^ENCODING', '$^F', '$^H', '$^I', '$^L', '$^M', '$^N', '$^O', '$^OPEN', '$^P', '$^R', '$^RE_DEBUG_FLAGS', '$^RE_TRIE_MAXBUF', '$^S', '$^T', '$^TAINT', '$^UNICODE', '$^UTF8LOCALE', '$^V', '$^W', '$^WARNING_BITS', '$^WIDE_SYSTEM_CALLS', '$^X', '$_', '$`', '$a', '$ACCUMULATOR', '$ARG', '$ARGV', '$b', '$BASETIME', '$CHILD_ERROR', '$COMPILING', '$DEBUGGING', '$EFFECTIVE_GROUP_ID', '$EFFECTIVE_USER_ID', '$EGID', '$ERRNO', '$EUID', '$EVAL_ERROR', '$EXCEPTIONS_BEING_CAUGHT', '$EXECUTABLE_NAME', '$EXTENDED_OS_ERROR', '$FORMAT_FORMFEED', '$FORMAT_LINE_BREAK_CHARACTERS', '$FORMAT_LINES_LEFT', '$FORMAT_LINES_PER_PAGE', '$FORMAT_NAME', '$FORMAT_PAGE_NUMBER', '$FORMAT_TOP_NAME', '$GID', '$INPLACE_EDIT', '$INPUT_LINE_NUMBER', '$INPUT_RECORD_SEPARATOR', '$LAST_MATCH_END', '$LAST_PAREN_MATCH', '$LAST_REGEXP_CODE_RESULT', '$LIST_SEPARATOR', '$MATCH', '$MULTILINE_MATCHING', '$NR', '$OFMT', '$OFS', '$ORS', '$OS_ERROR', '$OSNAME', '$OUTPUT_AUTO_FLUSH', '$OUTPUT_FIELD_SEPARATOR', '$OUTPUT_RECORD_SEPARATOR', '$PERL_VERSION', '$PERLDB', '$PID', '$POSTMATCH', '$PREMATCH', '$PROCESS_ID', '$PROGRAM_NAME', '$REAL_GROUP_ID', '$REAL_USER_ID', '$RS', '$SUBSCRIPT_SEPARATOR', '$SUBSEP', '$SYSTEM_FD_MAX', '$UID', '$WARNING', '$|', '$~', '%!', '%^H', '%ENV', '%INC', '%OVERLOAD', '%SIG', '@+', '@-', '@_', '@ARGV', '@INC', '@LAST_MATCH_START'],

  operators: ['+', '-', '/', '*', '%', '**', '==', '!=', '<=>', '>', '<', '>=', '<=', 'lt', 'gt', 'le', 'ge', 'eq', 'ne', 'cmp', '+=', '-=', '*=', '/=', '%=', '**=', '&', '^', '~', '<<', '>>', '..', '++', '--', '->'],
  // XXX - This is an overly generic guess at symbols.
  symbols: /[@=><!~?:&|+\-*\/\^%,.;]+/,
  // TODO - :()
  escapes: /\\/,

  tokenizer: {
    root: [
    // identifiers and keywords
    [/[a-z_]\w+/, { cases: { '@keywords': 'keyword',
        '@builtins': 'keyword',
        '@default': 'identifier' } }],
    // module
    [/[A-Z][\w\$]*/, 'type.identifier'],

    // regular expression
    // FIXME - This is a bludgeon.
    [/s?\/.+\/[gmixXsuUAJD]?/, { token: 'regexp' }],

    // variables
    [/([\\?\$%\@])+\w+/, 'variable'],

    // comment
    [/#.*/, 'comment'],

    //quote-likes
    [/(q|qq|qx)\{\w+\}/, 'string'],

    // strings
    [/"([^"\\]|\\.)*$/, 'string.invalid'], // non-teminated double quote
    [/'([^'\\]|\\.)*$/, 'string.invalid'], // non-teminated single quote
    [/["']/, { token: 'string.delim', bracket: '@open', next: '@string.$0' }], [/[{}()\[\]]/, '@brackets'], [/@symbols/, { cases: { '@operators': 'operator',
        '@default': '' } }],
    // number
    [/[\dbxe\.-]+/, 'number'],
    // whitespace
    { include: '@whitespace' }],
    string: [[/[^"']+/, { token: 'string' }], [/@escapes/, 'string.escape'], [/\\./, 'string.escape.invalid'], [/["']/, { cases: { '$#==$S2': { token: 'string.delim', bracket: '@close', next: '@pop' },
        '@default': { token: 'string' } } }], [/./, 'string.invalid']],
    whitespace: [[/[ \t\r\n]+/, 'white']]
  }
};