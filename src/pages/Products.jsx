import Filters from "../components/Filters";
import PaginationContainer from "../components/PaginationContainer";
import ProductsContainer from "../components/ProductsContainer";
import { customFetch } from "../utils";
const url = "/products";

//Loader
export const loader = async ({ request }) => {
  //get queryParams
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  //post method with axios
  const response = await customFetch(url, { params });
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta, params };
};

//JSX
function Products() {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
}
export default Products;
