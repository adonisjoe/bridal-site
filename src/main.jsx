import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

function About() {
  return (
    <>
      <h1>This is an About Page</h1>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
