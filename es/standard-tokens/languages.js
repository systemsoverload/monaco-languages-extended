'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var languages = {
  rust: {
    extensions: ['.rs', '.rlib']
  },
  elixir: {
    extensions: ['.ex', '.exs']
  },
  perl: {
    extensions: ['.pl', '.pm']
  }
};

var getLanguage = exports.getLanguage = function getLanguage(filename) {
  var split = filename.split('.');
  var extension = split.length > 1 ? '.' + split.pop() : null;

  if (!extension) {
    return null;
  }

  var matchedLangs = Object.keys(languages).filter(function (k) {
    return languages[k].extensions.indexOf(extension) >= 0;
  });

  if (!!matchedLangs) {
    return matchedLangs[0];
  }

  return null;
};