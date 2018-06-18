const languages = {
  rust: {
    extensions: ['.rs', '.rlib'],
  },
  elixir: {
    extensions: ['.ex', '.exs'],
  },
  perl: {
    extensions: ['.pl', '.pm'],
  },
}


export const getLanguage = filename => {
  const split = filename.split('.');
  const extension = split.length > 1 ? `.${split.pop()}` : null;

  if (!extension){
    return null
  }

  const matchedLangs = Object.keys(languages).filter(
    k => languages[k].extensions.indexOf(extension) >= 0
  );

  if (!!matchedLangs) {
    return matchedLangs[0]
  }

  return null;
}
