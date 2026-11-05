# Adrienne Dash — My Spelman Journey

A responsive personal portfolio for Adrienne Dash, Spelman College Health Science, pre-nursing track, Class of 2027.

## Preview locally

No dependency installation or build is required. From this directory:

```sh
python3 -m http.server 5173
```

Open http://localhost:5173. The website is `index.html`, with styling in `styles.css`, behavior in `script.js`, and the supplied portrait in `assets/`.

## Deploy

This is a static site. Upload the contents of this directory to any static host. For Netlify, use no build command and publish `.`. For Vercel, select Other, leave the build command empty, and use `.` as the output directory.

For GitHub Pages: Repository → Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save. Once Pages finishes publishing, the expected project URL is https://aydantrawick27.github.io/Adrienneweb/. Pages is not enabled by this project; configure it when ready to deploy.

All local asset paths are relative so the site works beneath a project subdirectory. Fonts load from Google Fonts with Georgia/Arial fallbacks. There is no backend, form submission service, analytics, or credential requirement. The email and phone links open the visitor's mail or calling application.

## Content and editing

The personal narrative and original portrait come from the user-provided Website info PDF. The graduation year (2027) was confirmed by the user. The PDF's slide suggestions, copied search headings, and editorial instructions are not displayed as personal achievements. The contact section uses only the provided school email, personal email, and phone number. No social profiles or unsupported achievements were invented.

Edit content directly in `index.html`. Edit colors, type, spacing, responsive layouts, and print styling in `styles.css`. Replace `assets/adrienne-dash.webp` to update the portrait and update its alt text as needed.

The site includes keyboard-accessible disclosures, a skip link, semantic landmarks, mobile navigation with Escape support, reduced-motion support, descriptive image text, a reading progress indicator, and print styles that expand all disclosures. Use the browser's Print command to print or save a PDF version.

See `CAPSTONE-GUIDE.md` for a rubric mapping, suggested speaking sequence, and evidence gaps that a website alone cannot resolve.
