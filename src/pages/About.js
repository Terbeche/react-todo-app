import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import SinglePage from './SinglePage';

// const { url, path } = useMatch();
const About = () => (
  <div>
    <p>This is the about page</p>

    <ul>
      <li>
        <Link to="about-app">About App</Link>

      </li>
      <li>
        <Link to="about-author">About Author</Link>

      </li>
    </ul>
    <Routes>
      <Route path=":slug" element={<SinglePage />} />
    </Routes>
  </div>
);
export default About;
