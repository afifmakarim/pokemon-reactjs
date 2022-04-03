import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import FavoritePage from "./pages/FavoritePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/detail/:id" element={<DetailPage />}></Route>
        <Route path="/favorite" element={<FavoritePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
