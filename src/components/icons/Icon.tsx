import IconSize from "../../types/IconSize";
import ClassName from "../../util/ClassName";

interface Props {
  src: string;
  className?: string;
  size?: IconSize;
}

const Icon = ({ src, className, size = "LARGE" }: Props) => {
  const getIconClassName = () => `icon--${size.toLowerCase()}`;

  return <img src={src} className={ClassName(getIconClassName(), className)} />;
};

export default Icon;
