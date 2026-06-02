# Vignan AI V2

A separate premium rebuild of the VFSTR academic AI platform.

## Core Features
- AI Chat with chat history
- Quiz Generator with interactive scoring
- Question Generator
- Notes Generator
- Assignment Generator
- Planner
- Debugger
- Analytics, Leaderboard, Feedback

## V2 UI Changes
- Real sidebar app shell
- Premium dashboard
- Dark/light mode
- Modern upload center
- ChatGPT-style chat workspace
- Interactive quiz UX
- Unified typography, cards, and responsive layout

## Run
```bash
python3 -m venv venv
source venv/bin/activate
python3 -m pip install -r requirements.txt
cp .env.example .env
python3 app.py
```

## Auth updates
- Public registration supports Student accounts.
- Admin registration requires `ADMIN_REGISTER_CODE` from `.env`.
- Forgot password uses a 6-digit email OTP. Configure `MAIL_USERNAME` and `MAIL_PASSWORD` in `.env`.
- For Gmail, create an App Password and use that as `MAIL_PASSWORD`.

## Production Safety Notes

Before deployment:
- Keep `.env` private. Never upload it to GitHub.
- Set a strong `SECRET_KEY` in `.env`.
- Set `FLASK_DEBUG=False`.
- Use MongoDB Atlas for `MONGO_URI` when deploying online.
- Install Tesseract OCR on the system if image/scanned PDF OCR is required.

## Run Locally

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
python3 app.py
```

## MongoDB Atlas
Set `MONGO_URI` in `.env` using your Atlas connection string. Keep the real password only in `.env`.

Example:
```env
MONGO_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
```

Generated quiz, notes, planner, assignment, and question outputs are stored in MongoDB `generated_outputs`. Flask session stores only small IDs.

## OCR Notes
Text-based PDFs, DOCX, PPTX, and TXT files work normally. Image files and scanned PDFs require system Tesseract OCR.

macOS install:
```bash
brew install tesseract
```

If Tesseract is missing, the app shows a friendly error instead of crashing.

## Testing
```bash
python3 -m py_compile app.py
python3 -m pytest tests/test_smoke.py
```
See `TESTING.md` for the full manual checklist.


## AI Provider Configuration

The app uses **Groq** by default. Gemini support is also ready.

Default active setup:

```env
AI_PROVIDER=groq
GROQ_API_KEY=your_groq_api_key_here
GROQ_MODEL=llama-3.1-8b-instant
```

Optional Gemini setup:

```env
AI_PROVIDER=gemini
GOOGLE_API_KEY=your_gemini_api_key_here
# or
GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_MODEL=gemini-2.5-flash
```

Do not commit real API keys to GitHub. Keep them only in `.env`.
