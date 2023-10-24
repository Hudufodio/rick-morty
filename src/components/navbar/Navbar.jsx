import { Link } from "react-router-dom";
import rick from "../../assets/images/rick.png";
import "./styles.scss";

const Navbar = () => {
  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <nav className="nav-container">
      <ul>
        <li>
          <Link to="./" hrefLang="/">
            <img src={rick} alt="image-rick" className="logo" onClick={scrollToTop}/>
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
