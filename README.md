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
