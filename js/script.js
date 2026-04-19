  document.querySelector(".typewriter").textContent =
        "A Full Stack Developer";

      const buttons = document.querySelectorAll(".read-more-btn");
      buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const currentActivity = btn.parentElement;
          const wasActive = currentActivity.classList.contains("active");

          buttons.forEach((b) => b.parentElement.classList.remove("active"));

          if (!wasActive) {
            currentActivity.classList.add("active");
          }
        });
      });
      
const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About Me",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact Us"
    },
    hero: {
      greeting: "Hi, I'm Kiran",
      lastname: "Tamang",
      role: "A Full Stack Developer",
      description: `I'm Kiran, a web developer studying at <strong><a href="https://setouchicollege.com/" target="_blank" style="text-decoration: none; color: #ff9f1c">Nihon IT Business College</a></strong> in Japan. This portfolio shows my work and projects in web development`,
      follow: "Follow me on"
    },
    about: {
      title: "About Me",
      subtitle: "Full Stack Developer",
      content: `My name is Kiran Tamang, and I am 26 years old from Nepal. I have always been passionate about learning new cultures and languages, which led me to Japan. I completed a two-year Japanese language program in Okinawa, where I gained not only language skills but also valuable cultural experiences. Currently, I am living in Okayama and pursuing my studies at <strong><a href="https://setouchicollege.com/" target="_blank" style="text-decoration: none; color: #ff9f1c">Nihon IT Business College</a></strong>. My focus is on developing skills in information technology and business, as I believe IT plays a key role in shaping the future.`,
      readmore: "read more",
      additional: "Outside of academics,My greatest strength is my strong sense of responsibility and commitment to seeing tasks through to completion. When I am assigned a job or project, I actively seek solutions and work to complete it, regardless of the challenges involved. For example, during a hackathon, I led a team in developing a multilingual reservation website for sightseeing spots in Okayama Prefecture, based on the theme of Okayama Ecotourism. Through this experience of solving problems under time constraints and collaborating as a team to build a system, I not only improved my programming skills but also learned the importance of teamwork in achieving success. I would like to leverage these experiences to contribute to your company as a responsible and dedicated team member while applying my technical skills. "
    },
    skills: {
      title: "Skills & Languages",
      html: {
        title: "HTML",
        desc: "I have experience with HTML and use it to build clean, organized, and easy-to-read web pages that form the foundation of websites."
      },
      css: {
        title: "CSS",
        desc: "I have experience with CSS and use it to style web pages, making them visually appealing, responsive, and easy to use"
      },
      php: {
        title: "PHP",
        desc: "I use PHP to build dynamic and powerful back-end functionalities. With strong knowledge of server-side scripting, I can create custom features, manage databases, and ensure secure, efficient performance."
      },
      laravel: {
        title: "Laravel",
        desc: "I have experience with Laravel to build web applications efficiently, using its features for routing, databases, and backend logic."
      },
      python: {
        title: "Python",
        desc: "I use Python for versatile programming needs, from scripting and automation to data analysis and web development. Its simple syntax and powerful libraries enable me to build efficient, scalable solutions."
      },
      django: {
        title: "Django",
        desc: "I utilize Django, a high-level Python web framework, to build secure and maintainable web applications rapidly. I appreciate its \"batteries-included\" philosophy for creating complex, database-driven websites."
      },
      readmore: "Read More"
    },
    projects: {
      title: "Projects",
      okayama: {
        title: "Okayama Landing Page",
        desc: "This project is a landing page for Okayama, Japan, designed to showcase the city's culture, attractions, and cuisine. The page provides information about popular destinations such as Kurashiki, Okayama City, and Setouchi, along with local food highlights."
      },
      laravel: {
        title: "Laravel Landing Page",
        desc: "The project is complete and available on GitHub, but it has not yet been deployed online. Built with Laravel PHP framework Clean, modern, and responsive design. Easy-to-update blog and content sections. Contact form ready for backend integration."
      },
      coffee: {
        title: "Laravel Coffee",
        desc: "The project is complete and available on GitHub, but not yet deployed online. Table booking with available time slots Responsive design for mobile and desktop. Admin panel to manage bookings and availability. Built with Laravel PHP framework."
      },
      btn: "Learn More"
    },
    contact: {
      title: "Get in Touch",
      info: "Contact Information",
      desc: "If you have any questions or would like to get in touch, feel free to reach out via email or connect with me on social media.",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        placeholder: {
          name: "Your Name",
          email: "Your Email",
          message: "Your Message"
        },
        send: "Send"
      }
    },
    footer: {
      rights: "© 2025 Kiran Tamang. All rights reserved.",
      designed: "Designed and Developed by Kiran Tamang"
    }
  },
  jp: {
    nav: {
      home: "ホーム",
      about: "私について",
      skills: "スキル",
      projects: "プロジェクト",
      contact: "お問い合わせ"
    },
    hero: {
      greeting: "こんにちはタマン",
      lastname: "キランです",
      role: "フルスタック開発者",
      description: `キランです。日本の<strong><a href="https://setouchicollege.com/" target="_blank" style="text-decoration: none; color: #ff9f1c">日本ITビジネスカレッジ</a></strong>でウェブ開発を学んでいます。このポートフォリオでは、私のウェブ開発における作品やプロジェクトを紹介しています。`,
      follow: "フォローする"
    },
    about: {
      title: "私について",
      subtitle: "フルスタック開発者",
      content: `私の名前はタマン キラン、ネパール出身の26歳です。私は常に新しい文化や言語を学ぶことに情熱を注いでおり、それがきっかけで日本に来ました。沖縄で2年間の日本語プログラムを修了し、語学力だけでなく貴重な文化体験も得ることができました。現在は岡山に住み、日本ITビジネスカレッジで学んでいます。ITは未来を形作る上で重要な役割を果たすと信じているため、情報技術とビジネスのスキルを磨くことに重点を置いています。テクノロジーが現実世界の問題を解決し、日常生活を向上させる方法を探求することを楽しんでいます。`,
      readmore: "続きを読む",
      additional: "私の最大の強みは、強い責任感と、与えられた仕事を最後までやり遂げるという強い意志です。仕事やプロジェクトを任された際には、どんな困難があろうとも、積極的に解決策を探し、完遂に向けて努力します。例えば、ハッカソンでは、岡山県の観光地を対象とした多言語対応の予約ウェブサイトを、岡山エコツーリズムをテーマに開発するチームを率いました。時間的制約の中で問題を解決し、チームで協力してシス​​テムを構築するという経験を通して、プログラミングスキルが向上しただけでなく、成功にはチームワークが不可欠であることを学びました。これらの経験を活かし、責任感と献身的な姿勢で、貴社に貢献できるチームメンバーとして、技術スキルを活かしていきたいと考えています。"
    },
    skills: {
      title: "スキルと言語",
      html: {
        title: "HTML",
        desc: "HTMLを使用して、クリーンで整理され、読みやすいWebページを構築し、Webサイトの基盤を作る経験があります。"
      },
      css: {
        title: "CSS",
        desc: "CSSを使用してWebページをスタイリングし、視覚的に魅力的でレスポンシブ、使いやすいデザインを実現する経験があります。"
      },
      php: {
        title: "PHP",
        desc: "PHPを使用して、動的で強力なバックエンド機能を構築しています。サーバーサイドスクリプトの豊富な知識を活かし、カスタム機能の作成、データベース管理、安全で効率的なパフォーマンスを確保できます。"
      },
      laravel: {
        title: "Laravel",
        desc: "Laravelを使用して、ルーティング、データベース、バックエンドロジックの機能を活用し、効率的にWebアプリケーションを構築する経験があります。"
      },
      python: {
        title: "Python",
        desc: "Pythonを、スクリプト作成や自動化からデータ分析、Web開発まで、多様なプログラミングニーズに使用しています。シンプルな構文と強力なライブラリにより、効率的でスケーラブルなソリューションを構築できます。"
      },
      django: {
        title: "Django",
        desc: "高レベルのPython WebフレームワークであるDjangoを使用して、安全で保守しやすいWebアプリケーションを迅速に構築しています。複雑なデータベース駆動型Webサイトを作成するための「電池付属」哲学を評価しています。"
      },
      readmore: "続きを読む"
    },
    projects: {
      title: "プロジェクト",
      okayama: {
        title: "岡山ランディングページ",
        desc: "このプロジェクトは、日本の岡山の文化、観光地、料理を紹介するランディングページです。倉敷、岡山市、瀬戸内などの人気スポットや地元の食文化の情報を提供しています。"
      },
      laravel: {
        title: "Laravelランディングページ",
        desc: "このプロジェクトはGitHubで完成して公開されていますが、まだオンラインには展開されていません。Laravel PHPフレームワークで構築され、クリーンでモダンなレスポンシブデザインです。ブログやコンテンツセクションの更新が簡単で、バックエンド統合に対応したお問い合わせフォームも備えています。"
      },
      coffee: {
        title: "Laravelコーヒー",
        desc: "このプロジェクトはGitHubで完成して公開されていますが、まだオンラインには展開されていません。予約可能な時間帯でのテーブル予約、モバイルとデスクトップに対応したレスポンシブデザイン、予約と空席管理のための管理パネルを備えています。Laravel PHPフレームワークで構築されています。"
      },
      btn: "詳細を見る"
    },
    contact: {
      title: "お問い合わせ",
      info: "連絡先情報",
      desc: "ご質問がある場合や連絡を取りたい場合は、メールでお気軽にお問い合わせいただくか、ソーシャルメディアでつながりましょう。",
      form: {
        name: "お名前",
        email: "メールアドレス",
        message: "メッセージ",
        placeholder: {
          name: "お名前",
          email: "メールアドレス",
          message: "メッセージを入力してください"
        },
        send: "送信"
      }
    },
    footer: {
      rights: "© 2025 Kiran Tamang. All rights reserved.",
      designed: "Designed and Developed by Kiran Tamang"
    }
  }
};

