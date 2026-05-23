# Node REST Services

A modular Node.js project for building RESTful microservices using Express and MVC architecture.

## Features
- Organized by service (e.g., user-service)
- MVC structure: models, controllers, routes
- Easy to extend with new services
- Example: User service with CRUD operations

## Project Structure
```
node-rest-services/
├── node_modules/
├── user-service/
│   ├── app.js
│   ├── controllers/
│   │   └── userController.js
│   ├── models/
│   │   └── userModel.js
│   └── routes/
│       └── userRoutes.js
├── package.json
├── .gitignore
└── README.md
```

## Getting Started

1. Install dependencies:
	```bash
	npm install
	```
2. Start a service (e.g., user-service):
	```bash
	cd user-service
	node app.js
	```

## Example User Service Endpoints
- `GET    /users`         - List all users
- `GET    /users/:id`     - Get user by ID
- `POST   /users`         - Create a new user
- `PUT    /users/:id`     - Update a user
- `DELETE /users/:id`     - Delete a user

## Notes
- All data is in-memory (no database)
- Add more services by following the same folder structure
- Use environment variables in a `.env` file if needed
## TEST IN REST Client
- POST http://localhost:3000/users
- payload body : { "id":1, "name":"keshav", "email":"some" }

- GET  http://localhost:3000/users
- response body : { "id":1, "name":"keshav", "email":"some" }
---
MIT License
"# node-rest-services" 
