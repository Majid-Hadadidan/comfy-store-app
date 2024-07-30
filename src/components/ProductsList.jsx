import { useLoaderData, Link } from "react-router-dom";
import { formatPrice } from "../utils";

function ProductsList() {
  const { products } = useLoaderData();
  return (
    <div className="mt-10 grid gap-y-8">
      {products.map((product) => {
        const { title, image, price, company } = product.attributes;
        const dollarsAmount = formatPrice(price);

        return (
            <Link
            key={product.id}
            to={`/products/${product.id}`}
            className='p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl duration-300 group'
          >
            <img
              src={image}
              alt=""
              className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover "
            />

            <div className="ml-0 sm:ml-16">
              <h3 className="capitalize font-medium text-lg">{title}</h3>
              <h4 className="capitalize font-medium text-lg">{company}</h4>
            </div>

            <p className="ml-0 sm:ml-auto capitalize text-lg font-medium">{dollarsAmount}</p>
          </Link>
        );
      })}
    </div>
  );
}
export default ProductsList;
