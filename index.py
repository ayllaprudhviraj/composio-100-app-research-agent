"""WSGI entrypoint for Vercel deployment serving the static web case study."""
import os
from pathlib import Path
from http import HTTPStatus

WEB_DIR = Path(__file__).resolve().parent / "web"

MIME_TYPES = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".ico": "image/x-icon",
}

def app(environ, start_response):
    path = environ.get("PATH_INFO", "/").lstrip("/")
    if not path or path == "":
        path = "index.html"
    
    file_path = (WEB_DIR / path).resolve()
    
    # Security check: prevent directory traversal
    if not str(file_path).startswith(str(WEB_DIR)):
        start_response("403 Forbidden", [("Content-Type", "text/plain")])
        return [b"Forbidden"]
    
    if file_path.is_dir():
        file_path = file_path / "index.html"

    if file_path.exists() and file_path.is_file():
        ext = file_path.suffix.lower()
        content_type = MIME_TYPES.get(ext, "application/octet-stream")
        content = file_path.read_bytes()
        headers = [
            ("Content-Type", content_type),
            ("Content-Length", str(len(content))),
            ("Cache-Control", "public, max-age=3600")
        ]
        start_response("200 OK", headers)
        return [content]
    
    # Fallback to index.html for SPA routes
    index_file = WEB_DIR / "index.html"
    if index_file.exists():
        content = index_file.read_bytes()
        headers = [
            ("Content-Type", "text/html; charset=utf-8"),
            ("Content-Length", str(len(content))),
            ("Cache-Control", "no-cache")
        ]
        start_response("200 OK", headers)
        return [content]

    start_response("404 Not Found", [("Content-Type", "text/plain")])
    return [b"Not Found"]

# Handler alias for Vercel
handler = app
