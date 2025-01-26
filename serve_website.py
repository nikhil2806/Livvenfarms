import http.server
import socketserver

# Define the port you want to use
PORT = 8000

# Change to the directory where your HTML, CSS, and JS files are located
import os
os.chdir(os.path.dirname(os.path.abspath(__file__)))

# Create a simple HTTP server
Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving at http://localhost:{PORT}")
    httpd.serve_forever()