import React, { useState } from "react";
import Card from "./components/card/Card";
import Form from "./components/form/Form";
import fetchData from "./components/services/api";

function App() {
  const [characterData, setCharacterData] = useState(null);

  const handleSearch = async (nome) => {
    const data = await fetchData(nome);
    setCharacterData(data.results ? data.results[0] : null); // Busca o primeiro personagem se houver resultados
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-8"> 
      <span className="text-slate-700 text-4xl">Rick and Morty App</span>
      <Form onSearch={handleSearch} />
      {characterData && <Card character={characterData} />}
    </div>
  );
}

export default App;
