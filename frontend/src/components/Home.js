import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('reactAuthUser');
    if (user) {
      setName(JSON.parse(user)?.name);
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-4xl font-bold text-indigo-600 mb-6">
        {name ? `Hi ${name}, Welcome to the Login-Registration App!` : 'Welcome to the Login-Registration App!'}
      </h1>
      
      <div className="text-gray-700 text-center max-w-2xl space-y-4">
        <p>
          This is a full-stack web application built using <strong>React</strong> on the frontend and 
          <strong> Node.js & Express</strong> on the backend. The app demonstrates user authentication 
          with <strong>JWT (JSON Web Token)</strong> to protect routes and manage sessions.
        </p>

        <p>
          If you are registered, you can login and explore the protected sections like the "About" 
          and "Contact" pages. Otherwise, please head over to the registration page and create a new account.
        </p>

        <h2 className="text-2xl font-semibold text-indigo-600 mt-8">Features</h2>
        <ul className="list-disc list-inside text-left">
          <li>User authentication with JWT</li>
          <li>Protected routes in React</li>
          <li>Secure password hashing with Bcrypt</li>
          <li>Form validation and error handling</li>
        </ul>

        <div className="mt-6">
          <button
            onClick={() => navigate('/about')}
            className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700">
            Learn More About Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
