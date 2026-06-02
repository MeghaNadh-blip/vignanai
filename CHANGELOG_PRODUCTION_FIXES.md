# Production Fixes Applied

## 1. Session storage improved
Generated outputs are now stored in MongoDB collection `generated_outputs` instead of storing large AI text/list data directly in Flask session.

Updated generated-output flows:
- Quiz
- Question Generator
- Planner
- Notes
- Assignment Generator

Flask session now stores small latest-output IDs only.

## 2. OCR dependency safer
OCR now checks whether system Tesseract is installed before trying image/scanned-PDF OCR.
If missing, the app shows a clear user-friendly error instead of crashing.

## 3. Testing added
Added:
- `TESTING.md` manual testing checklist
- `tests/test_smoke.py` basic smoke tests
- `pytest` in requirements

Run after installing requirements:
```bash
python3 -m pytest tests/test_smoke.py
```

## Not changed intentionally
Admin registration/security flow was kept same as requested.
