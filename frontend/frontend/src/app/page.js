import Image from "next/image";
import "./components/style.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="glowing-effect"></div>
      <nav className="flex items-center justify-between px-6 py-4 shadow-md">
        <div>
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={40}
            className="logo"
          />
        </div>
        <div className="navbar">
          <a href="#">HOME</a>
          <a href="#">CONNECTIONS</a>
          <a href="#">ABOUT</a>
          <a href="#">HELP</a>
        </div>
      </nav>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="wel">
          <span className="fade-in">Welcome, </span>
          <span className="slide-in text-blue-500"> to DevMeet</span>
        </h1>

        <p className="p">Want to Explore more?</p>
        <h1 className="h">
          Let's <span className="start">Start!!</span>
        </h1>
        <div className="button">
          <button className="signupp-btn">
            <Link href="/signup">Sign Up</Link>
          </button>
          <button className="signinn-btn">
            <Link href="/signin">Sign In</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
