import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import Colors from "../../config/ColorPalette";
import MenuButton from "../buttons/MenuButton";
import RoundedIcon from "../icons/RoundedIcon";
import SearchBar from "../input/SearchBar";
import Logo from "./Logo";
import PhoneMenu from "./PhoneMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="nav-bar">
      <section className="nav-bar__section--left">
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
        <RoundedIcon
          className="nav-bar__acount"
          icon={<BiUser size={25} />}
          color={Colors.medium}
        />
        <RoundedIcon
          className="nav-bar__cart"
          icon={<AiOutlineShoppingCart size={25} />}
          color={Colors.medium}
        />
      </section>
      <MenuButton onMenuOpen={openMenu} />
      <PhoneMenu menuOpen={menuOpen} onMenuClose={closeMenu} />
    </nav>
  );
};

export default Navbar;
