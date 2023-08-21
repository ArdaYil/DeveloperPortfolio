import DeepLoop from "../../util/DeepLoop";
import products from "./ProductData";

type ProductColors = {
  green?: string;
  default?: string;
  blue?: string;
} & { [key: string]: string };

export interface Product {
  title: string;
  price: number;
  colors: ProductColors;
  _id: number;
  defaultColor: string;
}

class ProductSystem {
  public queryProductsFromId(ids: Array<number>) {
    const queriedProducts = [] as Array<Product>;

    const execute = (data: Product) => {
      console.log(data);
      if (ids.find((id) => id === data._id)) queriedProducts.push(data);
    };

    DeepLoop<Product>(products, execute, ["_id"]);

    return queriedProducts;
  }
}

const ProductSystemInstance = new ProductSystem();

export default ProductSystemInstance;
