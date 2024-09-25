import React, { useState } from "react";

function Card() {
    // Definir estado para controlar a exibição da segunda div
    const [showDetails, setShowDetails] = useState(false);

    // Função que alterna o estado
    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="bg-white p-6 mt-10 rounded-lg shadow-lg w-96">
                {/* Primeira div que, ao ser clicada, alterna a exibição */}
                <div className="text-center cursor-pointer" onClick={toggleDetails}>
                    <span>Ícone</span>
                    <span className="block text-slate-700 text-2xl">Nome</span>
                </div>

                {/* Segunda div, que só é exibida quando o estado showDetails for true */}
                {showDetails && (
                    <div className="flex flex-col text-center mt-4 mb-2"> {/* flex-col para alinhar itens em coluna */}
                        <span className="block">status</span>
                        <span className="block">species</span>
                        <span className="block">type</span>
                        <span className="block">gender</span>
                        <span className="block">origin</span>
                        <span className="block">location</span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Card;
