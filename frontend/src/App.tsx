import { Routes, Route } from "react-router";
import Layout from "@components/layout/Layout";
import Home from "@/pages/home/Home";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="*" />
      </Route>

      <Route element={<Layout noFooter />}>
        <Route path="/playground" />
      </Route>
    </Routes>
  );
}
