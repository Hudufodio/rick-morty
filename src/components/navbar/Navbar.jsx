import { Link } from "react-router-dom";
import rick from '../../../public/images/rick.png';
import './styles.scss';

const Navbar = () => {
  return (
    <nav className="nav-container">
      <ul>
        <li><Link to='/'>
          <img src={rick} alt="image-rick" className="logo" />
          </Link></li>
        <li><Link to='/characters'>Characters</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
