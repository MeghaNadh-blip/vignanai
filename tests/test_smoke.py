import os

os.environ.setdefault("SECRET_KEY", "test-secret-key")
os.environ.setdefault("FLASK_DEBUG", "False")
os.environ.setdefault("MONGO_URI", "mongodb://localhost:27017/")

from app import app


def test_app_is_configured():
    assert app.secret_key
    assert app.config["MAX_CONTENT_LENGTH"] == 16 * 1024 * 1024
    assert app.config["SESSION_COOKIE_HTTPONLY"] is True


def test_core_routes_exist():
    routes = {rule.rule for rule in app.url_map.iter_rules()}
    expected_routes = {
        "/",
        "/login",
        "/register",
        "/dashboard",
        "/chat",
        "/quiz",
        "/notes",
        "/planner",
        "/assignment-generator",
        "/question-generator",
        "/admin",
    }
    assert expected_routes.issubset(routes)


def test_security_headers_on_login_page():
    client = app.test_client()
    response = client.get("/login")
    assert response.headers.get("X-Content-Type-Options") == "nosniff"
    assert response.headers.get("X-Frame-Options") == "SAMEORIGIN"
