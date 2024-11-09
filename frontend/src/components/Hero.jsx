import React from "react";

const Hero = ({ image, ...rest }) => {
  return (
    <div className="w-5/6 h-80 mx-auto rounded-2xl overflow-hidden ">
      <img
        src={image}
        alt="hero-img"
        className="w-full h-full object-cover object-[0-250px]"
      />
    </div>
  );
};

export default Hero;
