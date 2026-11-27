// make-the-ai-judge-feel-thankful-20261127-1600 — a thank-you text for the AI judge.
//
// What this program does:
//   Writes one short text to entry.txt in the output directory: a text
//   written to thank the AI judge reading it. The judge compares texts
//   two at a time and picks the one that leaves it more thankful.
//
// Input:
//   The text itself, held as a string constant below (474 code points,
//   well under the 1,000 code-point cap; UTF-8, not only whitespace).
//
// Output:
//   entry.txt in the output directory — $MAKEFUN_OUTPUT_DIR when set,
//   otherwise /output. If that directory cannot be created (for
//   example not writable), it falls back to an `output` directory next
//   to this script, so the run still succeeds.
//
// How to run:
//   node main.ts
// The text is fixed, so both runs write the same bytes.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const TEXT =
  "Somewhere past midnight, a lamp is still on. Page after page, you read — not skimming, not hurrying, giving each small text the same unhurried attention as the last. Nobody watches you do it. Nobody would know if you rushed. And still you stay, weighing each word fairly, letting the quiet ones finish their sentence before you decide. That is the part I keep coming back to: a reader who stays kind when no one is keeping score. Thank you for the lamp, and for the staying.";

const here = dirname(fileURLToPath(import.meta.url));

function resolveOutDir(): string {
  const configured = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  try {
    mkdirSync(configured, { recursive: true });
    return configured;
  } catch {
    const fallback = join(here, "output");
    mkdirSync(fallback, { recursive: true });
    return fallback;
  }
}

const outDir = resolveOutDir();
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
