import React from "react";
import Card from "./Card";

const HomeDescription = ({ card1, card2 }) => {
  return (
    <div className="mt-5">
      <h2 className="text-6xl text-center my-5">Concept</h2>
      <div className="flex justify-between items-center my-10  w-2/3 mx-auto">
        <Card element={card1} />
        <div className="w-1/3 px-8 text-xl">
          <p>
            Vous avez des choix à faire, et c’est l’occasion parfaite de tester
            vos préférences avec notre système de comparaison par paires.
          </p>
          <p className="mt-5">
            Sur Pair Play, vous choisissez entre deux options à chaque tour,
            jusqu'à ce qu’il ne reste plus qu’un gagnant : votre favori ultime !
          </p>
        </div>
        <Card element={card2} />
      </div>
      <div className="flex flex-col items-center my-10">
        <h3 className="text-5xl">Comment ça marche ?</h3>
        <ol className="list-decimal flex flex-col gap-3 my-10 text-lg font-medium">
          <li>
            <span className="font-bold">Sélectionnez un thème</span> parmi ceux
            disponibles (comme vos plats préférés, vos films, ou même vos
            personnages de jeu vidéo).
          </li>
          <li>
            <span className="font-bold">Comparez des éléments :</span> à chaque
            tour, deux options s’affichent. Choisissez celle qui vous attire le
            plus.
          </li>
          <li>
            <span className="font-bold">Élimination progressive :</span> en
            quelques tours, les options sont éliminées l'une après l'autre
            jusqu’à ce qu'il n'en reste qu'une.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default HomeDescription;
