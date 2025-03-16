// src/Profile.js
import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <p>This is your profile.</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default Profile;
