import { CSSProperties } from "react";
import useImages from "../../hooks/useImages";

const Hero = () => {
  const { data: clothing } = useImages("hero:clothing-2023.webp");
  const { data: jeans } = useImages("hero:jeans.webp");
  const { data: dog } = useImages("hero:dog.webp");
  const { data: shoes } = useImages("hero:shoes.webp");

  const getStyle = (image: string) =>
    ({ backgroundImage: `url(${image})` } as CSSProperties);

  const styleA = getStyle(clothing as string);
  const styleB = getStyle(jeans as string);
  const styleC = getStyle(dog as string);
  const styleD = getStyle(shoes as string);

  return (
    <section className="hero">
      <article style={styleA} className="hero__item--a"></article>
      <article style={styleB} className="hero__item--b"></article>
      <article style={styleC} className="hero__item--c"></article>
      <article style={styleD} className="hero__item--d"></article>
    </section>
  );
};

export default Hero;
