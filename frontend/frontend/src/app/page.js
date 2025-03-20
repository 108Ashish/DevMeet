import React from "react";
import Hero from "src/components/Hero";
import NavbarMenu from "../components/NavbarMenu";
import SparklesCore from "../components/SparklesCore"; // Ensure this component exists

import "../styles/mainStyles.css"; // Import the normal CSS file

export default function Page() {
  return (
    <main className="home-container">
      {/* Ambient background with moving particles */}
      <div className="particles-container">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="particles-canvas"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="content-container">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}
