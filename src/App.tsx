import { useState } from "react";
import "./App.css";
import { AppContainer, AppHeader } from "./App.styled";
import Objective from "./components/objective/Objective";
import ObjectiveEntry from "./components/objectiveEntry/ObjectiveEntry";

function App() {
  const [objectives, setObjectives] = useState<string[]>([]);

  return (
    <AppContainer>
      <AppHeader>To-Do List</AppHeader>
      <ObjectiveEntry setObjectives={setObjectives} />
      {objectives.map((item) => (
        <Objective title={item} />
      ))}
    </AppContainer>
  );
}

export default App;
