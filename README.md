[![Build Status](https://travis-ci.org/translationCoreApps/wordMAP-lexer.svg?branch=master)](https://travis-ci.org/translationCoreApps/wordMAP-lexer)
[![codecov](https://codecov.io/gh/translationCoreApps/wordmap-lexer/branch/master/graph/badge.svg)](https://codecov.io/gh/translationCoreApps/wordmap-lexer)
[![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)

# wordMAP-lexer
A lexical tool for wordMAP

The lexer provides tools generating tokens which can be fed into [WordMAP](https://github.com/translationCoreApps/wordMAP).

## Install

```bash
npm i wordmap-lexer
```

## Usage

```ts

require Lexer, {Token} from 'wordmap-lexer';

const tokens : Token[] = Lexer.tokenize("hello, world");
// produces tokens "hello", ",", and "world".

const puct_tokens : Token[] = Lexer.tokenize("hello, world", {punctuation: true});
// produces tokens "hello" and "world".

```
