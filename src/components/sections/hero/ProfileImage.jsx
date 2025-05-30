import React from "react";

export default function ProfileImage({
  src,
  alt = "Profile Image",
  className = "",
}) {
  return (
    <div className={`w-30 h-30 rounded-full overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
      />
    </div>
  );
}
