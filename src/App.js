import "./App.css";
import Navbar from "./components/Navbar";
import Movie from "./components/Movie";
import { useState } from "react";

function App() {
  const [movieName, setMovieName] = useState("");
  return (
    <div className="App">
      <Navbar setMovieName={setMovieName} />
      <Movie movieName={movieName} />
    </div>
  );
}

export default App;
