import { ReactNode } from "react";
import ClassName from "../../util/ClassName";

interface Props {
  icon: ReactNode;
  className?: string;
  color?: string;
}

const RoundedIcon = ({ icon, className, color = "#FFF" }: Props) => {
  const getIconClassName = () => `icon--rounded`;

  const backgroundStyle = {
    backgroundColor: color,
  };

  return (
    <div
      style={backgroundStyle}
      className={ClassName(getIconClassName(), className)}
    >
      {icon}
    </div>
  );
};

export default RoundedIcon;
