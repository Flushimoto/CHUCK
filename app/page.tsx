"use client";

import React, { useState, useEffect, Suspense } from 'react';

// === MAIN WEBSITE COMPONENT ===
const ChuckNorrisCoinPage = () => {
  return (
    <div className="container">
      <main>
        <HeroSection />
        <TradingPostSection />
        <LegendSection />
        <ChuckonomicsSection />
        <RoadmapSection />
        <HowToBuySection />
      </main>
      <Footer />
      <PageStyles />
    </div>
  );
};

// === SECTIONS ===

const HeroSection = () => (
  <header className="hero">
    <div className="hero-content">
      <img src="https://i.ibb.co/L5r4J5T/chuck-pixel-kick.png" alt="Chuck Norris Mascot" className="mascot" />
      <h1 className="title">CHUCK NORRIS COIN ($CHUCK)</h1>
      <p className="tagline">This token doesn't go to the moon. The moon asks it for permission to move.</p>
      <div className="cta-buttons">
        <a href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=YOUR_TOKEN_ADDRESS" target="_blank" rel="noopener noreferrer" className="btn">BUY $CHUCK NOW</a>
        <a href="YOUR_TELEGRAM_LINK" target="_blank" rel="noopener noreferrer" className="btn">JOIN THE DELTA FORCE</a>
        <a href="YOUR_X_LINK" target="_blank" rel="noopener noreferrer" className="btn">FOLLOW ON X</a>
      </div>
    </div>
  </header>
);

const TradingPostSection = () => (
  <section id="swap" className="widget-section">
    <h2 className="section-title">THE TRADING POST</h2>
    <p className="section-subtitle">Trade $CHUCK here. Instantly. No need to leave.</p>
    <div className="widget-container">
      <Suspense fallback={<div className="loading-widget">Loading Terminal...</div>}>
        <JupiterTerminalWrapper />
      </Suspense>
    </div>
  </section>
);

const LegendSection = () => (
  <section className="content-section">
    <h2 className="section-title">THE LEGEND OF $CHUCK</h2>
    <p>
      Some coins are built on code. Some are built on hype. Chuck Norris Coin is built on cold, hard, undisputed facts.
    </p>
    <p>
      $CHUCK is the ultimate tribute to the man who counted to infinity... twice. It is a decentralized movement celebrating absolute strength, diamond hands, and the power of a good roundhouse kick to the bear market.
    </p>
    <p>
      We are more than a memecoin. We are a statement. We don't ask for gains; we tell them where to go. This project is a parody and has no affiliation with the legend himself. He just approves of the strength.
    </p>
  </section>
);

const ChuckonomicsSection = () => (
  <section className="content-section">
    <h2 className="section-title">CHUCK-ONOMICS</h2>
    <div className="token-details">
      <p><strong>TOTAL SUPPLY:</strong> 10,000,000,000 $CHUCK</p>
      <p><strong>TAXES:</strong> 0% Buy / 0% Sell. Chuck Norris doesn't believe in taxes.</p>
      <p><strong>LIQUIDITY:</strong> Burned. The LP was burned with a single glare. It is un-ruggable.</p>
      <p><strong>CONTRACT ADDRESS:</strong> YOUR_TOKEN_ADDRESS_HERE</p>
    </div>
  </section>
);

const RoadmapSection = () => (
  <section className="content-section">
    <h2 className="section-title">THE PATH OF THE FIST</h2>
    <div className="roadmap">
      <div className="roadmap-phase">
        <h3>Phase 1: The Stare Down</h3>
        <ul>
          <li>✅ Launch on Pump.fun</li>
          <li>✅ Fill Bonding Curve & Deploy to Raydium</li>
          <li>✅ Burn Liquidity</li>
          <li>✅ Website and Socials Live</li>
          <li>✅ Tell CoinGecko & CMC they will list us.</li>
        </ul>
      </div>
      <div className="roadmap-phase">
        <h3>Phase 2: The Push-Ups</h3>
        <ul>
          <li>🚀 1,000 Holders ("The Platoon")</li>
          <li>🚀 Build the Telegram "Delta Force"</li>
          <li>🚀 Trend on X through sheer force of will</li>
        </ul>
      </div>
      <div className="roadmap-phase">
        <h3>Phase 3: The Roundhouse Kick</h3>
        <ul>
          <li>🔥 10,000+ Holders ("The Army")</li>
          <li>🔥 CEX Listings (Out of respect and fear)</li>
          <li>🔥 Count to infinity. Again.</li>
        </ul>
      </div>
    </div>
  </section>
);

const HowToBuySection = () => (
  <section className="content-section">
    <h2 className="section-title">HOW TO JOIN (THE OLD-FASHIONED WAY)</h2>
    <p>For those who prefer a manual approach.</p>
    <ol>
      <li><strong>GET A WALLET:</strong> Download Phantom or Solflare from the app store. Keep your seed phrase secret.</li>
      <li><strong>GET SOME SOL:</strong> Buy Solana (SOL) on an exchange like Coinbase and send it to your wallet.</li>
      <li><strong>GO TO JUPITER:</strong> Visit the jup.ag website in your wallet's browser.</li>
      <li><strong>SWAP FOR $CHUCK:</strong> Paste the $CHUCK contract address and swap your SOL. Welcome to the team.</li>
    </ol>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <p>$CHUCK © 2025. Built with pure grit.</p>
    <p>This is a parody memecoin and has no affiliation with Chuck Norris.</p>
  </footer>
);


