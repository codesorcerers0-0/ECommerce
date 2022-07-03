import React, { useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import ProductCard from "./ProductCard";
import ima1 from "../ima/ima4.jpg";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../redux/actions/productAction";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, products, error, productCounter } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const product = {
    name: "Black Crown",
    price: "💲3000",
    id: "tiwari",
    images: ima1,
  };
  return (
    <>
      <MetaData title={"eCommerce"} />
      <div className="banner">
        <p>Welcome to home Page</p>
        <h1>Find Amazing product here</h1>
        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>
      <h2 className="homeHeading"> Feature Products</h2>
      <div className="container" id="container">
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
      </div>
    </>
  );
};

export default Home;
