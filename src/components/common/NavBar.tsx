import SearchBar from "../input/SearchBar";
import Icon from "../icons/Icon";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import RoundedIcon from "../icons/RoundedIcon";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import Colors from "../../config/ColorPalette";

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
        <SearchBar />
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
