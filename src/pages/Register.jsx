import { Form, Link, redirect } from "react-router-dom";
import FormInput from "../components/UI/FormInput";
import SubmitBtn from "../components/UI/SubmitBtn";
import { customFetch } from "../utils";
import { toast } from "react-toastify";

//action
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await customFetch.post("/auth/local/register", data);
    toast.success("acount create successfully");
    return redirect("/login");
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      "please double check your credentials";
    toast.error(errorMessage);
    return null;
  }
};

function Register() {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card bg-base-100 shadow-xl p-8 w-96 flex flex-col gap-y-4"
      >
        <h4 className="text-3xl font-bold text-center">Register</h4>
        <FormInput type="text" label="username" name="username" />
        <FormInput type="email" label="email" name="email" />
        <FormInput type="password" label="password" name="password" />
        <div className="mt-4">
          <SubmitBtn text="register" />
        </div>
        <p className="text-center">
          Already a member?
          <Link
            to="/login"
            className=" ml-2 link link-hover link-primary capitalize font-semibold"
          >
            Login
          </Link>
        </p>
      </Form>
    </section>
  );
}
export default Register;
