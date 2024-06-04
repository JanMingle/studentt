import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme'; // Import your custom theme
import './App.css';
import Sidenav from './components/Sidenav';
import HomePage from './components/HomePage';
import MyBursariesPage from './components/MyBursariesPage';
import ApplyForBursaryPage from './components/ApplyForBursaryPage';
import BursaryApplicationPage from './components/BursaryApplicationPage'; // Import the new component
import ListMovies from './components/ListMovies';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="app-container">
          <Sidenav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/my-bursaries" element={<MyBursariesPage />} />
            <Route path="/apply" element={<ApplyForBursaryPage />} />
            <Route path="/bursary-application" element={<BursaryApplicationPage />} /> {/* Add route for BursaryApplicationPage */}
            <Route path="/list-movies" element={<ListMovies />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
