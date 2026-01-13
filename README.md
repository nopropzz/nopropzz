
# noPROPZZ / NORDIC_BRUTALISM_V1.4
**STATUS: PRODUCTION_STABLE**

## 01. VISION
noPROPZZ is a high-fidelity digital archive and creative agency interface. It rejects the "prop" culture of modern web design in favor of raw materials, structural honesty, and high-impact visual storytelling.

## 02. CORE ENGINE
- **Visual Builder**: Edit text and images directly in the browser (ALT+Click to navigate during edit).
- **Persistence Layer**: Dual-sync with LocalStorage (immediate) and Supabase (cloud backup).
- **Brutalist UI**: Monochrome aesthetic utilizing Archivo (Impact) and Courier Prime (Mono) typography.

## 03. QUICK START
```bash
# 1. Initialize repository
git init

# 2. Install dependencies
npm install

# 3. Environment Setup
# Create a .env file with:
# VITE_SUPABASE_URL=your_url
# VITE_SUPABASE_ANON_KEY=your_key
# API_KEY=your_gemini_api_key

# 4. Fire up the engine
npm run dev
```

## 04. SAVING YOUR PROGRESS
1. Enter **BUILD_MODE** using the toolbar at the bottom.
2. Make your visual changes (Text/Images).
3. Click **SAVE_STATE** to sync with your database.
4. Click **EXPORT** to download a `nopropzz_state.json`. 
5. Commit this JSON to your GitHub repo to version-control your site's content.

## 05. DEPLOYMENT
- **Hosting**: Optimized for [Vercel](https://vercel.com).
- **Database**: [Supabase](https://supabase.com) (Table: `site_content` with columns `id:text`, `content:text`).
- **Media**: All images are automatically compressed and base64 encoded for portability, or can be linked via external URLs.

---
*© 2026 noPROPZZ / ESTONIA / 38.9681° N, 9.4073° W*
