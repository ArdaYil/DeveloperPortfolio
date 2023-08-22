import Color from "../../types/Color";
import ClassName from "../../util/ClassName";
import { getColors } from "../../util/ColorHandler";

interface Props {
  children: string | string[];
  color: Color;
  className?: string;
}

const Badge = ({ children, color, className }: Props) => {
  return (
    <div style={getColors(color)} className={ClassName("badge", className)}>
      {children}
    </div>
  );
};

export default Badge;
