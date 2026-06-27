import { Route, Routes } from "react-router";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
