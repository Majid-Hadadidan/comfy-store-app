import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

function HomeLayout() {
  return (
    <>
      <Header />
      <NavBar />
      <section className="align-element py-20">
        <Outlet />
      </section>
    </>
  );
}
export default HomeLayout;
