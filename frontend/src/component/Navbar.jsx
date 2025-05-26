import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-600 text-white p-4 flex gap-6">
    <Link to="/">Home</Link>
    <Link to="/quiz">Skill Quiz</Link>
    <Link to="/resume">Resume</Link>
    <Link to="/roadmap">Roadmap</Link>
    <Link to="/mentorship">Mentorship</Link>
  </nav>
);

export default Navbar;
