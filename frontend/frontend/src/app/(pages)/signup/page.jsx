"use client"
import React from "react";
import Image from "next/image";
import "../../components/style.css";
import { useRouter } from "next/navigation";

export default function page() {
  const router =  useRouter();
  return (
    <div className="signup-container">
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

      <div className="signup-box">
        <h1 className="signup-title">Join Us! Create Your Account</h1>
        <form className="signup-form">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your full name"
            className="signup-input"
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="signup-input"
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Create a password"
            className="signup-input"
          />

          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm your password"
            className="signup-input"
          />

          <button type="submit" className="signup-btn" onClick={() => { router.push("/")}}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
