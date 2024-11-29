import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/navbar";
import Products from "./component/products";
import Product from "./component/product";

function App() {
  return (
    <>
      <Navbar />
      <Products />
      <Product />
    </>
  );
}

export default App;
