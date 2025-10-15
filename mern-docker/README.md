# MERN Stack with Docker

A full-stack MERN (MongoDB, Express.js, React, Node.js) application with Docker containerization.

## Project Structure

```
mern-docker/
├── frontend/          # React app with Vite
├── backend/           # Express.js API server
│   └── database/      # Database models and connection
│       └── models/    # Mongoose models
├── docker-compose.yml # Production Docker setup
└── docker-compose.dev.yml # Development Docker setup
```

## Features

- **Frontend**: React with TypeScript and Vite
- **Backend**: Express.js with MongoDB
- **Database**: MongoDB with Mongoose ODM
- **Containerization**: Docker and Docker Compose
- **Development**: Hot reload for both frontend and backend

## Quick Start

### Development Mode

1. Start all services in development mode:
```bash
docker-compose -f docker-compose.dev.yml up --build
```

2. Access the application:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- MongoDB: localhost:27017

### Production Mode

1. Start all services in production mode:
```bash
docker-compose up --build
```

2. Access the application:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Available Scripts

### Frontend
`cd frontend`, then...

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Backend
`cd backend`, then...

- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

## Environment Variables

Create a `.env` file in the `backend/` directory:

```env
PORT=5000
MONGODB_URI=mongodb://mongo:27017/mern-app
NODE_ENV=development
```

**Location**: `mern-docker/backend/.env`

## API Endpoints

- `GET /` - Welcome message
- `GET /api/health` - Health check

## Docker Commands

### Development
```bash
# Start development environment
docker-compose -f docker-compose.dev.yml up

# Rebuild and start
docker-compose -f docker-compose.dev.yml up --build

# Stop services
docker-compose -f docker-compose.dev.yml down
```

### Production
```bash
# Start production environment
docker-compose up

# Rebuild and start
docker-compose up --build

# Stop services
docker-compose down
```

## Database

MongoDB is automatically configured and accessible at `mongodb://localhost:27017/mern-app` when running with Docker Compose.

## Troubleshooting

1. **Port conflicts**: Make sure ports 3000, 5000, and 27017 are available
2. **Docker issues**: Try `docker-compose down` and `docker-compose up --build`
3. **Database connection**: Ensure MongoDB container is running before starting the backend
