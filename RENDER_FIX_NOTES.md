# Render Fix Notes

Fixed in this zip:
- MongoDB Atlas SSL/TLS connection for Render using certifi and safe timeout options.
- Gunicorn timeout increased in Procfile.
- Login route now shows a friendly database connection message instead of a 500 crash if MongoDB is unavailable.
- Login/register responsive CSS fixed for the real `label.role-card` template structure.
- Added `runtime.txt` for Python 3.11.9.
- Removed `.env` from the returned zip; use `.env.example` locally and Render Environment variables for deployment.

Render Environment variables needed:
- SECRET_KEY
- MONGO_URI
- MONGO_DB_NAME=vignan_1
- MONGO_TLS_ALLOW_INVALID=true
- PYTHON_VERSION=3.11.9
- GOOGLE_API_KEY or GROQ_API_KEY depending on AI_PROVIDER
- MAIL_USERNAME
- MAIL_PASSWORD
- ADMIN_REGISTER_CODE, if admin registration is needed

MongoDB Atlas settings:
- Network Access: allow 0.0.0.0/0 for Render free deployment.
- Database Access: username/password must match MONGO_URI.
