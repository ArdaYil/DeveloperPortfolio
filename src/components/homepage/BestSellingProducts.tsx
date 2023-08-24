import ProductSystemInstance, {
  Product,
} from "../../systems/ProductSystem/ProductSystem";
import Badge from "../common/Badge";

const productIds = [1, 2, 3, 4, 5];
const bestSellingProducts =
  ProductSystemInstance.queryProductsFromId(productIds);

const setImage = (product: Product) => {
  return product.colors[product.defaultColor];
};

const BestSellingProducts = () => {
  return (
    <section className="best-selling-products">
      <h2 className="best-selling-products__title">Best selling products!</h2>
      <article className="best-selling-products__main">
        {bestSellingProducts.map((product) => (
          <article key={product._id} className="best-selling-products__product">
            <img
              className="best-selling-products__product__image"
              src={setImage(product)}
            />
            <footer className="best-selling-products__product__footer">
              <h3 className="best-selling-products__product__title">
                {product.title}
              </h3>
              <Badge
                color={"MEDIUM"}
                className="best-selling-products__product__price"
              >
                ${product.price.toString()}
              </Badge>
            </footer>
          </article>
        ))}
      </article>
    </section>
  );
};

export default BestSellingProducts;
