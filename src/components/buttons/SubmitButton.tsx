import Color from "../../types/Color";
import ClassName from "../../util/ClassName";
import { getColors } from "../../util/ColorHandler";

interface Props {
  children: string;
  className?: string;
  color?: Color;
}

const SubmitButton = ({ children, className, color = "DARK" }: Props) => {
  const style = getColors(color);

  return (
    <button style={style} type="submit" className={ClassName("btn", className)}>
      {children}
    </button>
  );
};

export default SubmitButton;
