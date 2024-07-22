import { Form, Link } from "react-router-dom";
import FormInput from "../components/UI/FormInput";
import SubmitBtn from "../components/UI/SubmitBtn";

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
