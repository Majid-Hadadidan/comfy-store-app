import { useDispatch } from "react-redux";
import { formatPrice, generateAmountOption } from "../../utils";
import { editItem, removeItem } from "../../store/cart/cartSlice";

function CartItem({ cartItem }) {
  const dispatch = useDispatch();

  const removeItemFromTheCart = () => {
    dispatch(removeItem({ cartID }));
  };

  const handleAmount = (e) => {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }));
  };
  const { amount, title, price, image, cartID, company, productColor } =
    cartItem;
  return (
    <article
      key={cartID}
      className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0 "
    >
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg object-cover"
      />
      {/* INFO */}
      <div className="sm:ml-16 sm:w-48">
        {/* TITLE */}
        <h3 className="capitalize font-medium">{title}</h3>
        {/* COMPANY */}
        <h4 className="text-sm mt-2 capitalize text-neutral-content">
          {company}
        </h4>
        {/* COLOR */}
        <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
          Color:
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>

      <div className="sm:ml-24">
        {/* AMOUNT */}
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text">Amount</span>
          </label>
          <select
            name="amount"
            id="amount"
            className="mt-2 select select-bordered select-base select-sm"
            value={amount}
            onChange={handleAmount}
          >
            {generateAmountOption(amount + 5)}
          </select>
        </div>
        {/* REMOVE */}
        <button className="link link-primary mt-2 link-hover text-sm " onClick={removeItemFromTheCart}>
          Remove
        </button>
      </div>
      {/* PRICE */}
      <p className="font-medium text-sm">{formatPrice(price)}</p>

      <div className=""></div>
    </article>
  );
}
export default CartItem;
