// App.jsx
import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import Test from './components/test/Test';

function App() {
  return (
    <div>
      <HeroSection />
      <Test/>
      {/* ここに今後 2ブロック目、3ブロック目を追加していきます */}
    </div>
  );
}

export default App;
