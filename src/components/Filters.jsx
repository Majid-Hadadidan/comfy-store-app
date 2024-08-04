import { useLoaderData, Form, Link, matchPath } from "react-router-dom";
import FormInput from "./UI/FormInput";
import FormSelect from "./UI/FormSelect";
import FormRange from "./UI/FormRange";
import FormCheckBox from "./UI/FormCheckBox";

function Filters() {
  const { meta, params } = useLoaderData();

  const { search, company, order, shipping, price, category } = params;
  return (
    <Form className="bg-base-200 px-8 py-4 rounded-lg grid gap-x-4 gap-y-8 items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {/* SEARCH */}
      <FormInput
        type="search"
        name="search"
        label="search product"
        size="input-sm"
        defaultValue={search}
      />
      {/* CATEGORIES */}
      <FormSelect
        label="select category"
        name="category"
        list={meta.categories}
        size="select-sm"
        defaultValue={category}
      />
      {/* COMPANY */}
      <FormSelect
        label="select company"
        name="company"
        list={meta.companies}
        size="select-sm"
        defaultValue={company}
      />
      {/* ORDERS */}
      <FormSelect
        label="sort by"
        name="orders"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
        defaultValue={order}
      />
      {/* PRICE */}
      <FormRange
        name="price"
        label="select price"
        size="range-sm"
        price={price}
      />
      {/* SHIPPING */}
      <FormCheckBox label="free shipping" name="shipping" size="checkbox-sm" defaultValue={shipping}/>
      {/* BUTTONS */}
      <button type="submit" className="btn btn-primary btn-sm">
        Search
      </button>
      <Link to={`/products`} className="btn btn-accent btn-sm">
        Reset
      </Link>
    </Form>
  );
}
export default Filters;
