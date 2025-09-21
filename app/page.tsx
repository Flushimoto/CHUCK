"use client";

import React from 'react';

// === MAIN WEBSITE COMPONENT ===
const ChuckNorrisCoinPage = () => {
  return (
    <>
      <PageStyles />
      <div className="container">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <TokenomicsSection />
          <RoadmapSection />
        </main>
        <Footer />
      </div>
    </>
  );
};


// === SECTIONS & COMPONENTS ===

const Navbar = () => (
    <nav className="navbar">
        <div className="nav-logo">$CHUCK</div>
        <div className="nav-links">
            <a href="#about">Mission</a>
            <a href="#tokenomics">Intel</a>
            <a href="#roadmap">Phases</a>
            <a href="YOUR_X_LINK" target="_blank" rel="noopener noreferrer">Comms</a>
        </div>
    </nav>
);

const HeroSection = () => (
  <header className="hero">
    <div className="hero-content">
      <h1 className="title">OPERATION: $CHUCK</h1>
      <p className="tagline">Fear doesn't exist in this dojo. We don't trade the market; we tell it where to go. This is the last memecoin you'll ever need.</p>
      <div className="hero-image-container">
        <img src="https://i.ibb.co/L5r4J5T/chuck-pixel-kick.png" alt="Chuck Norris Mascot" className="mascot" />
      </div>
      <div className="cta-buttons">
         {/* IMPORTANT: Replace # with your actual buy links! */}
        <a href="#" className="btn btn-primary">BUY ON PUMP.FUN</a>
        <a href="#" className="btn btn-secondary">BUY ON JUPITER</a>
      </div>
    </div>
  </header>
);

const AboutSection = () => (
    <section id="about" className="content-card">
        <div className="card-header">
            <h2>MISSION BRIEFING</h2>
        </div>
        <div className="card-body">
            <p>$CHUCK is a statement. In a world of volatile cryptocurrencies and rug pulls, this project is a roundhouse kick to the face of fear. It's a tribute to the golden age of action heroes, built on the principles of strength, integrity, and the sheer force of will. We are a community of diamond-fisted holders who don't flinch. Welcome to the Delta Force of DeFi.</p>
        </div>
    </section>
);

const TokenomicsSection = () => (
    <section id="tokenomics" className="content-card">
        <div className="card-header">
            <h2>CLASSIFIED INTEL</h2>
        </div>
        <div className="card-body">
            <ul className="intel-list">
                <li><span className="intel-label">Callsign:</span> $CHUCK</li>
                <li><span className="intel-label">Tax Rate:</span> 0% Buy / 0% Sell. We don't fund weakness.</li>
                <li><span className="intel-label">Liquidity:</span> 100% Burned. The keys were thrown into a volcano.</li>
                <li><span className="intel-label">Contract:</span> <span className="contract-address">YOUR_TOKEN_ADDRESS_HERE</span></li>
            </ul>
        </div>
    </section>
);

const RoadmapSection = () => (
  <section id="roadmap" className="roadmap-section">
    <h2 className="section-title">MISSION PHASES</h2>
    <div className="roadmap-grid">
      <div className="roadmap-card">
        <h3>PHASE I: INFILTRATION</h3>
        <p>Deploy stealthily on Pump.fun. Assemble the elite Delta Force on Telegram & X. Establish market presence through overwhelming force.</p>
      </div>
      <div className="roadmap-card">
        <h3>PHASE II: SHOCK & AWE</h3>
        <p>Execute a flawless Raydium deployment. Shatter holder milestones. Begin a relentless marketing air-strike to achieve total chart dominance.</p>
      </div>
      <div className="roadmap-card">
        <h3>PHASE III: WORLD STAGE</h3>
        <p>Secure listings on major CEX platforms. Become a globally recognized symbol of strength in the crypto space. The mission is complete when we say it is.</p>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <p>This project is a parody tribute to an American legend. It is not affiliated with Chuck Norris.</p>
    <p>ALWAYS READY. ALWAYS VICTORIOUS. $CHUCK 2025.</p>
  </footer>
);


// === STYLES ===

