import { Routes, Route } from "react-router";
import Layout from "@components/layout/Layout";
import Home from "@pages/Home";
import Playground from "@pages/Playground";
import Examples from "@pages/Examples";
import NotFound from "@pages/NotFound";
import DownloadPage from "@pages/DownloadPage";
import Overview from "@pages/language/Overview";
import Features from "@pages/language/Features";
import Syntax from "@pages/language/Syntax";
import BuiltIns from "@pages/language/BuiltIns";
import StandardLibrary from "@pages/language/StandardLibrary";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/examples" element={<Examples />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/language/overview" element={<Overview />} />
        <Route path="/language/features" element={<Features />} />
        <Route path="/language/syntax" element={<Syntax />} />
        <Route path="/language/builtins" element={<BuiltIns />} />
        <Route path="/language/stdlib" element={<StandardLibrary />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route element={<Layout noFooter />}>
        <Route path="/playground" element={<Playground />} />
      </Route>
    </Routes>
  );
}
