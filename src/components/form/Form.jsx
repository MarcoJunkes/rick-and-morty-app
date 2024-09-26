import React from "react";

function Form(){
    return(
        <div className="flex flex-col items-center justify-center">
            <form className="flex items-center">
                <input 
                    type="text"
                    placeholder="Nome do personagem"
                    className="p-3 rounded-lg outline-none"
                />
                <button
                    type="submit"
                    className="bg-blue-600 p-3 rounded-lg ml-3 text-white font-bold"
                >
                    Pesquisar
                </button>
            </form>
        </div>
    );
}

export default Form;
