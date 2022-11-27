import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export const Layout = () => {

  return (
    <div className={"main-layout"}>
      <Header />
      <main >
        <Outlet />
      </main>
      <Footer />
    </div >
  );
};

