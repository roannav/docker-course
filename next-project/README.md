# Favorite Songs Next.js Application

A full-stack Next.js application for managing your favorite songs, built with Next.js, MongoDB, and Docker.

## Features

- Next.js 14 with App Router
- MongoDB database integration
- TypeScript support
- TailwindCSS for styling
- Docker and Docker Compose setup for both development and production
- Hot reload support in development

## Prerequisites

- Docker
- Docker Compose

## Getting Started

### Development Mode

To run the application in development mode with hot reload:

```bash
cd next-project
docker compose up next-dev
```

The development server will be available at:
- Web application: http://localhost:3001
- MongoDB: localhost:27017

### Production Mode

To run the application in production mode:

```bash
cd next-project
docker compose up next
```

The production server will be available at:
- Web application: http://localhost:3000
- MongoDB: localhost:27017

### Stopping the Application

To stop the application and remove containers:

```bash
docker compose down
```

To also remove the MongoDB volume:

```bash
docker compose down && docker volume rm next-project_mongo-data
```

## Project Structure

```
├── app/                 # Next.js app directory
├── components/         # React components
├── lib/               # Utility functions and libraries
├── models/            # MongoDB models
├── docker-compose.yaml # Docker Compose configuration
├── Dockerfile         # Production Docker configuration
├── Dockerfile.dev     # Development Docker configuration
└── package.json       # Project dependencies and scripts
```

## Environment Variables

The following environment variables are configured in the Docker Compose file:

- `MONGODB_URI`: MongoDB connection string (default: mongodb://mongo:27017/favorite-songs)

## Development vs Production

### Development Mode
- Uses `Dockerfile.dev`
- Enables hot reload
- Mounts local files into container
- Runs on port 3001

### Production Mode
- Uses multi-stage `Dockerfile`
- Optimized build process
- Smaller image size
- Runs on port 3000

## API Documentation

The application provides a RESTful API for managing songs. All API endpoints are prefixed with `/api/songs`.

### Endpoints

#### GET /api/songs
Returns a list of all songs in the database.

**Response Example:**
```json
[
  {
    "_id": "68f070bbb82886e0f9bc371f",
    "title": "Like a Rolling Stone",
    "album": "Highway 61 Revisited",
    "artist": "Bob Dylan",
    "year": 1965,
    "genre": "Folk",
    "createdAt": "2025-10-16T04:12:43.656Z",
    "updatedAt": "2025-10-16T04:12:43.656Z"
  }
]
```

#### GET /api/songs/[id]
Returns a specific song by its ID.

**Response Example:**
```json
{
  "_id": "68f070bbb82886e0f9bc371f",
  "title": "Like a Rolling Stone",
  "album": "Highway 61 Revisited",
  "artist": "Bob Dylan",
  "year": 1965,
  "genre": "Folk",
  "createdAt": "2025-10-16T04:12:43.656Z",
  "updatedAt": "2025-10-16T04:12:43.656Z"
}
```

#### POST /api/songs
Creates a new song entry.

**Request Body:**
```json
{
  "title": "Bohemian Rhapsody",
  "artist": "Queen",
  "album": "A Night at the Opera",
  "year": 1975,
  "genre": "Rock"
}
```

**Response:** Returns the created song object with generated ID and timestamps.

### Testing the API

You can test the API using curl commands:

```bash
# Get all songs
curl http://localhost:3001/api/songs

# Get a specific song
curl http://localhost:3001/api/songs/[song-id]

# Create a new song
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"title":"Bohemian Rhapsody","artist":"Queen","album":"A Night at the Opera","year":1975,"genre":"Rock"}' \
  http://localhost:3001/api/songs
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request