import About from "./pages/About";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Error from "./pages/Error";
import SingleProduct from "./pages/SingleProduct";
import Products from "./pages/Products";
import Register from "./pages/Register";
import Orders from "./pages/Orders";
import HomeLayout from "./pages/HomeLayout";
import Landing from "./pages/Landing";
import Cart from "./pages/Cart";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing /> },
      { path: "/products", element: <Products /> },
      { path: "/products/:id", element: <SingleProduct /> },
      { path: "/cart", element: <Cart /> },
      { path: "/about", element: <About /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/orders", element: <Orders /> },
    ],
  },
  { path: "/login", element: <Login />, errorElement: <Error /> },
  { path: "/register", element: <Register />, errorElement: <Error /> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;
