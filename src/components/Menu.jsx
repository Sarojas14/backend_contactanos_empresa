import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <Link to="/" style={{ marginRight: 16 }}>Inicio</Link>
      <Link to="/nosotros" style={{ marginRight: 16 }}>Nosotros</Link>
      <Link to="/recursos" style={{ marginRight: 16 }}>Recursos</Link>
      <Link to="/mision" style={{ marginRight: 16 }}>Misión</Link>
      <Link to="/vision" style={{ marginRight: 16 }}>Visión</Link>
      <Link to="/contactanos" style={{ marginRight: 16 }}>Contáctanos</Link>
    </nav>
  );
};

export default Menu;
