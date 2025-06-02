import React from 'react';

const CompanyInfoSection = () => {
  const services = [
    {
      title: '飲食店向けサイト制作',
      description:
        'メニュー紹介、予約フォーム、アクセスマップなどを含めた、シンプルでわかりやすい構成に。スマホ表示にも対応します。',
    },
    {
      title: '口コミの収集・分析',
      description:
        'GoogleレビューやSNSの声を定期的に集計・可視化し、「次にやるべきこと」を一緒に見つけます。',
    },
    {
      title: 'SNSアカウントの運用代行',
      description:
        'InstagramやX（旧Twitter）などの投稿、返信、ハッシュタグ戦略など、日々の更新をサポートします。',
    },
    {
      title: 'ヒアリングと改善提案',
      description:
        '「今のサイト、見づらいと言われた」「集客に結びつかない」などのお悩みに対して、現状分析＋改善案をご提案します。',
    },
  ];

  const recommendations = [
    '店舗ビジネスを始めたばかりで、まずは シンプルなホームページ が欲しい',
    'リニューアルしたいけど、 何から手をつけたらいいかわからない',
    '口コミが気になるけど、 どう活かせばいいかわからない',
    '「人に伝わるページをつくりたい」けど 文章やデザインが苦手',
  ];

  return (
    <div
      style={{
        backgroundColor: '#1a1a1a',
        backgroundImage:
          'repeating-linear-gradient(-20deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 30px)',
        color: '#f2f2f2',
        fontFamily: "'Kaisei Tokumin', serif",
        textShadow: '1px 1px 5px rgba(0, 0, 0, 0.6)',
        padding: '60px 20px',
      }}
    >
      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          lineHeight: '1.9',
        }}
      >
        <h2 style={{ fontSize: '2.4rem', marginBottom: '1rem', textAlign: 'center' }}>
          コーシン工房にできること
        </h2>

        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', textAlign: 'center' }}>
          <strong>“役に立つ”を、かたちにする。</strong>
          <br />
          <br />
          コーシン工房は、ただの「ホームページ制作業者」ではありません。<br />
          お客様の思いや目的に寄り添いながら、「本当に使える」サイトを一緒につくっていくことを大切にしています。
        </p>

        <h3 style={{ fontSize: '1.4rem', marginTop: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
          ＼ たとえばこんなことができます ／
        </h3>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '30px',
            marginBottom: '3rem',
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                padding: '20px',
                borderRadius: '12px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
              }}
            >
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <h3 style={{ fontSize: '1.4rem', marginTop: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
          ＼ こんな方におすすめです ／
        </h3>

        <ul style={{ listStyle: 'none', paddingLeft: 0, textAlign: 'center', marginBottom: '2rem' }}>
          {recommendations.map((item, index) => (
            <li key={index} style={{ marginBottom: '1rem' }}>{item}</li>
          ))}
        </ul>

        <p style={{ fontSize: '1.1rem', textAlign: 'center' }}>
          <strong>「難しそうだから…」とあきらめないでください。</strong>
          <br />
          <br />
          小さなことから、一緒に始められます。<br />
          あなたのお店・サービスの魅力が、ちゃんと伝わるように。<br />
          私たちコーシン工房が、全力でお手伝いします。
        </p>
      </div>
    </div>
  );
};

export default CompanyInfoSection;