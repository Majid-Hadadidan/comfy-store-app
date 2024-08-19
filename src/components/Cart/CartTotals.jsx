import { useSelector } from "react-redux";
import { formatPrice } from "../../utils";

function CartTotals() {
  const { cartTotal, orderTotal, shipping, tax } = useSelector(
    (state) => state.cartState
  );

  return (
    <div className="card bg-base-200 ">
      <div className="card-body">
        {/* SUBTOTAL */}
        <p className="flex justify-between pb-2 border-b border-base-300 text-xs">
          <span>Subtotal</span>
          <span className="font-medium">{formatPrice(cartTotal)}</span>
        </p>
        {/* SHIPPING */}
        <p className="flex justify-between pb-2 border-b border-base-300 text-xs">
          <span>Shipping</span>
          <span className="font-medium">{formatPrice(shipping)}</span>
        </p>
        {/* TAX */}
        <p className="flex justify-between pb-2 border-b border-base-300 text-xs">
          <span>Tax</span>
          <span className="font-medium">{formatPrice(tax)}</span>
        </p>
        {/* Order TotalL */}
        <p className="flex justify-between pb-2 mt-4 text-sm">
          <span>OrderTotal</span>
          <span className="font-medium">{formatPrice(orderTotal)}</span>
        </p>
      </div>
    </div>
  );
}
export default CartTotals;
