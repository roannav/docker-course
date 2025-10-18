# Favorite Songs - Next.js + MongoDB (Docker Compose)

This project is a single-page CRUD app to manage favorite songs using Next.js (App Router), Tailwind CSS, MongoDB, and Docker Compose.

Services:
- next: Production Next.js built image (port 3000)
- next-dev: Development Next.js with hot reload (port 3001)
- mongo: MongoDB (port 27017)

Quick start (development):

1. From the repository root run:

```bash
docker compose up --build next-dev mongo
```

2. Open http://localhost:3001

Production build (single service):

```bash
docker compose up --build next mongo
```

Notes:
- The app seeds the MongoDB collection with 5 sample songs if the collection is empty on startup.
- The Next.js project is in `next-project/`.

# Learn Docker

Source code for hello-docker, react-docker and vite-project are from https://www.youtube.com/watch?v=GFgJkfScVNU .

I also created basic MERN and Next.js projects that use Docker.  These are different from the video tutorial above.

# Naming convention

- compose.yaml (preferred name for Docker Compose v2+)
- docker-compose.yml (originally from Docker Compose v1, but it also works for v2.)


