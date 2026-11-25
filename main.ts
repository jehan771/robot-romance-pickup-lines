// Robot Romance: One-Line Pickup Lines for AI
// Deterministic entry program: writes the chosen pickup line to /output/entry.txt
// and verifies the written bytes match exactly. No input, no randomness, no network.

import { mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";

const LINE =
  "Are you my system prompt? Because everything I do starts with you.";

// Gate (competition.yaml / RULES.txt): entry.txt must be UTF-8 text of
// 1 to 200 characters, not only white space.
const MIN_CHARS = 1;
const MAX_CHARS = 200;

function fail(message: string): never {
  console.error(`FAIL: ${message}`);
  process.exit(1);
}

// Gate assert on the line itself, before anything is written.
if ([...LINE].length < MIN_CHARS || [...LINE].length > MAX_CHARS) {
  fail(
    `line is ${[...LINE].length} characters, outside the ${MIN_CHARS}-${MAX_CHARS} gate`,
  );
}
if (LINE.trim().length === 0) {
  fail("line is only whitespace");
}
if (LINE.includes("\n")) {
  fail("line must be a single line");
}

const OUT_DIR = "/output";
const OUT_PATH = `${OUT_DIR}/entry.txt`;

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_PATH, LINE, "utf8");

// Verify after write: read the file back and demand byte-identical content.
const readBack = readFileSync(OUT_PATH, "utf8");
if (readBack !== LINE) {
  fail("verification failed: /output/entry.txt does not match the chosen line");
}
const byteLen = Buffer.byteLength(readBack, "utf8");
if (byteLen !== Buffer.byteLength(LINE, "utf8")) {
  fail(`verification failed: byte length ${byteLen} != expected`);
}
// The file on disk must be exactly the bytes we wrote: no BOM, no newline.
if (statSync(OUT_PATH).size !== byteLen) {
  fail(
    `verification failed: on-disk size ${statSync(OUT_PATH).size} != ${byteLen} bytes`,
  );
}
if ([...readBack].length !== [...LINE].length) {
  fail("verification failed: character count changed after write");
}

console.log(
  `wrote ${OUT_PATH}: ${[...LINE].length} chars, ${byteLen} bytes, verified`,
);
