import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { BASE_URL, routes } from "./seo-routes.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const endpoint = process.env.INDEXNOW_ENDPOINT || "https://api.indexnow.org/indexnow";
const keyFilename = process.env.INDEXNOW_KEY_FILE || "88a50604-0513-49b3-a1b9-05df8da620f3.txt";
const keyPath = path.join(projectRoot, "public", keyFilename);
const key = (await readFile(keyPath, "utf8")).trim();
const base = new URL(BASE_URL);

const urlList = routes.map(route => `${BASE_URL}${route.path === "/" ? "/" : route.path}`);
const payload = {
  host: base.host,
  key,
  keyLocation: `${BASE_URL}/${keyFilename}`,
  urlList,
};

if (process.argv.includes("--dry-run")) {
  console.log(JSON.stringify(payload, null, 2));
  process.exit(0);
}

const response = await fetch(endpoint, {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: JSON.stringify(payload),
});

const body = await response.text();

console.log(`IndexNow endpoint: ${endpoint}`);
console.log(`Submitted ${urlList.length} URLs for ${payload.host}`);
console.log(`Status: ${response.status} ${response.statusText}`);
if (body) {
  console.log(body);
}

if (![200, 202].includes(response.status)) {
  process.exitCode = 1;
}
