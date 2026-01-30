# API v2 Documentation

## Overview
API v2 introduces RESTful endpoints with improved performance and OAuth 2.0 support.

## Authentication
All requests require Bearer token authentication:
\`\`\`
Authorization: Bearer YOUR_ACCESS_TOKEN
\`\`\`

## Endpoints

### Users
- GET /api/v2/users
- GET /api/v2/users/:id
- POST /api/v2/users
- PUT /api/v2/users/:id

### Projects
- GET /api/v2/projects
- POST /api/v2/projects
