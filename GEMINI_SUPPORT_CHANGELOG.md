# Gemini Support Added

Added optional Gemini API configuration while keeping Groq as the default active provider.

New `.env` keys:
- `AI_PROVIDER=groq` or `AI_PROVIDER=gemini`
- `GOOGLE_API_KEY`
- `GEMINI_API_KEY` optional alias
- `GEMINI_MODEL=gemini-2.5-flash`

Updated backend AI helper so main AI features can use Groq by default and Gemini when selected.
