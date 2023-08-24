import { Link } from "react-router-dom";
import CloseButton from "../buttons/CloseButton";
import SearchBar from "../input/SearchBar";

interface Props {
  menuOpen: boolean;
  onMenuClose: () => void;
}

const PhoneMenu = ({ menuOpen, onMenuClose }: Props) => {
  const openClass = menuOpen ? " open" : "";

  return (
    <section className={`phone-menu${openClass}`}>
      <header className="phone-menu__header">
        <CloseButton
          className="phone-menu__header__close-btn"
          onClose={onMenuClose}
        />
      </header>
      <section className="phone-menu__search-bar-container">
        <SearchBar className="phone-menu__search-bar" />
      </section>
      <section className="phone-menu__category-links">
        <Link className="phone-menu__link" to="/">
          Men
        </Link>
        <Link className="phone-menu__link" to="/">
          Women
        </Link>
        <Link className="phone-menu__link" to="/">
          Children
        </Link>
      </section>
      <footer className="phone-menu__footer">
        <Link className="phone-menu__link" to="/">
          Account
        </Link>
      </footer>
    </section>
  );
};

export default PhoneMenu;
