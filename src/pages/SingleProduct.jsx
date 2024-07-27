import { useLoaderData, Link } from "react-router-dom";
import { customFetch, formatPrice } from "../utils";
import { useState } from "react";

//loader function for singleProduct
export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`);
  return { product: response.data.data };
};

//singleProduct page for every product with /product/:id path
function SingleProduct() {
  const { product } = useLoaderData();
  const { title, price, description, colors, company, image } =
    product.attributes;
  //useState
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const dollarsAmount = formatPrice(price);

  function handleAmount(event) {
    setAmount(parseInt(event.target.value));
  }
  return (
    <section>
      <div className="breadcrumbs text-md">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/prodcuts">Products</Link>
          </li>
        </ul>
      </div>
      {/* PRODUCT */}
      <div className='mt-6 grid gap-y-8 lg:grid-cols-2  lg:gap-x-16'>
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="h-96 w-96 object-cover rounded-lg md:w-full "
        />
        {/* PRODUCT INFO */}
        <div>
          <h2 className="text-3xl font-bold capitalize">{title}</h2>
          <h4 className="mt-2 text-xl text-neutral-content font-bold">
            {company}
          </h4>
          <p className="mt-3 text-xl">{dollarsAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
          {/* COLORS */}
          <div className="mt-6">
            <h3 className="text-md capitalize font-medium tracking-wider">
              colors
            </h3>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    type="button"
                    key={color}
                    className={`badge w-6 h-6 mr-2 ${
                      color === productColor && "border-2 border-secondary"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
          </div>
          {/* AMOUNT */}
          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <h4 className='text-md font-medium tracking-wider capitalize'>
                amount
              </h4>
            </label>
            <select
              className='select select-secondary select-bordered select-md'
              value={amount}
              onChange={handleAmount}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </div>

          {/* CART BTN */}
          <div className="mt-10">
            <button
              className="btn btn-secondary btn-md"
              onClick={() => console.log("add to bag")}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SingleProduct;
