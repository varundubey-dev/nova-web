import { Outlet } from "react-router";
import Navbar from "@components/layout/Navbar";
import Footer from "@components/layout/Footer";

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