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
    <div className='flex items-center justify-center text-indigo-600 min-h-screen font-bold text-6xl'>
      <h1>{name?(`Hi ${name}`): `Home Page`}</h1>
    </div>
  );
}

export default Home;
