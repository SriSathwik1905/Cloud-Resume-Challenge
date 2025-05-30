import React from "react";
import ProfileImage from "./ProfileImage";
import TypingTitle from "./TypingTitle";
import QuotesSlider from "./QuotesSlider";
import HeroButtons from "./HeroButtons";
import VisitorCount from "./VisitorCount";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-start justify-center px-2 md:px-32 gap-12 bg-transparent pt-32 w-full max-w-[1600px] mx-auto">
      {/* Profile Image */}
      <div className="flex-shrink-0 self-start">
        <ProfileImage
          src="https://avatars.githubusercontent.com/u/113202157?s=400&u=14709a46120f34c5009095322a25561a684e4b71&v=4"
          alt="Profile"
          className="w-48 h-48 md:w-64 md:h-64 shadow-[0_0_20px_#cceeff]"
        />
      </div>

      {/* Text Content */}
      <div className="text-center md:ml-15 md:text-left max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white">
          Hey, I'm <br />
          <span className="text-[#cceeff] mt-3 inline-block">
            P. Sri Sathwik
          </span>
        </h1>
        <TypingTitle />

        <QuotesSlider className="mt-8" />

        <HeroButtons className="mt-10 md:ml-8" />

        <VisitorCount className="mt-6" />
      </div>
    </section>
  );
}
