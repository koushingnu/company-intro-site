// App.jsx
import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import  CompanyInfoSection from './components/CompanyInfoSection';

function App() {
  return (
    <div>
      <HeroSection />
      <CompanyInfoSection/>
      {/* ここに今後 2ブロック目、3ブロック目を追加していきます */}
    </div>
  );
}

export default App;
