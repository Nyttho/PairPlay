import React from "react";
import Card from "./Card";

const HomeDescription = () => {
  return (
    <div className="mt-12 w-5/6 mx-auto">
      <h2 className="text-5xl font-bold">Comment ça marche ?</h2>
      <div className="flex gap-20 my-10">
        <div className="flex flex-col flex-1 gap-5">
          <h3 className="text-7xl text-numbers font-bold">1</h3>

          <p className="font-bold">Sélectionnez un thème</p>
          <hr className="border-numbers" />
          <p>
            Choisissez un sujet parmis ceux disponnible, comme vos plats
            préférés, vos films ou encore vos personnages de jeux vidéos
          </p>
        </div>
        <div className="flex flex-col flex-1 gap-5">
          <h3 className="text-7xl text-numbers font-bold">2</h3>

          <p className="font-bold">Comparez des éléments</p>
          <hr className="border-numbers" />
          <p>
            à chaque tour, deux options s’affichent. Choisissez celle qui vous
            attire le plus.
          </p>
        </div>
        <div className="flex flex-col flex-1 gap-5">
          <h3 className="text-7xl text-numbers font-bold">3</h3>

          <p className="font-bold">Élimination progressive</p>
          <hr className="border-numbers" />
          <p>
            en quelques tours, les options sont éliminées l'une après l'autre
            jusqu’à ce qu'il n'en reste qu'une.
          </p>
        </div>
      </div>
      <div className="my-20 text-center">
        <h2 className="text-4xl">Prêt à jouer ?</h2>
        <p className="mt-5">
          <a href="/signup" className="underline text-numbers">
            Créez un compte
          </a>{" "}
          et découvrez quel genre de personne vous êtes !
        </p>
      </div>
    </div>
  );
};

export default HomeDescription;
