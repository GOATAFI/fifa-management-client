import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data.message);
        // Handle successful registration and login
      } else {
        console.error(data.message);
        // Handle failed registration or invalid credentials
      }

      // Clear form fields
      setUsername('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto bg-white p-8 shadow-md rounded mt-5 mb-5">
      <h2 className="text-2xl font-bold mb-6">Register</h2>
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Enter your username"
          className="input input-bordered"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="input input-bordered"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          className="input input-bordered"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary w-full">Register</button>
      <p>Already have an account? <Link className='text-blue-500' to="/login">Please Log In</Link></p>
    </form>
  );
};

export default Register;
