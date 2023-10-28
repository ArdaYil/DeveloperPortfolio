import LinkButton from "../components/buttons/LinkButton";
import ImageCard from "../components/common/ImageCard";
import BestSellingProducts from "../components/homepage/BestSellingProducts";
import Hero from "../components/homepage/Hero";
import useImages from "../hooks/useImages";

document.title = "Nova Fits | Home";

const Homepage = () => {
  const { data: sportsImage } = useImages("campains:sports.webp");
  const { data: summerImage } = useImages("campains:summer.webp");

  return (
    <>
      <main>
        <Hero />
        <ImageCard
          className="campain"
          src={sportsImage as string}
          title="Sports"
          description="Check out our new sportwear for this season. Stunning, comfortable, and absolutely amazing!"
          button={
            <LinkButton to="/clothing?=sports-edition">Buy Now!</LinkButton>
          }
        />
        <BestSellingProducts />
        <ImageCard
          className="campain"
          src={summerImage as string}
          title="Summer 2023"
          description="Check out our new summer collection for this year. Now with the best deals ever!"
          button={
            <LinkButton to="/clothing?=summer-editon">Buy Now!</LinkButton>
          }
        />
      </main>
    </>
  );
};

export default Homepage;
