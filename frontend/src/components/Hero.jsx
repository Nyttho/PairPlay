import React from "react";

const Hero = ({ image, ...rest }) => {
  return (
    <div className="w-5/6 h-[450px] mx-auto rounded-2xl overflow-hidden relative">
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)]"></div>
      <img
        src={image}
        alt="hero-img"
        className="w-full h-full object-cover object-[0-300px]"
      />
    </div>
  );
};

export default Hero;
