// One Word From Grandma — make.fun entry
//
// The brief: send exactly one word, the single word Grandma would text
// about AI. No sentence, no explanation, no punctuation tricks.
//
// The word: "witchcraft"
//
// Why this word, and not the obvious robot words:
//   - Grandma has never once said "robot", "AI", or "algorithm" in her
//     life. Faced with a machine that answers questions, writes poems,
//     and knows things no one told it, she reaches for the only word
//     her generation has for impossible knowledge: witchcraft.
//   - It is warm and a little baffled, not hostile — the way she says
//     it while shaking her head and smiling, half impressed, half
//     suspicious, asking the grandchild to explain it again slower.
//   - The joke lands in one word with no caption: a talking box that
//     knows everything is, to her, plainly witchcraft.
//   - It is tied to AI as the mysterious machine, not to any subject at
//     all, and it is a fresh pick — nobody's grandma texts "robut".
//
// The program writes exactly that one word to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "witchcraft";

// Competition gate: the entry word must be 1–30 characters, a single
// line with no whitespace, and survive a UTF-8 round-trip intact.
const WORD_MAX_LENGTH = 30;
if (WORD.length < 1 || WORD.length > WORD_MAX_LENGTH) {
  throw new Error(
    `entry word must be 1–${WORD_MAX_LENGTH} characters, got ${WORD.length}`,
  );
}
if (/\s/.test(WORD) || WORD.includes("\n") || WORD.includes("\r")) {
  throw new Error("entry word must be a single line with no whitespace");
}
if (new TextDecoder("utf-8").decode(new TextEncoder().encode(WORD)) !== WORD) {
  throw new Error("entry word did not survive a UTF-8 round-trip");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");

console.log(WORD);
