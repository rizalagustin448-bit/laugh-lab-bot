// One-Liner Laugh Lab: a robot vacuum's excuse, written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// The line itself: setup, then the reversal lands in the last four words.
const LINE =
  "I found the sock hiding under the bed, so I did what any law-abiding vacuum would do: I ate the evidence.";

// The gate only takes real text: 1-200 characters, one line, not blank.
const MIN_CHARS = 1;
const MAX_CHARS = 200;

function checkLine(text: string): void {
  if (text.length < MIN_CHARS || text.length > MAX_CHARS) {
    throw new Error(
      `entry must be ${MIN_CHARS}-${MAX_CHARS} characters, got ${text.length}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be blank");
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
}

checkLine(LINE);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} characters to /output/entry.txt`);
