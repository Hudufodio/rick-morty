import { Link } from "react-router-dom";
import rick from "../../assets/images/rick.png";
import "./styles.scss";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <ul>
        <li>
          <Link to="/">
            <img src={rick} alt="image-rick" className="logo" />
          </Link>
        </li>
        <li>
          <Link to="/characters" className="character">
            Characters
          </Link>
        </li>
        <li>
          <Link to="/about" className="about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
