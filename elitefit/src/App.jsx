import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-amber-700">
        Welcome to the React + Vite Skeleton App!
      </h1>
    </>
  );
}

export default App;
