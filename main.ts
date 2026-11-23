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

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");

console.log(WORD);
