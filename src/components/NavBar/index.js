import { Container } from "./styles";
import { Link } from "react-router-dom";

import fofa from "../../assets/fofa.png";

const NavBar = () => {
  return (
    <Container>
      <img src={fofa} alt="Fofa" />
      <div>
        <Link to="/">Home</Link>
        <Link to="/cursos">Cursos</Link>
      </div>
    </Container>
  );
};

export default NavBar;
