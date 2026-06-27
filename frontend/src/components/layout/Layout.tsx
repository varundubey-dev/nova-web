import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

type LayoutProps = {
  noFooter?: boolean;
};

export default function Layout({ noFooter = false }: LayoutProps) {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      {!noFooter && <Footer />}
    </>
  );
}