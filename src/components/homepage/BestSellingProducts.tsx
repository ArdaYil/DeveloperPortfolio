const products = [{ _id: 1 }, { _id: 2 }, { _id: 3 }, { _id: 4 }, { _id: 5 }];

const BestSellingProducts = () => {
  return (
    <section className="best-selling-products">
      <h2 className="best-selling-products__title">Best selling products!</h2>
      <article className="best-selling-products__main">
        {products.map((product) => (
          <article key={product._id} className="best-selling-products__product">
            <div className="best-selling-products__product__image" />
            <h3 className="best-selling-products__product__title">Title</h3>
            <p className="best-selling-products__product__price">Price</p>
          </article>
        ))}
      </article>
    </section>
  );
};

export default BestSellingProducts;
