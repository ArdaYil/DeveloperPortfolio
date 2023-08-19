import BestSellingProducts from "../components/homepage/BestSellingProducts";
import Hero from "../components/homepage/Hero";

document.title = "Nova Fits | Home";

const Homepage = () => {
  return (
    <>
      <main>
        <Hero />
        <BestSellingProducts />
      </main>
    </>
  );
};

export default Homepage;
