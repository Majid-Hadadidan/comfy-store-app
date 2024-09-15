import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTotals from "../components/Cart/CartTotals";
import CartItemsList from "../components/Cart/CartItemsList";
import SectionTitle from "../components/UI/SectionTitle";

function Cart() {
  const numItemInCart = useSelector((state) => state.cartState.numItemInCart);
  const user = useSelector((state) => state.userState.user);
    if (numItemInCart === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }
  return (
    <>
      <SectionTitle text="Shopping Cart" />
      <div className=" mt-8 grid lg:grid-cols-12 gap-8 ">
        <div className=" lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:pl-4 lg:col-span-4">
          <CartTotals />
          {user ? (
            <Link to="/checkout" className="btn btn-primary btn-block mt-8 uppercase">
              Proceed to checkout
            </Link>
          ) : (
            <Link to="/login" className="btn btn-primary btn-block mt-8 uppercase">
              Please Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
export default Cart;
