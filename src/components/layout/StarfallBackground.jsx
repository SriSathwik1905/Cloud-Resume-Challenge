import React from "react";
import "./StarfallBackground.css"; // make sure this includes your starfall + animated-bg styles

const StarfallBackground = () => {
  return (
    <>
      <div className="animated-bg" />
      <div className="starfall">
        {[...Array(40)].map((_, i) => (
          <div className="falling-star" key={i} />
        ))}
      </div>
    </>
  );
};

export default StarfallBackground;
