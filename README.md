# Portfolio

Personal portfolio site built with React and Vite.

## Tech Stack

- React 19
- Vite 6
- Tailwind CSS
- Vitest + Testing Library

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Create a local environment file in the project root:

```bash
# .env
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

3. Start development server:

```bash
npm run dev
```

## Available Scripts

- `npm run dev`: Start local Vite dev server
- `npm run build`: Build production assets into `dist`
- `npm run preview`: Preview production build locally
- `npm run test`: Run tests once with Vitest
- `npm run test:watch`: Run tests in watch mode

## Environment Variables

The contact form key is injected through Vite environment variables.

- `VITE_WEB3FORMS_ACCESS_KEY`: Web3Forms access key used by the contact form

Notes:

- This key is used on the client side and can be visible in built assets.
- Restrict allowed origins/domains in Web3Forms to reduce abuse risk.
- Rotate the key immediately if exposed.

## Deployment (GitHub Pages)

This repository uses GitHub Actions to deploy Pages from the `main` branch.

Workflow file:

- `.github/workflows/deploy.yml`

Required GitHub secret:

- `VITE_WEB3FORMS_ACCESS_KEY`

Set secret path:

- Repository Settings -> Secrets and variables -> Actions -> New repository secret

Build base path is configured as `/Portfolio/` in Vite config for GitHub Pages.

## Project Structure

```text
src/
	components/      # UI sections and shared building blocks
	context/         # Theme context
	data/            # Centralized content data
	lib/             # Theme/style tokens
	test/            # Test setup
```

