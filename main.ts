// Two Lines to Your Past Self — u-suga-two-lines-to-your-past-self-f36c83ca
//
// Writes exactly two lines to /output/entry.txt:
//   Line 1: a warning to my past self about one specific moment (one sentence).
//   Line 2: one sentence on why that moment mattered and what changed because of it.
//
// Deterministic: no network, no clock, no randomness, no input files.
// Self-checks the gate before writing: UTF-8 text, exactly two lines,
// 1–280 characters total, not only white space.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The night you want to text your ex 'I miss you' at 1 a.m., put your phone in the freezer instead.\n" +
  "You woke up sober, single and dignified, and the freezer trick became the only life advice you ever trusted.\n";

function main(): void {
  const lines = ENTRY.split("\n");
  // ENTRY ends with a trailing newline, so the split leaves one empty tail.
  if (lines.length !== 3 || lines[2] !== "") {
    throw new Error(`expected exactly 2 lines, got ${lines.length - 1}`);
  }
  const body = lines.slice(0, 2).join("\n");
  if (body.length < 1 || body.length > 280) {
    throw new Error(`entry is ${body.length} chars, gate allows 1–280`);
  }
  if (body.trim().length === 0) {
    throw new Error("entry is only white space");
  }
  for (const [i, line] of lines.slice(0, 2).entries()) {
    // One sentence per line: exactly one sentence-ending period, at the end.
    const periods = (line.match(/\./g) ?? []).length;
    if (periods !== 1 || !line.endsWith(".")) {
      throw new Error(`line ${i + 1} is not exactly one sentence`);
    }
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
  console.log(`wrote /output/entry.txt (${body.length} chars, 2 lines)`);
}

main();
