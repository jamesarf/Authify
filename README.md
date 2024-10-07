
# Login Registration Application

This is a full-stack web application for user login and registration, using React on the frontend and Node.js with Express on the backend. This project demonstrates a simple authentication system with JWT (JSON Web Token) for protected routes.

## Live Demo

You can check the live version of the project here:  
[Live Demo](https://jamesarf.github.io/login-registration/)

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
- Deployed via GitHub Pages.

### Server Side (Node.js & Express)
- Express: v4.x
- MongoDB with Mongoose for database
- Bcrypt for password hashing
- JWT for token-based authentication
- dotenv for environment variables
- CORS for cross-origin requests
- Deployed via Render.

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB database
- Install dependencies using `npm install` for both client and server.

### Installation

1. Clone the repository:
    ```
    git clone https://github.com/jamesarf/login-registration.git
    ```

2. Navigate to the project directory:
    ```
    cd login-registration
    ```

3. Install the dependencies for the client:
    ```
    cd login-registration-client
    npm install
    ```

4. Install the dependencies for the server:
    ```
    cd ../login-registration-server
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
    cd login-registration-server
    npm run start
    ```

2. Start the frontend:
    ```
    cd login-registration-client
    npm run start
    ```

3. The frontend will be running on `http://localhost:3000` and the backend on `http://localhost:5001`.

### API Endpoints

- `POST /register`: Register a new user
- `POST /login`: Authenticate and log in a user

## File Structure

```
login-registration/
├── login-registration-client/  # Frontend (React)
│   ├── public/
│   ├── src/
│   │   ├── components/         # React components (Home, Login, Register, About, Contact, Navbar, ProtectedRoute)
│   │   ├── App.js              # Main App component
│   │   ├── index.js            # Entry point
│   ├── package.json
│   └── tailwind.config.js
├── login-registration-server/ # Backend (Node.js & Express)
│   ├── db/                    # Database configurations and models
│   ├── index.js               # Entry point, API route handlers
│   ├── package.json
│   └── .env                   # Environment variables (JWT secret, MongoDB URI)
└── README.md
```
## Usage

1. **Register a New User**
   - Go to `http://localhost:3000/register`.
   - Provide a name, email, and password to create a new account.

2. **Login**
   - Go to `http://localhost:3000/login`.
   - Use your registered email and password to log in.
   - After logging in, you can access protected routes like About and Contact.

3. **Logout**
   - Click on the Logout button in the navigation bar to log out and clear the user session from localStorage.

## Backend Routes

- **POST** `/register`: Registers a new user.
- **POST** `/login`: Logs in a user and returns a JWT token.
- **GET** `/`: Base route to check server status.

## Frontend Routes

- `/`: Home page (Public).
- `/login`: Login page (Public).
- `/register`: Registration page (Public).
- `/about`: About page (Protected, requires login).
- `/contact`: Contact page (Protected, requires login).

