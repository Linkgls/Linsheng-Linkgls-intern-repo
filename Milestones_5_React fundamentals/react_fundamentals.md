# Navigation with React Router

## Code for React Router

```javascript
// src/Home.js
import React from "react";
import { Link } from "react-router-dom";

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

// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Test from "./Test";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;

```

## Reflections

- **What are the advantages of client-side routing?**
  - Smooth Navigation:
    Updates the view without full page reloads, avoiding re-downloading assets (HTML/CSS/JS).
  - State Preservation:
    Preserves component state (e.g., form inputs, UI state) during navigation.
  - Reduced Server Load:
    Routes handled by the client (e.g., React Router, Vue Router) reduce server requests after initial load.