let currentLang = localStorage.getItem('portfolio-lang') || 'en';

function updateContent(lang) {
  const t = translations[lang];
  
  // Update HTML lang attribute
  document.documentElement.lang = lang === 'jp' ? 'ja' : 'en';
  
  // Update navigation
  document.querySelectorAll('.nav-link ul li a').forEach((link, index) => {
    const keys = ['home', 'about', 'skills', 'projects', 'contact'];
    if (t.nav[keys[index]]) {
      link.textContent = t.nav[keys[index]];
    }
  });
  
  // Update hero section
  const heroH1 = document.querySelector('.section-header h1');
  if (heroH1) {
    heroH1.innerHTML = `${t.hero.greeting}<br />${t.hero.lastname}`;
  }
  
  const typewriter = document.querySelector('.typewriter');
  if (typewriter) {
    typewriter.textContent = t.hero.role;
    // Reset animation
    typewriter.style.animation = 'none';
    setTimeout(() => {
      typewriter.style.animation = '';
    }, 10);
  }
  
  const heroP = document.querySelector('.section-header p');
  if (heroP) {
    heroP.innerHTML = t.hero.description;
  }
  
  const followH3 = document.querySelector('.links h3');
  if (followH3) {
    followH3.textContent = t.hero.follow;
  }
  
  // Update about section
  const aboutH1 = document.querySelector('.about-me h1');
  if (aboutH1) {
    aboutH1.textContent = t.about.title;
  }
  
  const aboutH2 = document.querySelector('.about-me h2');
  if (aboutH2) {
    aboutH2.textContent = t.about.subtitle;
  }
  
  const aboutP = document.querySelector('.about-me > p');
  if (aboutP) {
    aboutP.innerHTML = t.about.content + `<details><summary>${t.about.readmore}</summary><p style="font-size: 1.125rem">${t.about.additional}</p></details>`;
  }
  
  // Update skills section
  const skillsTitle = document.querySelector('.skill__title');
  if (skillsTitle) {
    skillsTitle.textContent = t.skills.title;
  }
  
  const skillActivities = document.querySelectorAll('.skill-activity');
  const skillKeys = ['html', 'css', 'php', 'laravel', 'python', 'django'];
  
  skillActivities.forEach((activity, index) => {
    const key = skillKeys[index];
    if (key && t.skills[key]) {
      const title = activity.querySelector('.skill-activity__title');
      const desc = activity.querySelector('.skill-activity__description');
      const btn = activity.querySelector('.read-more-btn');
      
      if (title) title.textContent = t.skills[key].title;
      if (desc) desc.textContent = t.skills[key].desc;
      if (btn) btn.textContent = t.skills.readmore;
    }
  });
  
  // Update projects section
  const projectTitle = document.querySelector('.project_header');
  if (projectTitle) {
    projectTitle.textContent = t.projects.title;
  }
  
  const projectActivities = document.querySelectorAll('.project_activity');
  const projectKeys = ['okayama', 'laravel', 'coffee'];
  
  projectActivities.forEach((activity, index) => {
    const key = projectKeys[index];
    if (key && t.projects[key]) {
      const title = activity.querySelector('.project_title');
      const desc = activity.querySelector('.project__description');
      const btn = activity.querySelector('.btn2');
      
      if (title) title.innerHTML = `&lt;/&gt;<br />${t.projects[key].title}`;
      if (desc) desc.textContent = t.projects[key].desc;
      if (btn) btn.textContent = t.projects.btn;
    }
  });
  
  // Update contact section
  const contactTitle = document.querySelector('.contact-container');
  if (contactTitle) {
    contactTitle.textContent = t.contact.title;
  }
  
  const contactInfoH3 = document.querySelector('.contact-info h3');
  if (contactInfoH3) {
    contactInfoH3.textContent = t.contact.info;
  }
  
  const contactInfoP = document.querySelector('.contact-info > p');
  if (contactInfoP) {
    contactInfoP.textContent = t.contact.desc;
  }
  
  // Update form
  const formLabels = document.querySelectorAll('.form label');
  const formPlaceholders = document.querySelectorAll('.form input, .form textarea');
  const submitBtn = document.querySelector('.form button');
  
  if (formLabels[0]) formLabels[0].textContent = t.contact.form.name;
  if (formLabels[1]) formLabels[1].textContent = t.contact.form.email;
  if (formLabels[2]) formLabels[2].textContent = t.contact.form.message;
  
  if (formPlaceholders[0]) formPlaceholders[0].placeholder = t.contact.form.placeholder.name;
  if (formPlaceholders[1]) formPlaceholders[1].placeholder = t.contact.form.placeholder.email;
  if (formPlaceholders[2]) formPlaceholders[2].placeholder = t.contact.form.placeholder.message;
  
  if (submitBtn) submitBtn.textContent = t.contact.form.send;
  
  // Update footer
  const footerP = document.querySelectorAll('.footer-content p');
  if (footerP[0]) footerP[0].textContent = t.footer.rights;
  if (footerP[1]) footerP[1].textContent = t.footer.designed;
  
  // Update current language display
  document.querySelector('.current-lang').textContent = lang.toUpperCase();
  
  // Save preference
  localStorage.setItem('portfolio-lang', lang);
  currentLang = lang;
}

// Toggle dropdown
document.getElementById('langToggle').addEventListener('click', (e) => {
  e.stopPropagation();
  document.getElementById('langDropdown').classList.toggle('active');
});

// Close dropdown when clicking outside
document.addEventListener('click', () => {
  document.getElementById('langDropdown').classList.remove('active');
});

// Language selection
document.querySelectorAll('.lang-option').forEach(option => {
  option.addEventListener('click', () => {
    const lang = option.dataset.lang;
    if (lang !== currentLang) {
      document.querySelectorAll('.lang-option').forEach(opt => opt.classList.remove('active'));
      option.classList.add('active');
      updateContent(lang);
    }
  });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  updateContent(currentLang);
  document.querySelector(`.lang-option[data-lang="${currentLang}"]`).classList.add('active');
});