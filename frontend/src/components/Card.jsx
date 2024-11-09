import React from "react";

const Card = ({ element }) => {
  return (
    <div className="w-60 h-80 overflow-hidden rounded-2xl">
      <img
        src={element.image}
        alt={element.name}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Card;
