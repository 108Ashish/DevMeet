import React from "react";
import Image from "next/image";
import "../../components/style.css";
export default function page() {
  return (
    <div className="signin-container">
      <div className="glowingg-effect"></div>
      <div className="logo-container">
        <Image
          src="/logo.png"
          alt="Logo"
          width={120}
          height={40}
          className="signin-logo"
        />
      </div>
      <div className="signin-box">
        <h1 className="signin-title">Sign In</h1>
        <form className="signin-form">
          <input type="email" placeholder="Email" className="signin-input" />
          <input
            type="password"
            placeholder="Password"
            className="signin-input"
          />
          <button className="signin-btn">Login</button>
        </form>
      </div>
    </div>
  );
}
