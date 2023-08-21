const menJackets = "/src/assets/products/men/jackets";
const menSuits = "/src/assets/products/men/suits";
const menSweatshirts = "/src/assets/products/men/sweatshirts";
const womenPants = "/src/assets/products/women/pants";
const womenSweatshirts = "/src/assets/products/women/sweatshirts";

const products = {
  men: {
    jackets: {
      overall: [
        {
          title: "Solid cotton padded jacket",
          price: 50,
          colors: { green: `${menJackets}/jacket1/GreenJacket.webp` },
          _id: 1,
          defaultColor: "green",
        },
      ],
    },
    suits: {
      overall: [
        {
          title: "Solid cotton padded jacket",
          price: 50,
          colors: { blue: `${menSuits}/suit1/blueSuit.webp` },
          _id: 3,
          defaultColor: "blue",
        },
      ],
    },
    sweatshirts: {
      hoodies: [
        {
          title: "Nike Hoodie",
          price: 50,
          colors: { gray: `${menSweatshirts}/NikeHoodie/HoodieGray.webp` },
          _id: 5,
          defaultColor: "gray",
        },
      ],
    },
  },
  women: {
    pants: {
      jeans: [
        {
          title: "Womens jeans",
          price: 80,
          colors: { default: `${womenPants}/WomenJeans/WomenJeans.webp` },
          _id: 2,
          defaultColor: "default",
        },
      ],
    },
    sweatshirts: {
      hoodies: [
        {
          title: "Perfect Hoodie",
          price: 30,
          colors: { blue: `${womenSweatshirts}/perfecthoodie/HoodieBlue.webp` },
          _id: 4,
          defaultColor: "blue",
        },
      ],
    },
  },
  children: {},
};

export default products;
