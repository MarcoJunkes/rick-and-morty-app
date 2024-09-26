import React, { useState } from "react";

function Card({character}) {
    // Definir estado para controlar a exibição da segunda div
    const [showDetails, setShowDetails] = useState(false);

    // Função que alterna o estado
    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className="flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 mt-5">
                {/* Primeira div que, ao ser clicada, alterna a exibição */}
                <div className="text-center cursor-pointer" onClick={toggleDetails}>
                    <img src={character.image} alt="weather icon"></img>
                    <span className="block text-slate-700 text-2xl">{character.name}</span>
                </div>

                {/* Segunda div, que só é exibida quando o estado showDetails for true */}
                {showDetails && (
                    <div className="flex flex-col text-center mt-4 mb-2"> {/* flex-col para alinhar itens em coluna */}
                        <span className="block">{character.status}</span>
                        <span className="block">{character.species}</span>
                        <span className="block">{character.type}</span>
                        <span className="block">{character.gender}</span>
                        <span className="block">{character.origin.name}</span>
                        <span className="block">{character.location.name}</span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Card;
