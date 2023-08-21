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
        <ImageCard
          className="campain sports-edition"
          src="/src/assets/images/sports.webp"
          title="Sports"
          description="Check out our new sportwear for this season. Stunning, comfortable, and absolutely amazing!"
          button={
            <LinkButton color={"LIGHT"} to="/clothing?=sports-edition">
              Buy Now!
            </LinkButton>
          }
        />
        <BestSellingProducts />
        <ImageCard
          className="campain summer-edition"
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
