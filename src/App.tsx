import React from "react";
import "./App.scss";
import CodeField from "./components/CodeField";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1 className="h1 center">Paskal compiler</h1>
      <p>
        Fork{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/MatiasLyyra/paskal"
        >
          me
        </a>{" "}
        on github
      </p>
      <h2 className="h2 mb-0">Editor:</h2>
      <CodeField indentation={2} />
    </div>
  );
};

export default App;
