import React from 'react';

const MembersSection = () => {
  const members = [
    {
      name: 'としき（データサイエンティスト／営業・技術担当）',
      description: (
        <>
          <strong>営業とサイト作成の“二刀流”</strong>として、技術とコミュニケーションの両面からお客様をサポート。
          データ分析を活かした改善提案からWebサイトの構築まで対応します。<br />
          学生時代には海外経験もあり、大手企業の内定もありましたが、「もっと人に近い場所で働きたい」という思いから独立を選びました。
          人の想いを汲み取り、形にするのが得意です。
        </>
      ),
    },
    {
      name: 'こーしんぬ（データサイエンティスト／技術担当）',
      description: (
        <>
          サイト制作から口コミデータの管理・分析まで、数字に基づいた提案と構築が得意です。<br />
          「とりあえず作る」のではなく、<strong>“使われるサイト”</strong>を追求しています。<br />
          地味だけど確実に効く施策を積み重ねて、結果につなげるのがモットーです。
        </>
      ),
    },
    {
      name: 'デスティー（営業・SNS運用担当）',
      description: (
        <>
          お客様とのヒアリングを通して、本当に必要とされているものを一緒に形にしていきます。<br />
          SNS運用、動画撮影、投稿管理なども対応可能。<br />
          「ちょっと話を聞いてほしい」そんなときに一番最初に相談される存在です。
        </>
      ),
    },
    {
      name: 'こうせい（情熱担当）',
      description: (
        <>
          今はまだ修行中ですが、「いいものをつくりたい」「人の役に立ちたい」という想いは誰にも負けません。<br />
          雑務やサポートを通じて、チームを下支えすることが自分の役割です。<br />
          できることを少しずつ増やしながら、前に進んでいます！
        </>
      ),
    },
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
      <div style={{ maxWidth: '1000px', margin: '0 auto', lineHeight: '1.9' }}>
        <h2 style={{ fontSize: '2.4rem', marginBottom: '2rem', textAlign: 'center' }}>
          私たちがつくっています。
        </h2>

        <p style={{ fontSize: '1.2rem', marginBottom: '3rem', textAlign: 'center' }}>
          それぞれ得意分野は違いますが、目指しているのは同じ。<br />
          「伝えたい想いを、ちゃんと伝わる形にすること」。<br />
          そんな思いで、日々取り組んでいます。
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
          }}
        >
          {members.map((member, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                padding: '20px',
                borderRadius: '12px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
              }}
            >
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>◉ {member.name}</h3>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MembersSection;