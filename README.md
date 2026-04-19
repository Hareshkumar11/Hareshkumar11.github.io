# Hareshkumar Jadav - GitHub Pages Website

This is a static academic website that can be hosted directly on GitHub Pages.

## Files
- `index.html` - homepage
- `publications.html` - publications page
- `achievements.html` - awards and achievements
- `workshops.html` - workshops and conferences
- `style.css` - styling
- `assets/profile.jpg` - profile photo extracted from the CV
- `assets/CV.pdf` - CV file

## Fastest way to publish on GitHub Pages

### Option 1: Personal site
Use this if you want the site URL to be:
`https://YOUR-USERNAME.github.io/`

1. Log in to GitHub.
2. Create a **new public repository** named exactly:
   `YOUR-USERNAME.github.io`
3. Upload all files from this folder into that repository.
4. Wait 1-3 minutes.
5. Open:
   `https://YOUR-USERNAME.github.io/`

### Option 2: Project site
Use this if you want the site URL to be something like:
`https://YOUR-USERNAME.github.io/haresh-website/`

1. Create a new public repository, for example `haresh-website`.
2. Upload all files from this folder into that repository.
3. Open the repository on GitHub.
4. Go to **Settings > Pages**.
5. Under **Build and deployment**, choose:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/root`
6. Click **Save**.
7. Wait 1-3 minutes.
8. GitHub will show the website link.

## How to preview on your computer
You do **not** need to run any backend.

### Easiest preview
Just open `index.html` in your browser.

### Better preview with a local server
If you have Python installed:

```bash
cd haresh_github_site
python3 -m http.server 8000
```

Then open:
`http://localhost:8000`

## What you may want to edit later
- Replace the LinkedIn link if needed.
- Add GitHub, Google Scholar, ResearchGate, or personal links.
- Update the biography text.
- Add more pages such as Teaching, Talks, or Projects.
