import { useLoaderData, Link } from "react-router-dom";
import { formatPrice } from "../utils";

function ProductsGrid() {
  const { products } = useLoaderData();

  return (
    <div className="pt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => {
        const { price, image, title } = product.attributes;
        const dollarsAmount = formatPrice(price);

        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="card w-full shadow-xl hover:shadow-2xl translate duration-300 "
          >
            <figure>
              <img
                src={image}
                alt={title}
                className="h-64 md:h-48 w-full rounded-xl object-cover  "
              />
            </figure>
            <div className="card-body text-center items-center ">
              <h2 className="card-title capitalize tracking-wider">{title}</h2>
              <span className="text-secondary">{dollarsAmount}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
export default ProductsGrid;
