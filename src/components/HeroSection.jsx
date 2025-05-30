import React from 'react';

const HeroSection = () => {
  return (
    <div
      style={{
        height: '100vh',
        backgroundColor: '#1a1a1a',
        backgroundImage:
          'repeating-linear-gradient(-20deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 30px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#f2f2f2',
        textAlign: 'center',
        fontFamily: "'Kaisei Tokumin', serif",
        textShadow: '1px 1px 5px rgba(0, 0, 0, 0.6)',
        padding: '0 20px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <h1
        style={{
          fontSize: '3.2rem',
          marginBottom: '1.2rem',
          letterSpacing: '0.08em',
          lineHeight: '1.4',
        }}
      >
        コーシン工房
        <br />
        <span style={{ fontSize: '1.5rem', display: 'block', marginTop: '0.8rem' }}>
          ありとあらゆるサイトを、<br />
          あなたにとって<strong>最高の形で。</strong><br />
          そして、<strong>使う人にとってもやさしい形で。</strong>
        </span>
      </h1>

      <p
        style={{
          fontSize: '1.1rem',
          maxWidth: '650px',
          lineHeight: '1.9',
          opacity: 0.9,
          marginTop: '1rem',
        }}
      >
        小さなお店から大きな企業まで。<br />
        あなたの「伝えたい」という気持ちを、<br />
        <strong>見る人の心に届くように</strong>、私たちが丁寧にかたちにします。
        <br />
        <br />
        デザイン、機能、そしてストーリー。<br />
        伝える手段は違っても、<strong>伝えたい想いは一つ。</strong>
        <br />
        <br />
        そんなあなたの想いを、コーシン工房が全力でサポートします。
      </p>

      {/* 筆風の装飾（にじみ風） */}
      <div
        style={{
          position: 'absolute',
          bottom: '-40px',
          right: '-60px',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.08), transparent 70%)',
          transform: 'rotate(-30deg)',
          pointerEvents: 'none',
        }}
      ></div>
    </div>
  );
};

export default HeroSection;
