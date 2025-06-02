// App.jsx
import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import  CompanyInfoSection from './components/CompanyInfoSection';
import  MembersSection from './components/MembersSection';

function App() {
  return (
    <div>
      <HeroSection />
      <CompanyInfoSection/>
      <MembersSection/>
    </div>
  );
}

export default App;
