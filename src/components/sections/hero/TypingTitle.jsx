import React, { useEffect, useState } from "react";

const titles = ["Cloud Developer", "AI Enthusiast", "Open Source Lover"];

export default function TypingTitle() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (text.length < titles[index].length) {
        timeout = setTimeout(() => {
          setText(titles[index].slice(0, text.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setTyping(false), 1000);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(titles[index].slice(0, text.length - 1));
        }, 50);
      } else {
        setTyping(true);
        setIndex((prev) => (prev + 1) % titles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, typing, index]);

  return (
    <h2 className="text-2xl md:text-3xl font-medium text-[#ffdde1] h-10">
      {text}
      <span className="animate-pulse">|</span>
    </h2>
  );
}
