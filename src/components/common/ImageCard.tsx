import { CSSProperties, ReactNode } from "react";
import ClassName from "../../util/ClassName";

interface Props {
  src: string;
  className?: string;
  title: string;
  description: string;
  button: ReactNode;
}

const ImageCard = ({ src, title, description, button, className }: Props) => {
  const styles: CSSProperties = {
    backgroundImage: `url(${src})`,
  };

  return (
    <div className={ClassName("img-card", className)} style={styles}>
      <header className="img-card__header">
        <h2 className="img-card__title">{title}</h2>
        <p className="img-card__description">{description}</p>
      </header>
      <footer className="img-card__footer">{button}</footer>
    </div>
  );
};

export default ImageCard;
