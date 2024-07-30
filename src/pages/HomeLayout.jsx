import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Loading from "../components/UI/Loading";

function HomeLayout() {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Header />
      <NavBar />

      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="align-element py-20">
          <Outlet />
        </section>
      )}
    </>
  );
}
export default HomeLayout;
