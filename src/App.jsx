import About from "./pages/About";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Error from "./pages/Error";
import SingleProduct, {
  loader as singleProductLoader,
} from "./pages/SingleProduct";
import Products, { loader as productsLoader } from "./pages/Products";
import Register from "./pages/Register";
import Orders from "./pages/Orders";
import HomeLayout from "./pages/HomeLayout";
import Landing, { loader as landingLoader } from "./pages/Landing";
import Cart from "./pages/Cart";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorElement from "./components/UI/ErrorElement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      {
        path: "/products",
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productsLoader,
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: singleProductLoader,
      },
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