// === JUPITER WIDGET AND STYLES ===

const JupiterTerminalWrapper = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://terminal.jup.ag/main-v2.js';
    script.onload = () => setIsLoaded(true);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  if (!isLoaded) {
    return <div className="loading-widget">Loading Terminal...</div>;
  }

  const launchJupiter = () => {
    (window as any).Jupiter.init({
      endpoint: "https://api.mainnet-beta.solana.com",
      strictTokenList: false,
      formProps: {
        initialInputMint: "So11111111111111111111111111111111111111112",
        initialOutputMint: "YOUR_TOKEN_ADDRESS_HERE", // IMPORTANT: REPLACE
      },
      containerClassName: 'jup-terminal',
    });
  };

  useEffect(() => {
    if (isLoaded) {
      launchJupiter();
    }
  }, [isLoaded]);

  return <div id="integrated-terminal" style={{ minHeight: '500px' }}></div>;
};


const PageStyles = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    html, body {
      margin: 0;
      padding: 0;
      font-family: 'Roboto', sans-serif;
      background-color: #0a0a0a;
      color: #ffffff;
      background-image: url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2RnaHpndDVqNnNtaG1qejd5MnNnaWRmM2V4MXBsa3htOHVobmliZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPm3BynUpUysTHW/giphy.gif');
      background-size: cover;
      background-attachment: fixed;
    }
    
    .container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      background-color: rgba(10, 10, 10, 0.85);
      border-left: 2px solid #8B0000;
      border-right: 2px solid #00008B;
    }
    
    .hero {
      text-align: center;
      padding: 40px 20px;
      border-bottom: 4px ridge #c0c0c0;
    }

    .mascot {
      width: 150px;
      height: auto;
      margin-bottom: 20px;
      image-rendering: pixelated;
    }

    .title {
      font-family: 'Impact', 'Arial Black', sans-serif;
      font-size: 3.5rem;
      color: #FFF;
      text-transform: uppercase;
      letter-spacing: 2px;
      text-shadow: 2px 2px 0 #8B0000, -2px -2px 0 #00008B;
      margin: 0;
    }

    .tagline {
      font-size: 1.2rem;
      margin: 10px 0 30px;
      color: #c0c0c0;
    }

    .cta-buttons {
      display: flex;
      justify-content: center;
      gap: 15px;
      flex-wrap: wrap;
    }

    .btn {
      display: inline-block;
      padding: 12px 25px;
      font-family: 'Impact', sans-serif;
      font-size: 1.2rem;
      text-transform: uppercase;
      color: #fff;
      background: linear-gradient(180deg, #444 0%, #111 100%);
      border: 2px solid #c0c0c0;
      border-radius: 5px;
      text-decoration: none;
      box-shadow: 0px 4px 8px rgba(0,0,0,0.5);
      transition: all 0.2s ease-in-out;
    }

    .btn:hover {
      background: linear-gradient(180deg, #555 0%, #222 100%);
      transform: translateY(-2px);
      box-shadow: 0px 6px 12px rgba(0,0,0,0.7);
    }
    
    .widget-section, .content-section {
        padding: 40px 20px;
        margin: 20px 0;
        border: 2px solid #555;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .section-title {
      font-family: 'Impact', 'Arial Black', sans-serif;
      font-size: 2.5rem;
      text-align: center;
      text-transform: uppercase;
      color: #FFF;
      margin-bottom: 10px;
    }
    
    .section-subtitle {
        text-align: center;
        margin-top: -10px;
        margin-bottom: 30px;
        color: #c0c0c0;
    }

    .widget-container {
      border: 4px ridge #c0c0c0;
      padding: 10px;
      background-color: #111;
    }
    
    .loading-widget {
        text-align: center;
        padding: 50px;
        font-size: 1.5rem;
        font-family: 'Impact', sans-serif;
    }

    .token-details p {
        font-size: 1.1rem;
        line-height: 1.6;
    }

    .roadmap {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .roadmap-phase {
        border-left: 4px solid #8B0000;
        padding-left: 20px;
    }
    
    .roadmap-phase h3 {
        margin-top: 0;
        font-family: 'Impact', sans-serif;
    }

    ol {
        padding-left: 20px;
    }
    
    li {
        margin-bottom: 10px;
    }

    .footer {
      text-align: center;
      padding: 20px;
      margin-top: 40px;
      border-top: 4px ridge #c0c0c0;
      color: #aaa;
    }
    
    a {
        color: #ff4500;
    }

    /* Jupiter Terminal Specific Styles */
    .jup-terminal {
        font-family: 'Roboto', sans-serif !important;
    }
  `}</style>
);


export default ChuckNorrisCoinPage;
