import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../store/user/userSlice";
import { clearCart } from "../store/cart/cartSlice";
function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userState.user);

  function handleLogout() {
    navigate("/");
    dispatch(clearCart());
    dispatch(logoutUser());
  }
  return (
    <header className=" bg-neutral py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">
        {/* USER */}
        {user ? (
          <div className="flex items-center gap-x-2 sm:gap-x-8 text-neutral-content">
            <p className="text-xs sm:text-sm">Hello,{user.username}</p>
            <button
              className="btn btn-xs btn-outline btn-primary"
              onClick={handleLogout}
            >
              LOGOUT
            </button>
          </div>
        ) : (
          <div className="flex justify-center items-center gap-x-6">
            <Link to="/login" className="link link-hover text-xs sm:text-sm ">
              Sign in / Guest
            </Link>
            <Link
              to="/register"
              className="link link-hover text-xs sm:text-sm "
            >
              Create Account
            </Link>
          </div>
        )}
        {/* LINKS */}
      </div>
    </header>
  );
}
export default Header;
