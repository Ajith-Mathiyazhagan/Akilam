# Copilot Instructions for AI Agents

## Project Overview
- This is a React frontend bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- Main source code is in `src/`. Entry point: `src/index.js`. Main app component: `src/App.js`.
- Static assets and the main HTML template are in `public/`.

## Developer Workflows
- **Start development server:** `npm start` (runs on http://localhost:3000)
- **Run tests:** `npm test` (Jest, watch mode)
- **Build for production:** `npm run build` (outputs to `build/`)
- **Eject (advanced, irreversible):** `npm run eject`

## Project Structure & Patterns
- All React components and logic are in `src/`.
- Styling is handled via CSS files in `src/` (e.g., `App.css`, `index.css`).
- No custom service boundaries or advanced state management detected—standard React component structure.
- No backend or API integration code present in this repo.
- No project-specific conventions beyond Create React App defaults.

## Integration Points & Dependencies
- Uses standard React and Create React App dependencies (see `package.json`).
- No custom middleware, context providers, or cross-component communication patterns beyond React props/state.

## Examples
- To add a new component: create a `.js` file in `src/`, import and use it in `App.js`.
- To add global styles: edit `src/index.css`.

## References
- For more details, see `frontend/README.md` and [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

---

**If you add new architectural patterns, workflows, or conventions, update this file to help future AI agents and developers.**
