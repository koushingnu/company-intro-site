import React from 'react';

const HeroSection = () => {
  const baseStyle = {
    padding: '40px 20px',
    marginBottom: '40px',
    borderRadius: '12px',
    textAlign: 'center',
    color: '#f2f2f2',
    backgroundColor: '#1a1a1a',
    textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)',
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#111',
        padding: '60px 20px',
        fontSize: '16px',
      }}
    >
      {/* Reggae One */}
      <div style={{ ...baseStyle, fontFamily: "'Reggae One', sans-serif" }}>
        <h1 style={{ fontSize: '2.8rem', marginBottom: '1rem' }}>Reggae One</h1>
        <p style={{ fontSize: '1.2rem' }}>
          和を描き、静けさに力を込める。<br />
          力強い筆文字でインパクトを与えるスタイル。
        </p>
      </div>

      {/* Kaisei Tokumin */}
      <div style={{ ...baseStyle, fontFamily: "'Kaisei Tokumin', serif" }}>
        <h1 style={{ fontSize: '2.8rem', marginBottom: '1rem' }}>Kaisei Tokumin</h1>
        <p style={{ fontSize: '1.2rem' }}>
          和の美意識とビジネスの調和。<br />
          明朝体ベースで落ち着いた筆感のあるデザイン。
        </p>
      </div>

      {/* Yuji Syuku */}
      <div style={{ ...baseStyle, fontFamily: "'Yuji Syuku', serif" }}>
        <h1 style={{ fontSize: '2.8rem', marginBottom: '1rem' }}>Yuji Syuku</h1>
        <p style={{ fontSize: '1.2rem' }}>
          にじむような繊細さと静けさを演出。<br />
          余白を活かした和の余韻にぴったり。
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
