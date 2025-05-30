import React from "react";

export default function VisitorCount({ className = "" }) {
  return (
    <div className={`text-sm text-[#dbeafe] opacity-80 ${className}`}>
      👁️ 1234 visitors and counting...
    </div>
  );
}
