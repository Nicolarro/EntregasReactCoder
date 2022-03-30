import { NavLink, Link} from "react-router-dom";
import CardWidget from "./CardWidget";

import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = ({links}) => {
  
  return (
    <header id="main-header" className="header">
      <NavLink to="/">
        <img
          src="https://i.ibb.co/1RDMJgg/Logo-Index.jpg"
          width="70"
          height="70"
          alt=""
          className="header--color header--logo img-fluid"
        />
      </NavLink>

      <nav>
        {links.map((elemento) => {
          return (
            <NavLink
              key={elemento.id}
              to={elemento.href}
              className="header--color NavBar--estilo" >
              {" "}
              {elemento.name}
            </NavLink>
          );
        })}
        <NavLink to="/carrito">

          <CardWidget />
        </NavLink>
      </nav>
    </header>
  );

}

export default Navbar;





