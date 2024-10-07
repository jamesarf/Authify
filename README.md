
# Login Registration Application

This is a full-stack web application for user login and registration, using React on the frontend and Node.js with Express on the backend. This project demonstrates a simple authentication system with JWT (JSON Web Token) for protected routes.

## Features

- User authentication with JWT (JSON Web Token)
- User registration and login
- Protected routes in React (frontend)
- Token-based authentication with JWT on the server
- Basic form validation

## Technologies Used

### Client Side (React)
- React: v18.3.1
- React Router: v6.23.1
- Axios: v1.7.2
- Tailwind CSS: v3.4.13
- React Scripts: v5.0.1

### Server Side (Node.js & Express)
- Express: v4.x
- MongoDB with Mongoose for database
- Bcrypt for password hashing
- JWT for token-based authentication
- dotenv for environment variables
- CORS for cross-origin requests

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB database
- Install dependencies using `npm install` for both client and server.

### Installation

1. Clone the repository:
    ```
    git clone https://github.com/your-username/login-registration-app.git
    ```

2. Navigate to the project directory:
    ```
    cd login-registration-app
    ```

3. Install the dependencies for the client:
    ```
    cd client
    npm install
    ```

4. Install the dependencies for the server:
    ```
    cd ../server
    npm install
    ```

5. Setup environment variables by creating a `.env` file in the server directory:
    ```
    JWT_SECRET=your_secret_key
    MONGO_URI=mongodb://localhost:27017/your_db
    ```

### Running the Application

1. Start the backend server:
    ```
    cd server
    npm run start
    ```

2. Start the frontend:
    ```
    cd client
    npm run start
    ```

3. The frontend will be running on `http://localhost:3000` and the backend on `http://localhost:5001`.

### API Endpoints

- `POST /register`: Register a new user
- `POST /login`: Authenticate and log in a user

## File Structure

```
login-registration-app/
├── client/                    # Frontend (React)
│   ├── public/
│   ├── src/
│   │   ├── components/         # React components (Home, Login, Register, About, Contact, Navbar)
│   │   ├── App.js              # Main App component
│   │   ├── index.js            # Entry point
│   ├── package.json
│   └── tailwind.config.js
├── server/                    # Backend (Node.js & Express)
│   ├── db/                    # Database configurations and models
│   ├── routes/                # API route handlers
│   ├── index.js               # Entry point
│   ├── package.json
│   └── .env                   # Environment variables (JWT secret, MongoDB URI)
└── README.md
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
