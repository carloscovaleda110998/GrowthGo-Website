import http.server
import os
import sys

PORT = 3000
BASE = '/home/z/my-project'

class Handler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        # Remove query string
        path = path.split('?')[0]
        
        if path == '/' or path == '':
            return os.path.join(BASE, '.next/server/app/index.html')
        elif path.startswith('/_next/static/'):
            return os.path.join(BASE, path.lstrip('/'))
        elif path.startswith('/_next/image'):
            # Parse URL param
            from urllib.parse import urlparse, parse_qs
            parsed = urlparse(self.path)
            params = parse_qs(parsed.query)
            url = params.get('url', [''])[0]
            if url:
                return os.path.join(BASE, 'public', url.lstrip('/'))
            return ''
        else:
            return os.path.join(BASE, 'public', path.lstrip('/'))
    
    def end_headers(self):
        # Add CORS headers
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, OPTIONS')
        super().end_headers()

os.chdir(BASE)
with http.server.HTTPServer(('0.0.0.0', PORT), Handler) as httpd:
    print(f'Serving on port {PORT}')
    httpd.serve_forever()
