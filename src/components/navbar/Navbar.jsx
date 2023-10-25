import { Link } from "react-router-dom";
import rick from "../../assets/images/rick.png";
import "./styles.scss";

const Navbar = ({ toggle }) => {
  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <nav className="nav-container">
      <ul>
        <li>
          <Link to="./">
            <img
              src={rick}
              alt="image-rick"
              className="logo"
              onClick={scrollToTop}
            />
          </Link>
        </li>
        <li>
          <a to="/#about" className="about" onClick={toggle} href="/#about">
            Acerca de
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
