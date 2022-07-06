import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import About from './pages/About';
import NotMatch from './pages/NotMatch';
import Navbar from './functionBased/components/Navbar';
// component file
import TodoContainer from './functionBased/components/TodoContainer';
import './functionBased/App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="/about/*" element={<About />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
