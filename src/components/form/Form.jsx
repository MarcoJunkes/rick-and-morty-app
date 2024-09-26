import React, { useState } from "react";

function Form({ onSearch }) {
  const [nome, setNome] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(nome); // Chama a função de busca do App
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
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
