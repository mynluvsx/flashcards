import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Cursos from "./pages/Cursos";
import Cadastrar from "./pages/Cadastrar";

import NavBar from "./components/NavBar";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div style={{ marginTop: "5rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;
