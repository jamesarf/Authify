import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-4xl font-bold text-indigo-600 mb-6">About Us</h1>

      <div className="text-gray-700 text-center max-w-2xl space-y-4">
        <p>
          This login-registration application is a full-stack project designed to demonstrate
          authentication using <strong>JWT (JSON Web Token)</strong>. It includes features like
          user registration, login, and secure token-based authentication.
        </p>

        <p>
          Our frontend is built using <strong>React</strong> and <strong>Tailwind CSS</strong> to provide a 
          responsive and modern UI. The backend is powered by <strong>Node.js</strong> and <strong>Express</strong>,
          ensuring smooth integration with a MongoDB database for secure user management.
        </p>

        <p>
          This project is perfect for learning how to implement authentication systems with protected routes,
          secure password handling with Bcrypt, and JWT-based session management.
        </p>
      </div>
    </div>
  );
}

export default About;
