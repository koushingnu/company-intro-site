import React from 'react';

const MembersSection = () => {
  return (
    <div
      style={{
        height: '100vh',
        background: 'linear-gradient(to right, #FFFFFF, #764ba2)', // グラデーション
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '0 20px',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        しね
      </h1>
      <p style={{ fontSize: '1.5rem', maxWidth: '600px' }}>
        私たちは未来を創るチームです。
        シンプルで洗練されたデザインで、想いをカタチにします。
      </p>
    </div>
  );
};

export default MembersSection;
