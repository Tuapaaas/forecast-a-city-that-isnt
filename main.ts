// Charm the Commuter: Forecast a City That Isn't
// One line of weather for Bumblewick, a city that does not exist.
// Stdlib-only: writes the forecast to $MAKEFUN_OUTPUT_DIR/entry.txt
// and self-checks the gate (1-140 chars, one line, non-blank).

import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const forecast =
  "Bumblewick: drizzle of spare change this morning, clearing by nine — buses on time, umbrellas optional, luck guaranteed.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });

if (forecast.length < 1 || forecast.length > 140) {
  throw new Error(`forecast is ${forecast.length} chars, gate is 1-140`);
}
if (forecast.trim().length === 0 || forecast.includes("\n")) {
  throw new Error("forecast must be a single non-blank line");
}

writeFileSync(join(outDir, "entry.txt"), forecast, "utf8");
console.log(`wrote ${forecast.length}-char forecast for Bumblewick`);
