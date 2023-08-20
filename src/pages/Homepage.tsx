import LinkButton from "../components/buttons/LinkButton";
import ImageCard from "../components/common/ImageCard";
import BestSellingProducts from "../components/homepage/BestSellingProducts";
import Hero from "../components/homepage/Hero";

document.title = "Nova Fits | Home";

const Homepage = () => {
  return (
    <>
      <main>
        <Hero />
        <BestSellingProducts />
        <ImageCard
          className="summer-edition"
          src="/src/assets/images/summer.webp"
          title="Summer 2023"
          description="Check out our new summer collection for this year. Now with the best deals ever. Unleash your summer wardrobe!"
          button={
            <LinkButton to="/clothing?=summer-editon">Buy Now!</LinkButton>
          }
        />
      </main>
    </>
  );
};

export default Homepage;
