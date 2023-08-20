import { Link } from "react-router-dom";
import ClassName from "../../util/ClassName";
import Color from "../../types/Color";
import { CSSProperties } from "react";
import Colors from "../../config/ColorPalette";
import { getColors } from "../../util/ColorHandler";

interface Props {
  children: string;
  to: string;
  color?: Color;
  className?: string;
}

const LinkButton = ({ children, to, className, color = "DARK" }: Props) => {
  const styles = getColors(color);

  return (
    <Link
      style={styles}
      className={ClassName("link-button", className)}
      to={to}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
