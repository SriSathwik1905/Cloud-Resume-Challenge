import React from "react";
import Lottie from "lottie-react";
import animationData from "@/assets/animation.json"; // adjust the path

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-49 bg-transparent backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center">
          <div className="w-12 h-12">
            <Lottie animationData={animationData} loop={true} />
          </div>
          <h1 className="ml-4 text-3xl font-bold text-white">
            <span className="bg-gradient-to-r from-[#cceeff] to-[#ffdde1] bg-clip-text text-transparent">
              Cloud
            </span>{" "}
            Resume
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-white font-semibold text-shadow-lg text-xl">
          <li>
            <a href="#home" className="hover:text-[#ffdde1] transition">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-[#cceeff] transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#e0dfff] transition">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#fef9f5] transition">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
