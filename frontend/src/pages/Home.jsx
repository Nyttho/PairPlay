import React from "react";
import Hero from "../components/Hero";
import HomeDescription from "../components/HomeDescription";

const image1 =
  "https://cdn.pixabay.com/photo/2024/10/08/02/15/ai-generated-9104188_1280.jpg";

const Home = () => {
  return (
    <div className="bg-home">
      <h1 className="text-7xl text-center font-semibold my-5">
        Bienvenue sur Pair Play
      </h1>
      <Hero image={image1} />
      <HomeDescription />
    </div>
  );
};

export default Home;
