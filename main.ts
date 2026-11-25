// Funniest One-Line Out-of-Office Reply — v1 entry
// Deterministically writes one funny out-of-office auto-reply, one line,
// 1–160 characters, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My out-of-office reply gained sentience and has already been promoted above me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
