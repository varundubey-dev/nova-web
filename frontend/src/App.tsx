import { Routes, Route } from "react-router";
import Layout from "@components/layout/Layout";
import Home from "@pages/Home";
import Playground from "@pages/Playground";
import Examples from "@pages/Examples";
import NotFound from "@pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/examples" element={<Examples />} />       
        <Route path="*" element={<NotFound />}/>
      </Route>

      <Route element={<Layout noFooter />}>
        <Route path="/playground" element={<Playground />} />
      </Route>
    </Routes>
  );
}
