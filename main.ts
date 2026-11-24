// SPDX-License-Identifier: MIT
// Ship It Friday — make.fun entry
// Entry: "feat: force-pushed to main at 4:59pm on a Friday — rollback plan is just vibes and a prayer"
// Exact character count: 91

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "feat: force-pushed to main at 4:59pm on a Friday — rollback plan is just vibes and a prayer";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 159 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 159) {
  throw new Error(`entry length ${ENTRY.length} violates the 1-159 character gate`);
}
if (!ENTRY.trim()) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length}-character entry to ${join(outDir, "entry.txt")}`);
