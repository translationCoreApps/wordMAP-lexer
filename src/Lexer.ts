// @ts-ignore
import stringTokenizer from "string-punctuation-tokenizer";
import Token from "./Token";

export interface NumberObject {
    [key: string]: number;
}

/**
 * A collection of lexical functions
 */
export default class Lexer {

    /**
     * Generates an array of measured tokens for the sentence.
     * @param {string} sentence - the sentence to tokenize
     * @return {Token[]}
     */
    public static tokenize(sentence: string): Token[] {
        const words = stringTokenizer.tokenize(sentence);
        const sentenceLength = sentence.length;
        const tokens: Token[] = [];
        let charPos = 0;
        const occurrenceIndex: NumberObject = {};
        for (const word of words) {
            if (!occurrenceIndex[word]) {
                occurrenceIndex[word] = 0;
            }
            occurrenceIndex[word] += 1;
            tokens.push(new Token({
                text: word,
                position: tokens.length,
                characterPosition: charPos,
                sentenceTokenLen: words.length,
                sentenceCharLen: sentenceLength,
                occurrence: occurrenceIndex[word]
            }));
            charPos += word.length;
        }

        // Finish adding occurrence information
        const occurrenceTokens: Token[] = [];
        for (const t of tokens) {
            occurrenceTokens.push(new Token({
                text: t.toString(),
                position: t.position,
                characterPosition: t.charPosition,
                sentenceTokenLen: t.sentenceTokenLength,
                sentenceCharLen: t.sentenceCharacterLength,
                occurrence: t.occurrence,
                occurrences: occurrenceIndex[t.toString()]
            }));
        }
        return occurrenceTokens;
    }

}
