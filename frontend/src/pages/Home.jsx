import React from "react";
import Hero from "../components/Hero";
import HomeDescription from "../components/HomeDescription";

const image1 =
  "https://i.ytimg.com/vi/0iPrMw1Yg7M/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDhu73TwIbGEq1ZnLsUhvw8C1WtPg";
const cardImage1 =
  "https://rukminim2.flixcart.com/image/850/1000/ky90scw0/poster/m/6/4/medium-redcloud-goku-ultra-instinct-wall-poster-for-room-for-original-imagagedrzjxskyj.jpeg?q=90&crop=false";
const cardImage2 = "https://printler.com/media/photo/127669.jpg";

const card1Test = {
  name: "goku",
  image: cardImage1,
};

const card2Test = {
  name: "vegeta",
  image: cardImage2,
};

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-[#edb630] via-[#f0e9d2] to-[#2b8fc6]">
      <h1 className="text-7xl text-center font-bold my-5">
        Bienvenue sur Pair Play
      </h1>
      <Hero image={image1} />
      <HomeDescription card1={card1Test} card2={card2Test} />
    </div>
  );
};

export default Home;
