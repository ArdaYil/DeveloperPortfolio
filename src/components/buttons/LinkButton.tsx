import { Link } from "react-router-dom";
import ClassName from "../../util/ClassName";
import Color from "../../types/Color";
import { CSSProperties } from "react";
import Colors from "../../config/ColorPalette";

interface Props {
  children: string;
  to: string;
  color?: Color;
  className?: string;
}

const LinkButton = ({ children, to, className, color = "DARK" }: Props) => {
  let foregroundColor: Color;

  if (color === "DARK") foregroundColor = "LIGHT";
  else foregroundColor = "DARK";

  const styles: CSSProperties = {
    backgroundColor: (Colors as any)[color.toLowerCase()],
    color: (Colors as any)[foregroundColor.toLowerCase()],
  };

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
