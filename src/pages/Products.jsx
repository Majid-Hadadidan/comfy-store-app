import Filters from "../components/Filters";
import PaginationContainer from "../components/PaginationContainer";
import ProductsContainer from "../components/ProductsContainer";
import { customFetch } from "../utils";
const url = "/products";
export const loader = async ({ request }) => {
  console.log(request)
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  console.log(params);
  const response = await customFetch(url, { params });
  const products = response.data.data;
  const meta = response.data.meta;
  console.log(meta)
  return { products, meta };
};

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
