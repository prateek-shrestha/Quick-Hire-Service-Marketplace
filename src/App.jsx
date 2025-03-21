import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation';
import GetStarted from './pages/GetStarted'; 
import SignUpClient from './pages/SignUpClient'; 
import Hero from './components/Hero';
import Offerings from './components/Offerings';
import ProfessionalProcess from "./components/ProfessionalProcess";
import ClientProcess from "./components/ClientProcess";
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Offerings />
              <ProfessionalProcess />
              <ClientProcess />
              <FAQ />
              <Footer />
            </>
          } />
          <Route path="/get-started" element={<GetStarted/>} /> 
          <Route path="/signup-client" element={<SignUpClient/>} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
