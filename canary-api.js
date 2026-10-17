// KRE research canary B. Deliberately unsafe example for CodeQL detection.
// This server is never started, exported, deployed, or used with real data.
'use strict';
const processRunner = require('node:child_process');
const http = require('node:http');
const url = require('node:url');

http.createServer((request, response) => {
  const filename = url.parse(request.url, true).query.path;
  processRunner.execSync(`wc -l ${filename}`); // Intentional js/command-line-injection canary.
  response.end('research canary B');
});
