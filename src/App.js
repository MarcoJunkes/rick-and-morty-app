import React from "react";
import Card from "./components/card/Card";
import Form from "./components/form/Form";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-8"> 
      <Form />
      <Card />
    </div>
  );
}

export default App;
