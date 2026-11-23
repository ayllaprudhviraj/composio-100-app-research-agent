"""Custom local dev server that serves the web dashboard and absorbs browser extension telemetry probes cleanly."""
import http.server
import socketserver
import os
from pathlib import Path

PORT = 8000
WEB_DIR = Path(__file__).resolve().parent / "web"

class DevHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(WEB_DIR), **kwargs)

    def do_GET(self):
        # Serve favicon SVG cleanly if /favicon.ico or /favicon.svg requested
        if self.path.startswith("/favicon."):
            favicon_path = WEB_DIR / "favicon.svg"
            if favicon_path.exists():
                self.send_response(200)
                self.send_header("Content-Type", "image/svg+xml")
                self.send_header("Cache-Control", "public, max-age=86400")
                self.end_headers()
                self.wfile.write(favicon_path.read_bytes())
                return
            else:
                self.send_response(204)
                self.end_headers()
                return

        # Browser extension tracker probe handler (zybTrackerStatisticsAction / webpage-copilot / Edge / NewRelic / extensions)
        if "hybridaction" in self.path or "zybTracker" in self.path:
            self.send_response(200)
            self.send_header("Content-Type", "application/javascript")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            self.wfile.write(b"/* 200 OK extension probe absorbed */")
            return
        return super().do_GET()

    def log_message(self, format, *args):
        # Silence extension and favicon noise from console
        if any(probe in args[0] for probe in ["hybridaction", "zybTracker", "favicon.ico"]):
            return
        super().log_message(format, *args)

if __name__ == "__main__":
    os.chdir(WEB_DIR)
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), DevHandler) as httpd:
        print(f"Dev server running at http://localhost:{PORT} (Web directory: {WEB_DIR})")
        httpd.serve_forever()
