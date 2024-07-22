import FormInput from "../components/UI/FormInput";
import SubmitBtn from "../components/UI/SubmitBtn";
import { Form, Link } from "react-router-dom";

function Login() {
  return (
    <section className="h-screen grid place-items-center ">
      <Form
        method="POST"
        className="w-96 card p-8 shadow-lg flex flex-col gap-y-4 bg-base-100"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          name="identifier"
          type="email"
          label="email"
          defaultValue="test@test.com"
        />
        <FormInput
          name="password"
          type="password"
          label="password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="Login" />
        </div>
        <button type="button" className="btn btn-secondary btn-block uppercase">
          guest user
        </button>
        <p className="text-center">
          Not a member yet? 
          <Link to="/register" className=" font-semibold ml-2 link link-hover link-primary capitalize">
            Register
          </Link>
        </p>
      </Form>
    </section>
  );
}
export default Login;
