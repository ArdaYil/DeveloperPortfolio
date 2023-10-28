import useImages from "../../hooks/useImages";
import Icon from "../icons/Icon";

const Logo = () => {
  const { data: logo } = useImages("icons:Logo.png", "png");

  return <Icon className="clickable" src={logo as string} />;
};

export default Logo;
