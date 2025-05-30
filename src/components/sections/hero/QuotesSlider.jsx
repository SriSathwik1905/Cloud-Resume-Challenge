import React, { useState, useEffect, useRef } from "react";

const quotes = [
  "With great power comes great electricity bill",
  "Code never lies, comments sometimes do",
  "First, solve the problem. Then, write the code",
];

const AUTO_SLIDE_INTERVAL = 3500;

export default function QuotesSlider({ className = "" }) {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef();

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % quotes.length);
    }, AUTO_SLIDE_INTERVAL);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const goTo = (idx) => setCurrent(idx);

  return (
    <div className={`relative w-full max-w-xl mx-auto ${className}`}>
      <div className="overflow-hidden h-16 flex items-center justify-center">
        <div
          className="transition-transform duration-700 ease-in-out flex flex-row"
          style={{
            transform: `translateX(-${current * 100}%)`,
            width: `${quotes.length * 100}%`,
          }}
        >
          {quotes.map((quote, i) => (
            <div
              key={i}
              className="w-full flex-shrink-0 flex items-center justify-center text-lg text-[#e0dfff] font-light"
              style={{ minWidth: "100%" }}
            >
              <span className="mx-8">“{quote}”</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-2 space-x-2">
        {quotes.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full border border-[#e0dfff] transition-all duration-200 ${
              current === i ? "bg-[#e0dfff]" : "bg-transparent"
            }`}
            aria-label={`Go to quote ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
