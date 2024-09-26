import React, { useState } from "react";
import Card from "./components/card/Card";
import Form from "./components/form/Form";
import fetchData from "./components/services/api";

function App() {
  const [characters, setCharacters] = useState([]);

  const handleSearch = async (nome) => {
    const data = await fetchData(nome);
    setCharacters(data.results || []); // Armazena todos os resultados, ou um array vazio se não houver
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-8"> 
      <span className="text-slate-700 text-4xl">Rick and Morty App</span>
      <Form onSearch={handleSearch} />
      {characters.length > 0 ? (
        <Card characters={characters} />  // Passa a lista de personagens
      ) : (
        <span>Nenhum personagem encontrado</span>
      )}
    </div>
  );
}

export default App;
