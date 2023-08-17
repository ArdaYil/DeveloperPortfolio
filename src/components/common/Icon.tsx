import ClassName from "../../util/className";

interface Props {
  src: string;
  className?: string;
}

const Icon = ({ src, className }: Props) => {
  return <img src={src} className={ClassName("icon", className)} />;
};

export default Icon;
