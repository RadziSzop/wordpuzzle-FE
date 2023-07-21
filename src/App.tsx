import { Routes, Route } from "react-router-dom";
import { Game } from "./views/Game";
import { Menu } from "./views/Menu";

function App() {
  return (
    <>
      <Routes>
        <Route path="/game" element={<Game />} />
        <Route path="/" element={<Menu />} />
      </Routes>
    </>
  );
}

export default App;