const PageStyles = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Roboto+Slab:wght@400;700&display=swap');

    :root {
      --bg-color: #F5F1E8; /* Parchment/Sand */
      --primary-red: #B22222; /* Firebrick Red */
      --secondary-blue: #2C3E50; /* Midnight Blue */
      --accent-gold: #FFD700; /* Gold */
      --text-dark: #1A1A1A;
      --font-header: 'Black Ops One', sans-serif;
      --font-body: 'Roboto Slab', serif;
    }

    html, body {
      margin: 0;
      padding: 0;
      font-family: var(--font-body);
      background-color: var(--bg-color);
      color: var(--text-dark);
      background-image: url('data:image/svg+xml,%3Csvg width="6" height="6" viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="M5 0h1L0 6V5zM6 5v1H5z"/%3E%3C/g%3E%3C/svg%3E');
    }
    
    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }
    
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;
        border-bottom: 3px double var(--text-dark);
    }
    .nav-logo {
        font-family: var(--font-header);
        font-size: 2rem;
        color: var(--primary-red);
    }
    .nav-links a {
        font-family: var(--font-header);
        margin-left: 2rem;
        text-decoration: none;
        color: var(--secondary-blue);
        transition: color 0.2s;
    }
    .nav-links a:hover {
        color: var(--primary-red);
    }

    .hero {
      text-align: center;
      padding: 4rem 0 6rem 0;
      border-bottom: 3px double var(--text-dark);
      margin-bottom: 4rem;
    }

    .hero-content {
        position: relative;
    }
    
    .title {
      font-family: var(--font-header);
      font-size: clamp(3rem, 10vw, 6rem);
      color: var(--primary-red);
      text-transform: uppercase;
      margin: 0;
      line-height: 1;
      text-shadow: 2px 2px 0px var(--secondary-blue), 4px 4px 0px rgba(0,0,0,0.2);
    }

    .tagline {
      font-size: 1.25rem;
      max-width: 700px;
      margin: 1.5rem auto 2.5rem auto;
      line-height: 1.7;
      font-weight: 400;
    }

    .hero-image-container {
        margin: 2rem 0;
        padding: 1rem;
        display: inline-block;
        border: 4px solid var(--secondary-blue);
        background: white;
        box-shadow: 8px 8px 0 var(--primary-red);
    }
    .mascot {
      width: 120px;
      height: 120px;
      image-rendering: pixelated;
      display: block;
    }

    .cta-buttons {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      flex-wrap: wrap;
    }

    .btn {
      padding: 1rem 2.5rem;
      font-family: var(--font-header);
      font-size: 1.2rem;
      text-decoration: none;
      border-radius: 2px;
      transition: all 0.2s ease-in-out;
      cursor: pointer;
    }

    .btn-primary {
      background-color: var(--primary-red);
      color: white;
      border: 2px solid var(--primary-red);
    }
    .btn-primary:hover {
        background-color: #8B0000; /* Darker Red */
        transform: translateY(-3px);
    }

    .btn-secondary {
      background-color: transparent;
      color: var(--secondary-blue);
      border: 2px solid var(--secondary-blue);
    }
    .btn-secondary:hover {
        background-color: var(--secondary-blue);
        color: white;
    }

    .content-card {
        background: #FFFFFF;
        border: 2px solid var(--text-dark);
        margin-bottom: 4rem;
        box-shadow: 10px 10px 0px var(--secondary-blue);
    }

    .card-header {
        background: var(--secondary-blue);
        color: white;
        padding: 0.75rem 1.5rem;
        border-bottom: 2px solid var(--text-dark);
    }
    .card-header h2 {
        font-family: var(--font-header);
        margin: 0;
        font-size: 1.8rem;
        text-transform: uppercase;
    }
    
    .card-body {
        padding: 2rem 1.5rem;
        font-size: 1.1rem;
        line-height: 1.8;
    }

    .intel-list {
        list-style: none;
        padding: 0;
    }
    .intel-list li {
        margin-bottom: 1rem;
        border-bottom: 1px dashed rgba(0,0,0,0.2);
        padding-bottom: 1rem;
    }
    .intel-label {
        font-weight: 700;
        color: var(--primary-red);
    }
    .contract-address {
        word-break: break-all;
    }

    .roadmap-section {
        margin-bottom: 4rem;
        text-align: center;
    }

    .section-title {
        font-family: var(--font-header);
        font-size: 3rem;
        text-transform: uppercase;
        margin-bottom: 3rem;
        color: var(--secondary-blue);
    }
    
    .roadmap-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        text-align: left;
    }

    .roadmap-card {
        border: 2px solid var(--text-dark);
        padding: 1.5rem;
        background: white;
    }
    .roadmap-card h3 {
        font-family: var(--font-header);
        color: var(--primary-red);
        margin: 0 0 1rem 0;
        border-bottom: 2px solid var(--text-dark);
        padding-bottom: 0.5rem;
    }

    .footer {
      text-align: center;
      padding: 2rem;
      margin-top: 4rem;
      border-top: 3px double var(--text-dark);
      color: var(--secondary-blue);
      font-weight: 700;
    }
  `}</style>
);


export default ChuckNorrisCoinPage;
