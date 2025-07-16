# NLW Agents

This is a monorepo containing both the backend and frontend applications for the NLW Agents project.

## Project Structure

```
nlw-agents/
├── back/          # Backend API (Node.js/TypeScript)
├── web/           # Frontend application (React/Vite)
└── README.md      # This file
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Docker (for database)

### Backend Setup

```bash
cd back
npm install
# Set up your environment variables
cp .env.example .env
# Start the database with Docker
docker-compose up -d
# Run database migrations
npm run db:migrate
# Start the development server
npm run dev
```

### Frontend Setup

```bash
cd web
npm install
# Start the development server
npm run dev
```

## Development

Both applications can be run simultaneously for full-stack development.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
