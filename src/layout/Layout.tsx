import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export const Layout = () => {
  return (
    <>
      <Header />
      <main >
        <Outlet />
      </main>
      <Footer />
    </>
  );
};