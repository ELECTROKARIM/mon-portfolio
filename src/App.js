import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
