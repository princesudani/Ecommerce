import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [addToCart, setAddToCart] = useState([]);
  let componentMounted = true;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const handleClick = (filter) => {
    setActiveFilter(filter);
    if (filter === "all") {
      setFilter(data);
    } else {
      filterProduct(filter);
    }
  };

  const addProduct = (product) => {
    const productTitle = product.title.substring(0, 12);
    toast.success(`${productTitle}... is Added !!`, {
      position: "top-center",
    });
    dispatch(addCart(product));
    setAddToCart((prev) => {
      const updatedCart = [...prev, product.id];
      localStorage.setItem("disabledCartItems", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  useEffect(() => {
    const storedCartItems =
      JSON.parse(localStorage.getItem("disabledCartItems")) || [];
    setAddToCart(storedCartItems);

    if (cartItems) {
      const addedIds = cartItems.map((item) => item.id);
      setAddToCart(addedIds);
    }
  }, [cartItems]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        const data = await response.json();
        setData(data);
        setFilter(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    if (componentMounted) {
      fetchProducts();
    }

    return () => {
      componentMounted = false;
    };
  }, []);

  const Loading = () => (
    <>
      <div className="col-12 py-5 text-center">
        <Skeleton height={40} width={560} />
      </div>
      {[...Array(6)].map((_, index) => (
        <div key={index} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      ))}
    </>
  );

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => (
    <>
      <div className="buttons text-center py-5">
        {[
          "all",
          "men's clothing",
          "women's clothing",
          "jewellers",
          "electronics",
        ].map((category) => (
          <button
            key={category}
            className={`btn btn-outline-dark btn-sm m-2 ${
              activeFilter === category ? "active" : ""
            }`}
            onClick={() => handleClick(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="row">
        {filter.map((product) => (
          <div
            key={product.id}
            className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4"
          >
            <div className="card text-center h-100">
              <div className="d-flex justify-content-end m-2">
                <div className="ripples">
                  <button
                    onClick={() => addProduct(product)}
                    disabled={addToCart.includes(product.id)}
                  >
                    <FaCartPlus className="material-icons" />
                  </button>
                </div>
              </div>

              <img
                className="card-img-top p-5 object-fit-contain"
                src={product.image}
                alt="Product"
                height={300}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {product.title.substring(0, 12)}...
                </h5>
                <p className="card-text">
                  {product.description.substring(0, 90)}...
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item lead">
                  <span className="mr-5">$ {product.price}</span>
                  <Link
                    to={`/product/${product.id}`}
                    className="btn btn-sm btn-dark m-1"
                  >
                    Buy Now
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12">
          <h2 className="display-5 text-center">Latest Products</h2>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Products;
