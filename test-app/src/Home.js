// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home page.</p>
      <Link to="/profile">Go to Profile</Link>
    </div>
  );
};

export default Home;
