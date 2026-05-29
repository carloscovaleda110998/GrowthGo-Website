const { createServer } = require('http');
const next = require('next');

const app = next({ 
  dir: '/home/z/my-project',
  dev: false,
  conf: {
    output: 'standalone'
  }
);

const handle = app.getRequestHandler();

let activeConnections = 0;
const MAX_CONCURRENT = 3;

app.prepare().then(() => {
  const server = createServer((req, res) => {
    if (activeConnections >= MAX_CONCURRENT) {
      res.writeHead(503, { 'Retry-After': '1' });
      res.end('Server busy, please retry');
      return;
    }
    
    activeConnections++;
    res.on('finish', () => { activeConnections--; });
    res.on('close', () => { activeConnections--; });
    
    handle(req, res);
  });
  
  server.listen(3000, '0.0.0.0', () => {
    console.log('Server running on http://0.0.0.0:3000');
  });
});
