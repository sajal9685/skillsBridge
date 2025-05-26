import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import ResumeBuilder from './pages/ResumeBuilder';
import Roadmap from './pages/Roadmap';
import Mentorship from './pages/Mentorship';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/resume" element={<ResumeBuilder />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/mentorship" element={<Mentorship />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
