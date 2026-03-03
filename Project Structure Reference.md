# Project Structure Reference

```
project-root/
├── backend/
│   ├── src/
│   │   ├── config/            # App configuration (env variables, DB config)
│   │   │   ├── db.js
│   │   │   └── index.js
│   │   ├── controllers/       # Route logic handlers
│   │   │   └── userController.js
│   │   ├── models/            # Database models
│   │   │   └── userModel.js
│   │   ├── routes/            # Route definitions
│   │   │   └── userRoutes.js
│   │   ├── middlewares/       # Custom middlewares (auth, error handling)
│   │   │   ├── authMiddleware.js
│   │   │   └── errorHandler.js
│   │   ├── services/          # Business logic, external API calls
│   │   │   └── userService.js
│   │   ├── utils/             # Utilities/helpers
│   │   │   └── logger.js
│   │   ├── app.js             # Express app initialization
│   │   └── server.js          # Starts the server
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── public/                # Static files (images, favicon, etc.)
│   ├── src/
│   │   ├── components/        # React/Vue/Angular components
│   │   ├── pages/             # Page-level components
│   │   ├── services/          # API calls
│   │   │   └── api.js
│   │   ├── utils/             # Utility functions
│   │   ├── hooks/             # Custom React hooks
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── .env
│
├── docker/                    # Dockerfiles and docker-compose
│   ├── backend.Dockerfile
│   ├── frontend.Dockerfile
│   └── docker-compose.yml
│
├── .gitignore
├── README.md
└── package.json               # Optional root package.json for monorepo scripts
```