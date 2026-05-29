const http = require('http');
const net = require('net');

const TARGET_PORT = 3001; // Next.js runs on 3001
const PROXY_PORT = 3000;  // We expose 3000

const queue = [];
let activeRequests = 0;
const MAX_ACTIVE = 2;

const server = http.createServer((req, res) => {
  const enqueue = () => {
    queue.push({ req, res });
    processQueue();
  };
  enqueue();
});

function processQueue() {
  while (activeRequests < MAX_ACTIVE && queue.length > 0) {
    const { req, res } = queue.shift();
    activeRequests++;
    proxyRequest(req, res);
  }
}

function proxyRequest(req, res) {
  const options = {
    hostname: '127.0.0.1',
    port: TARGET_PORT,
    path: req.url,
    method: req.method,
    headers: req.headers,
  };

  const proxyReq = http.request(options, (proxyRes) => {
    res.writeHead(proxyRes.statusCode, proxyRes.headers);
    proxyRes.pipe(res, { end: true });
    proxyRes.on('end', () => {
      activeRequests--;
      processQueue();
    });
  });

  proxyReq.on('error', (err) => {
    res.writeHead(502);
    res.end('Bad Gateway');
    activeRequests--;
    processQueue();
  });

  req.pipe(proxyReq, { end: true });
}

server.listen(PROXY_PORT, '0.0.0.0', () => {
  console.log(`Proxy server on port ${PROXY_PORT} -> ${TARGET_PORT}`);
});
