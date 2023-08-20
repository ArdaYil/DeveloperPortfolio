import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import Colors from "../../config/ColorPalette";
import RoundedIcon from "../icons/RoundedIcon";
import SearchBar from "../input/SearchBar";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <section className="nav-bar__section-left">
        <Logo />
      </section>
      <section className="nav-bar__section--middle">
        <Link className="nav-bar__link" to="about">
          Men
        </Link>
        <Link className="nav-bar__link" to="projects">
          Women
        </Link>
        <Link className="nav-bar__link" to="contact">
          Children
        </Link>
      </section>
      <section className="nav-bar__section--right">
        <SearchBar className="nav-bar__section--right__search-bar" />
        <RoundedIcon icon={<BiUser size={25} />} color={Colors.medium} />
        <RoundedIcon
          icon={<AiOutlineShoppingCart size={25} />}
          color={Colors.medium}
        />
      </section>
    </nav>
  );
};

export default Navbar;
