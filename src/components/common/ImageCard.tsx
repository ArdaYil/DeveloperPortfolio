import { ReactNode } from "react";
import ClassName from "../../util/ClassName";

interface Props {
  src: string;
  className?: string;
  title: string;
  description: string;
  button: ReactNode;
}

const ImageCard = ({ src, title, description, button, className }: Props) => {
  return (
    <div className={ClassName("img-card", className)}>
      <section className="img-card__container">
        <header className="img-card__container__header">
          <h2 className="img-card__container__header__title">{title}</h2>
          <p className="img-card__container__header__description">
            {description}
          </p>
        </header>
        <footer className="img-card__container__footer">{button}</footer>
      </section>
      <img className="img-card__img" src={src} />
    </div>
  );
};

export default ImageCard;
