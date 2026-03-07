# Project structure reference

Note: This is only for reference, this template may not strictly use the structures given below.

## Options

There are multiple ways to structure a project. Two common methods are given below.

### Option 1: layered architecture (small to medium apps)

```
project-root/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js
│   │   │   └── index.js
│   │   ├── controllers/
│   │   │   └── userController.js
│   │   ├── models/
│   │   │   └── userModel.js
│   │   ├── routes/
│   │   │   └── userRoutes.js
│   │   ├── middlewares/
│   │   │   ├── authMiddleware.js
│   │   │   └── errorHandler.js
│   │   ├── services/
│   │   │   └── userService.js
│   │   ├── utils/
│   │   │   └── logger.js
│   │   ├── app.js
│   │   └── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── utils/
│   │   ├── hooks/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── .env
│
├── docker/
│   ├── backend.Dockerfile
│   ├── frontend.Dockerfile
│   └── docker-compose.yml
│
├── .gitignore
├── README.md
└── package.json
```

### Option 2: feature-first approach (large apps)

```
project-root/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── modules/
│   │   │   ├── auth/
│   │   │   │   ├── auth.controller.js
│   │   │   │   ├── auth.service.js
│   │   │   │   ├── auth.routes.js
│   │   │   │   └── auth.model.js
│   │   │   ├── users/
│   │   │   │   ├── users.controller.js
│   │   │   │   ├── users.service.js
│   │   │   │   ├── users.routes.js
│   │   │   │   └── users.model.js
│   │   │   └── products/
│   │   │       └── ... # Same pattern
│   │   ├── middlewares/
│   │   ├── utils/
│   │   ├── app.js
│   │   └── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── modules/
│   │   │   ├── auth/
│   │   │   │   ├── components/
│   │   │   │   ├── pages/
│   │   │   │   └── api.js
│   │   │   ├── users/
│   │   │   └── products/
│   │   ├── common/
│   │   └── App.js
│   └── package.json
└── README.md
```

## Common folder naming convensions

### config/

Stores configuration code and settings used by the application, such as database connections, environment variables, or API settings. These files provide shared configuration that other parts of the application import.

### controllers/

Handles HTTP request and response logic. Controllers read request data (req.body, req.params), call services or models, and send responses (res.json, res.status). They act as the bridge between routes and the rest of the application.

### models/

Contains database-related code. Models perform queries such as creating, reading, updating, and deleting data. Each model usually corresponds to a database table and provides functions for interacting with stored data.

### routes/

Contains URL definitions and maps HTTP endpoints to controller functions. Route files define which function runs for a given request (for example POST /login or GET /users). They should stay small and mainly connect endpoints to controllers without containing business logic or database code.

### scripts/

Contains standalone programs that are run manually rather than as part of the server. Examples include database initialization, migrations, or data imports. These scripts usually run once or occasionally instead of on every server start.

### services/

Contains business logic and core application behavior. Services implement the actual operations the application performs, such as authentication, validation, or complex processing. They coordinate models and other utilities but do not deal with HTTP requests directly.
