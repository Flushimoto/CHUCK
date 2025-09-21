"use client";

import React, { useState, useEffect } from 'react';

// === MAIN WEBSITE COMPONENT ===
const ChuckNorrisCoinPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const script = document.getElementById('jupiter-terminal-script');
    if (!script) {
        const newScript = document.createElement('script');
        newScript.src = 'https://terminal.jup.ag/main-v2.js';
        newScript.id = 'jupiter-terminal-script';
        document.head.appendChild(newScript);
    }
  }, []);
  
  useEffect(() => {
    if (isModalOpen && (window as any).Jupiter) {
      (window as any).Jupiter.init({
        endpoint: "https://api.mainnet-beta.solana.com",
        strictTokenList: false,
        displayMode: "modal",
        formProps: {
            initialInputMint: "So11111111111111111111111111111111111111112",
            initialOutputMint: "YOUR_TOKEN_ADDRESS_HERE",
        },
        onSuccess: ({ txid } : { txid: string }) => {
            console.log('Swap successful:', txid);
        },
        onClose: () => {
            setModalOpen(false);
        },
      });
    }
  }, [isModalOpen]);


  const openJupiterModal = () => {
    if ((window as any).Jupiter) {
        setModalOpen(true);
    } else {
        console.error("Jupiter script not loaded yet.");
    }
  };


  return (
    <>
      <PageStyles />
      <div className="container">
        <main>
          <HeroSection onBuyClick={openJupiterModal} />
          <InfoSection />
          <RoadmapSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

// === SECTIONS ===

const HeroSection = ({ onBuyClick } : { onBuyClick: () => void }) => (
  <header className="hero">
    <img src="https://i.ibb.co/L5r4J5T/chuck-pixel-kick.png" alt="Chuck Norris Mascot" className="mascot" />
    <h1 className="title">$CHUCK</h1>
    <h2 className="subtitle">THE ONLY COIN THAT CAN UN-RUG ITSELF.</h2>
    <p className="tagline">A decentralized movement celebrating absolute strength and the power of a good roundhouse kick to the bear market.</p>
    <div className="cta-buttons">
      <button onClick={onBuyClick} className="btn btn-primary">BUY $CHUCK NOW</button>
      <a href="YOUR_TELEGRAM_LINK" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">JOIN TELEGRAM</a>
    </div>
  </header>
);

const InfoSection = () => (
    <section className="info-grid">
        <div className="info-card">
            <h3>THE LEGEND</h3>
            <p>
                $CHUCK is the ultimate tribute to internet legend. It's more than a coin; it's a statement against market volatility. We don't fear dips; dips fear us.
            </p>
        </div>
        <div className="info-card">
            <h3>CHUCK-ONOMICS</h3>
            <ul>
                <li><strong>Taxes:</strong> 0% Buy / 0% Sell</li>
                <li><strong>Liquidity:</strong> Burned Forever</li>
                <li><strong>Supply:</strong> Finite & Legendary</li>
                <li><strong>Address:</strong> YOUR_TOKEN_ADDRESS_HERE</li>
            </ul>
        </div>
    </section>
);

const RoadmapSection = () => (
  <section className="roadmap-section">
    <h2 className="section-title">PATH OF THE FIST</h2>
    <div className="roadmap-grid">
      <div className="roadmap-card">
        <h4>PHASE 1</h4>
        <p>Launch, build the Delta Force on Telegram, and trend on X through sheer force of will.</p>
      </div>
      <div className="roadmap-card">
        <h4>PHASE 2</h4>
        <p>Achieve thousands of holders, get listed on major platforms, and deliver a roundhouse kick to the charts.</p>
      </div>
      <div className="roadmap-card">
        <h4>PHASE 3</h4>
        <p>Global domination. CEX listings out of respect and fear. Count to infinity. Again.</p>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="social-links">
        <a href="YOUR_X_LINK" target="_blank" rel="noopener noreferrer">X (TWITTER)</a>
        <span>|</span>
        <a href="YOUR_TELEGRAM_LINK" target="_blank" rel="noopener noreferrer">TELEGRAM</a>
    </div>
    <p>$CHUCK © 2025. This is a parody memecoin and has no affiliation with Chuck Norris.</p>
  </footer>
);


// === STYLES ===

const PageStyles = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');

    :root {
      --background: #1E1E1E;
      --surface: #2A2A2A;
      --primary: #FFA500;
      --text-primary: #FFFFFF;
      --text-secondary: #AAAAAA;
      --shadow-light: rgba(255, 255, 255, 0.05);
      --shadow-dark: rgba(0, 0, 0, 0.5);
    }

    html, body {
      margin: 0;
      padding: 0;
      font-family: 'Inter', sans-serif;
      background-color: var(--background);
      color: var(--text-primary);
    }
    
    .container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 2rem;
    }
    
    .hero {
      text-align: center;
      padding: 4rem 0;
    }

    .mascot {
      width: 120px;
      height: auto;
      margin-bottom: 2rem;
      image-rendering: pixelated;
    }

    .title {
      font-weight: 900;
      font-size: 5rem;
      color: var(--primary);
      margin: 0;
      letter-spacing: -2px;
    }

    .subtitle {
        font-weight: 700;
        font-size: 1.5rem;
        margin: 0.5rem 0;
        color: var(--text-primary);
    }

    .tagline {
      font-size: 1.1rem;
      max-width: 600px;
      margin: 1.5rem auto 2.5rem auto;
      color: var(--text-secondary);
      line-height: 1.6;
    }

    .cta-buttons {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }

    .btn {
      display: inline-block;
      padding: 1rem 2rem;
      font-weight: 700;
      font-size: 1rem;
      border-radius: 12px;
      text-decoration: none;
      cursor: pointer;
      border: none;
      transition: all 0.2s ease-in-out;
    }

    .btn-primary {
      background-color: var(--primary);
      color: var(--background);
      box-shadow: 0px 4px 15px rgba(255, 165, 0, 0.2);
    }
    .btn-primary:hover {
        transform: translateY(-3px);
        box-shadow: 0px 6px 20px rgba(255, 165, 0, 0.3);
    }

    .btn-secondary {
      background-color: var(--surface);
      color: var(--text-primary);
      box-shadow: -4px -4px 8px var(--shadow-light), 4px 4px 8px var(--shadow-dark);
    }
    .btn-secondary:hover {
        background-color: #333;
    }

    .info-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin: 4rem 0;
    }

    .info-card {
        background: var(--surface);
        padding: 2rem;
        border-radius: 20px;
        box-shadow: inset -5px -5px 10px var(--shadow-dark), inset 5px 5px 10px var(--shadow-light);
    }

    .info-card h3 {
        font-weight: 900;
        font-size: 1.25rem;
        color: var(--primary);
        margin-top: 0;
    }
    
    .info-card ul {
        list-style: none;
        padding: 0;
    }
    .info-card li {
        margin-bottom: 0.5rem;
    }

    .roadmap-section {
        text-align: center;
        margin: 6rem 0;
    }
    
    .section-title {
        font-weight: 900;
        font-size: 2.5rem;
        margin-bottom: 2rem;
    }

    .roadmap-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        text-align: left;
    }

    .roadmap-card {
        background: var(--surface);
        padding: 1.5rem;
        border-radius: 20px;
        border-left: 4px solid var(--primary);
    }

    .roadmap-card h4 {
        margin: 0 0 0.5rem 0;
        font-weight: 700;
    }

    .footer {
      text-align: center;
      padding: 2rem;
      margin-top: 4rem;
      border-top: 1px solid var(--surface);
      color: var(--text-secondary);
    }

    .social-links a {
        color: var(--text-secondary);
        text-decoration: none;
        margin: 0 1rem;
        font-weight: 700;
    }
    .social-links a:hover {
        color: var(--primary);
    }
  `}</style>
);


export default ChuckNorrisCoinPage;
