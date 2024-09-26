import React, { useState } from "react";

function Card({ characters }) {
  return (
    <div className="flex flex-col items-center space-y-6 overflow-auto h-full">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

function CharacterCard({ character }) {
  // Definir estado para controlar a exibição da segunda div
  const [showDetails, setShowDetails] = useState(false);

  // Função que alterna o estado
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="flex justify-center items-center w-full max-w-md">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full mt-5">
        {/* Primeira div que, ao ser clicada, alterna a exibição */}
        <div className="text-center cursor-pointer" onClick={toggleDetails}>
          <img src={character.image} alt={character.name} className="mx-auto rounded-full" />
          <span className="block text-slate-700 text-2xl">{character.name}</span>
        </div>

        {/* Segunda div, que só é exibida quando o estado showDetails for true */}
        {showDetails && (
          <div className="flex flex-col text-center mt-4 mb-2">
            <span className="block">Status: {character.status}</span>
            <span className="block">Espécie: {character.species}</span>
            <span className="block">Tipo: {character.type || "N/A"}</span>
            <span className="block">Gênero: {character.gender}</span>
            <span className="block">Origem: {character.origin.name}</span>
            <span className="block">Localização: {character.location.name}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
