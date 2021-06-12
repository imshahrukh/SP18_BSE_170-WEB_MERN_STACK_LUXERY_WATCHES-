import "./App.css";
import {
  Home,
  Product,
  AboutMe,
  Contact,
  Gallery,
  SingleProduct,
  Search,
} from "./pages/pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        {/* <Route path="/product" element={<Product />}></Route> */}
        <Route path="/search" element={<Search />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/aboutme" element={<AboutMe />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/singleproduct" element={<SingleProduct />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
