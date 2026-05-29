const http = require('http');
const fs = require('fs');
const path = require('path');

const BASE_DIR = '/home/z/my-project';
const STATIC_DIR = path.join(BASE_DIR, '.next/static');
const SERVER_DIR = path.join(BASE_DIR, '.next/server');
const PUBLIC_DIR = path.join(BASE_DIR, 'public');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
};

function serveFile(filePath, res) {
  return new Promise((resolve) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('Not Found');
      } else {
        const ext = path.extname(filePath);
        const mime = MIME_TYPES[ext] || 'application/octet-stream';
        res.writeHead(200, {
          'Content-Type': mime,
          'Cache-Control': 'public, max-age=3600',
        });
        res.end(data);
      }
      resolve();
    });
  });
}

// Request queue to serialize concurrent requests
let queue = [];
let processing = false;

function processQueue() {
  if (processing || queue.length === 0) return;
  processing = true;
  const { req, res } = queue.shift();
  
  handleRequest(req, res).then(() => {
    processing = false;
    processQueue();
  });
}

async function handleRequest(req, res) {
  const url = req.url.split('?')[0];
  
  let filePath;
  
  if (url === '/' || url === '') {
    filePath = path.join(SERVER_DIR, 'app/index.html');
  } else if (url.startsWith('/_next/static/')) {
    filePath = path.join(BASE_DIR, url.slice(1));
  } else if (url.startsWith('/_next/image')) {
    // Handle Next.js image optimization - redirect to original
    const params = new URL(req.url, 'http://localhost').searchParams;
    const imgUrl = params.get('url');
    if (imgUrl) {
      filePath = path.join(PUBLIC_DIR, imgUrl);
    } else {
      res.writeHead(400);
      res.end('Bad Request');
      return;
    }
  } else {
    filePath = path.join(PUBLIC_DIR, url);
  }
  
  await serveFile(filePath, res);
}

const server = http.createServer((req, res) => {
  queue.push({ req, res });
  processQueue();
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Static server running on http://0.0.0.0:3000');
});
