import { CSSProperties } from "react";
import { IoMdMenu } from "react-icons/io";

interface Props {
  onMenuOpen: () => void;
}

const MenuButton = ({ onMenuOpen }: Props) => {
  const styles = {
    justifySelf: "right",
  } as CSSProperties;

  return (
    <span style={styles} onClick={onMenuOpen}>
      <IoMdMenu className="nav-bar__menu" size={40} />
    </span>
  );
};

export default MenuButton;
