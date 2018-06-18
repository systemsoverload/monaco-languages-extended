import {rust} from './standard-tokens';
import {elixir} from './standard-tokens';
import {perl} from './standard-tokens';
import {getLanguage} from './standard-tokens/languages'

import {python} from './extended-tokens';

export let getLanguageByFileName = getLanguage
export let standardTokens = {rust: rust, elixir: elixir, perl: perl}
export let extendedTokens = {python: python}
