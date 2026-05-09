# E-portfolio

React (Vite) frontend and Express backend in an npm workspace monorepo.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)

## Installation

From the repository root:

```bash
npm install
```

Copy environment examples and adjust as needed:

```bash
cp client/.env.example client/.env
cp server/.env.example server/.env
```

Ensure MongoDB is available if you use the default `MONGODB_URI` in `server/.env`.

## Usage

**Run client and server together** (typical local dev):

```bash
npm run dev
```

**Run workspaces separately** (optional):

```bash
npm run client
npm run server
```

**Production build (client only):**

```bash
npm run build --workspace=client
```

## Deployment

Deployment is automated with [Vercel](https://vercel.com/). Pushing to the `main` branch triggers a production deploy. Configure project settings and environment variables in the Vercel dashboard to match your API URL, database connection, and any other secrets.
