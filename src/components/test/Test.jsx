import React from 'react';

const Test = () => {
  return (
    <div
      style={{
        height: '100vh',
        background: 'linear-gradient(to bottom, #1c2b39, #2f4f6f)', // 紺〜藍グラデーション
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        fontFamily: "'Zen Kurenaido', sans-serif",
        textShadow: '1px 1px 4px black',
        padding: '0 20px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', letterSpacing: '0.05em' }}>
        和と未来をつなぐ
      </h1>
      <p style={{ fontSize: '1.3rem', maxWidth: '600px', lineHeight: '1.7' }}>
        日本の伝統に敬意を払いながら、現代にフィットする価値を生み出す。
      </p>

      {/* 背景装飾：斜めのライン（和風の筆っぽさ演出） */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '-50%',
          width: '200%',
          height: '100%',
          background:
            'repeating-linear-gradient(-45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 20px)',
          pointerEvents: 'none',
        }}
      ></div>
    </div>
  );
};

export default Test;

