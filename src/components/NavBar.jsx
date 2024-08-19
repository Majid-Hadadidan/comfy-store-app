import { useEffect, useState } from "react";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useSelector } from "react-redux";

//theme
const themes = {
  winter: "winter",
  dracula: "dracula",
};

const getThemeFromLocalStorage = () =>
  localStorage.getItem("theme") || themes.winter;

function NavBar() {
  const [theme, setTheme] = useState(getThemeFromLocalStorage());

  //useSelector of redux
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  //useEffect for save theme to lacalStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  //handleTheme function called when click checkBox button for theme
  const handleTheme = () => {
    setTheme(() => {
      const { winter, dracula } = themes;
      const newTheme = theme === winter ? dracula : winter;
      return newTheme;
    });
  };

  //JSX for NavBar
  return (
    <nav className="bg-base-200">
      {/* NAVBAR */}
      <div className="navbar align-element">
        {/*NAVBAR START*/}
        <div className="navbar-start ">
          {/*TITLE */}
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary text-3xl items-center "
          >
            C
          </NavLink>
          {/*DROPDOWN */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost flex lg:hidden ">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <div className="dropdown-content menu mt-3 p-2 z-[1] shadow menu-sm bg-base-200  rounded-box w-52 ">
              <NavLinks />
            </div>
          </div>
        </div>

        {/* NAVBAR CENTER*/}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        {/* NAVBAR END*/}
        <div className="navbar-end">
          {/* THEME SETUP*/}
          <label className="swap swap-rotate">
            <input type="checkbox" onClick={handleTheme} />
            {/* sun icon */}
            <BsSunFill className="h-4 w-4 swap-on" />
            {/* moon icon */}
            <BsMoonFill className="h-4 w-4 swap-off " />
          </label>

          {/* CART LINK*/}
          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className=" w-6 h-6 " />
              <span className="indicator-item badge badge-sm badge-primary">
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
