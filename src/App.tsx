import { Routes, Route } from "react-router-dom";
import { GameView } from "./views/GameView";
import { MenuView } from "./views/MenuView";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/game" element={<GameView />} />
        <Route path="/" element={<MenuView />} />
      </Routes>
      <Analytics />
    </>
  );
}

export default App;
