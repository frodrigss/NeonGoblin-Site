# NeonGoblin — Site

Demo website project for the fictional NeonGoblin — a game studio with a neon/goblin personality.

How to run locally

1. Open the project folder in your editor (e.g., VS Code).
2. Open `index.html` in the browser. For best performance (CORS and fonts), I recommend serving via a simple static server.

Example with Python (Windows PowerShell):

```powershell
python -m http.server 8000
# Then open http://localhost:8000
```

What's included

- `index.html` — site structure (hero, about, games, footer)
- `styles.css` — responsive styles, green/neon palette, pixel-like fonts
- `script.js` — interactive particles on the hero, button microinteractions
- `logo.svg` — logo (provided)

Design Notes

- Main palette: green `#228B22`, variations, and red `#e63946` for contrast
- Typography: `Press Start 2P` (pixel feel) for titles + `Inter` for body
- Accessibility: visible focus, reasonable contrast, semantic elements, and basic Aria labels.

Suggested Next Steps

- Add detailed game pages with trailers and screenshots
- Improve canvas performance (reduce low-end particles)
- Include theme preferences (light/dark mode)
