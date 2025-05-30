import React from 'react';

const CompanyInfoSection = () => {
    return (
      <div
        style={{
          backgroundColor: '#fff',
          color: '#1a1a1a',
          fontFamily: "'Kaisei Tokumin', serif",
          padding: '60px 20px',
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: '1.9',
        }}
      >
        <h2 style={{ fontSize: '2.4rem', marginBottom: '1rem', textAlign: 'center' }}>
          コーシン工房にできること
        </h2>
  
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', textAlign: 'center' }}>
          <strong>“役に立つ”を、かたちにする。</strong>
          <br /><br />
          コーシン工房は、ただの「ホームページ制作業者」ではありません。<br />
          お客様の思いや目的に寄り添いながら、「本当に使える」サイトを一緒につくっていくことを大切にしています。
        </p>
  
        <h3 style={{ fontSize: '1.4rem', marginTop: '2rem', marginBottom: '1rem', textAlign: 'center' }}>
          ＼ たとえばこんなことができます ／
        </h3>
        <ul style={{ paddingLeft: '1.2rem', marginBottom: '2rem' }}>
          <li style={{ marginBottom: '1.5rem' }}>
            <strong>飲食店向けサイト制作：</strong><br />
            メニュー紹介、予約フォーム、アクセスマップなどを含めた、シンプルでわかりやすい構成に。スマホ表示にも対応します。
          </li>
          <li style={{ marginBottom: '1.5rem' }}>
            <strong>口コミの収集・分析：</strong><br />
            GoogleレビューやSNSの声を定期的に集計・可視化し、「次にやるべきこと」を一緒に見つけます。
          </li>
          <li style={{ marginBottom: '1.5rem' }}>
            <strong>SNSアカウントの運用代行：</strong><br />
            InstagramやX（旧Twitter）などの投稿、返信、ハッシュタグ戦略など、日々の更新をサポートします。
          </li>
          <li>
            <strong>ヒアリングと改善提案：</strong><br />
            「今のサイト、見づらいと言われた」「集客に結びつかない」などのお悩みに対して、現状分析＋改善案をご提案します。
          </li>
        </ul>
  
        <h3 style={{ fontSize: '1.4rem', marginTop: '2rem', marginBottom: '1rem', textAlign: 'center' }}>
          ＼ こんな方におすすめです ／
        </h3>
        <ul style={{ paddingLeft: '1.2rem', marginBottom: '2rem' }}>
          <li style={{ marginBottom: '1rem' }}>店舗ビジネスを始めたばかりで、まずは <strong>シンプルなホームページ</strong> が欲しい</li>
          <li style={{ marginBottom: '1rem' }}>リニューアルしたいけど、 <strong>何から手をつけたらいいかわからない</strong></li>
          <li style={{ marginBottom: '1rem' }}>口コミが気になるけど、 <strong>どう活かせばいいかわからない</strong></li>
          <li>「人に伝わるページをつくりたい」けど <strong>文章やデザインが苦手</strong></li>
        </ul>
  
        <p style={{ fontSize: '1.1rem', textAlign: 'center' }}>
          <strong>「難しそうだから…」とあきらめないでください。</strong><br /><br />
          小さなことから、一緒に始められます。<br />
          あなたのお店・サービスの魅力が、ちゃんと伝わるように。<br />
          私たちコーシン工房が、全力でお手伝いします。
        </p>
      </div>
    );
  };
  
  export default CompanyInfoSection;
  