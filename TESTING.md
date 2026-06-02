# VFSTR/Vignan AI Testing Checklist

Use this after every important change before creating the final ZIP.

## 1. Environment check
```bash
source venv/bin/activate
python3 -m pip install -r requirements.txt
python3 -m py_compile app.py
```

## 2. Run smoke tests
```bash
python3 -m pytest tests/test_smoke.py
```

## 3. Manual feature testing
Test these pages in browser:

- Register new student account
- Login and logout
- Dashboard loads
- Chat: new chat, send message, refresh, old chat still appears
- Quiz: generate quiz, select options, see result
- Question Generator: generate output and download PDF/DOCX
- Notes: paste text, generate notes, download PDF/DOCX
- Planner: generate plan and download PDF/DOCX
- Assignment Generator: generate assignment and download PDF/DOCX
- Debugger: paste small code and get response
- Admin: login as admin, users page, feedback page

## 4. MongoDB Atlas verification
After using Atlas `MONGO_URI`, register a new account and check Atlas collections:

- `users`
- `generated_outputs`
- `question_generator`
- `feedback`

Generated quiz/notes/planner/assignment/question outputs should be stored in `generated_outputs`.
The Flask session should store only small output IDs.

## 5. OCR verification
Normal text PDF/DOCX/TXT should work without Tesseract.
Image files and scanned PDFs need Tesseract installed.
If Tesseract is missing, the app should show a clean error message instead of crashing.
