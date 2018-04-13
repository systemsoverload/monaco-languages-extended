# Monaco Languages Extended

Extended language grammars for [monaco-editor](https://github.com/Microsoft/monaco-editor). Language definitions in this library can be broken down into two categories: standard grammars that are not-yet supported by Monaco, and "extended" grammars that go well beyond the default tokens supported by default styles in Monaco.

The goal of the standard grammars is to be validated here before being pushed back upstream to [monaco-languages](github.com/Microsoft/monaco-languages). Whereas the extended grammars may live on in this repository forever.

# Usage
This library exports each individual language in standard/extended grammars separately to cut down on bundle size as you would only need all of the individual languages in the most generic implementations.

## Standard Tokens
This example uses [react-monaco-editor](https://github.com/superRaytin/react-monaco-editor), but Monaco API's used should be the same for any implementation. The basic idea is to check for supported tokens in monaco-languages-extended after a file has loaded without a supported language. The below implementation just uses 'plaintext' as semaphore for no supported language found.

```javascript
const extMap = {
  rs: 'rust',
  rlib: 'rust',
  ex: 'elixir',
  exs: 'elixir',
  pl: 'perl',
  pm: 'perl',
  dart: 'dart'
};


class MonacoFile extends PureComponent {
  editorDidMount = (editor: any, monaco: any) => {
    this.editor = editor;

    if (this.props.language === 'plaintext') {
      // If no syntax highlighter was found, check extended language support
      // library for a potential match, and set syntax if matches
      this.setExtendedTokenProvider(monaco);
    }
  }

  setExtendedTokenProvider = (monaco: any) => {
    const fileExt = this.props.fileExtension;
    const lang = extMap[fileExt];

    if (lang) {
      // If there is a language defined, register it, load the syntax, and
      // change the editor language to the newly defined provider
      monaco.languages.register({ id: lang });
      import('monaco-languages-extended').then(
        ({ standardTokens }) => {
          monaco.languages.setMonarchTokensProvider(lang, standardTokens[lang]);
          this.setState({ language: lang });
        }
      );
    }
  };

  render() {
    const { contents } = this.props;
    return (
    <Editor
      language={this.state.language}
      editorDidMount={this.editorDidMount}
      theme="bitbucket"
      value={contents}
    />
    );
  }
}
```


# Languages
> (Strikethrough == merged upstream)

| Language  | Extended Grammar | Standard Grammar | 
| --------- | ---------------- | ---------------- |
| Elixir    | -                | ✓                |
| Perl      | -                | ✓                |
| Python    | ✓                | -                |
| ~~Rust~~  | -                | ✓                |
