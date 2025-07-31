const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";

const serverFile = path.basename(__filename);
const folder = __dirname;

function getContentType(ext) {
  return {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
    ".txt": "text/plain",
  }[ext.toLowerCase()] || "application/octet-stream";
}

const server = http.createServer((req, res) => {
  let reqPath = decodeURIComponent(req.url.split("?")[0]);
  if (reqPath === "/") reqPath = "/index.html";

  const filePath = path.join(folder, reqPath);

  if (path.basename(filePath) === serverFile) {
    res.writeHead(403, { "Content-Type": "text/plain" });
    return res.end("Access denied.");
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      return res.end("404 Not Found");
    }

    const ext = path.extname(filePath);
    const contentType = getContentType(ext);

    fs.createReadStream(filePath)
      .on("open", () => {
        res.writeHead(200, { "Content-Type": contentType });
      })
      .on("error", () => {
        res.writeHead(500);
        res.end("Internal Server Error");
      })
      .pipe(res);
  });
});

server.listen(PORT, HOST, () => {
  console.log(`Serving (except ${serverFile}) on http://${HOST}:${PORT}/`);
});
