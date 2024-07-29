import React, { useEffect, useState } from "react";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialState = state.reduce(
    (acc, item) => ({ ...acc, [item.id]: true }),
    {}
  );
  const [isCheck, setIsCheck] = useState(initialState);

  const handleCheckBox = (id) => {
    setIsCheck((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">Your Cart is Empty</h4>
            <Link to="/" className="btn  btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const addItem = (product) => {
    dispatch(addCart(product));
  };
  const removeItem = (product) => {
    dispatch(delCart(product));
  };

  // const handleCheckout = (totalItems) => {
  //   if (totalItems > 10) {
  //     setShowAlert(true);
  //   } else {
  //     setShowAlert(false);
  //     navigate("/checkout");
  //   }
  // };

  const handleCheckout = () => {
    const itemsToCheckout = state.filter((item) => isCheck[item.id]);
    const totalItems = itemsToCheckout.reduce((acc, item) => acc + item.qty, 0);
    console.log(itemsToCheckout);
    if (totalItems > 10) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
      navigate("/checkout", { state: { items: itemsToCheckout } });
    }
  };

  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;


    state.map((item) => {
      if (isCheck[item.id]) {
        subtotal += item.price * item.qty;
        totalItems += item.qty;
      }
    });

    useEffect(() => {
      if (totalItems <= 10) {
        setShowAlert(false);
      }

    }, [totalItems]);
    return (
      <>
        <section className="h-100 gradient-custom">
          <div className="container py-5">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Cart
                </li>
              </ol>
            </nav>
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Item List</h5>
                  </div>
                  <div className="card-body ">
                    {state.map((item) => {
                      return (
                        <div key={item.id}>
                          <div
                            className={`row d-flex align-items-center ${
                              !isCheck[item.id] || false ? "bg-light" : ""
                            }`}
                          >
                            <div
                              className="d-flex align-items-center col-lg-3 col-md-12"
                              onClick={() => handleCheckBox(item.id)}
                            >
                              <div class="form-check">
                                <input
                                  role="button"
                                  class="form-check-input border border-dark bg-black px-2 py-2 ml-1"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChecked"
                                  checked={isCheck[item.id] || false}
                                  onChange={(e) => e.stopPropagation()}
                                />
                              </div>

                              <div
                                className="bg-image rounded px-5"
                                data-mdb-ripple-color="light"
                              >
                                <img
                                  className="object-fit-contain "
                                  src={item.image}
                                  alt={item.title}
                                  width={100}
                                  height={75}
                                />
                              </div>
                            </div>

                            <div
                              className="col-lg-4 col-md-6 "
                              role="button"
                              onClick={() => handleCheckBox(item.id)}
                            >
                              <p>
                                <strong>{item.title}</strong>
                              </p>
                            </div>

                            <div className="col-lg-3 col-md-6 ">
                              <div
                                className="d-flex mb-4 my-3 mx-4"
                                style={{ maxWidth: "300px" }}
                              >
                                <button
                                  className="btn px-2.5 ripples rounded-circle border border-dark"
                                  onClick={() => {
                                    removeItem(item);
                                  }}
                                >
                                  <i className="fas fa-minus material-icons "></i>
                                </button>

                                <p className="mx-4 my-2">
                                  <b>{item.qty}</b>
                                </p>

                                <button
                                  className="btn px-2.5 ripples rounded-circle border border-dark border-dashed"
                                  onClick={() => {
                                    addItem(item);
                                  }}
                                >
                                  <i className="fas fa-plus material-icons"></i>
                                </button>
                              </div>
                            </div>

                            <div
                              className="col-lg-2 col-md-6 "
                              role="button"
                              onClick={() => handleCheckBox(item.id)}
                            >
                              <p className="text-start text-md-center rounded my-2 qrt-price">
                                <strong>
                                  <span className="text-muted">
                                    {item.qty}{" "}
                                  </span>{" "}
                                  x ${item.price}
                                </strong>
                              </p>
                            </div>
                          </div>

                          <hr className="my-4" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3 bg-light">
                    <h5 className="mb-0">Order Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        <span
                          style={{
                            color: showAlert ? "red" : "",
                            fontWeight: showAlert ? "bold" : "normal",
                          }}
                        >
                          Products ({totalItems})
                        </span>

                        <span
                          style={{
                            color: showAlert ? "red" : "",
                            fontWeight: showAlert ? "bold" : "normal",
                          }}
                        >
                          ${Math.round(subtotal)}
                        </span>
                      </li>
                      <div className="px-0 py-2">
                        {/* <li className=" d-flex justify-content-between align-items-center "> */}
                        <li className={totalItems>=10 ? " d-flex justify-content-between align-items-center text-decoration-line-through":" d-flex justify-content-between align-items-center "}>
                          Delivery Charge
                          <span>${shipping}</span>
                        </li>
                        <span className="text-success font-italic ">
                          *Free delivery on Purchase of 10 Products
                        </span>
                        <hr />
                      </div>
                      <li className=" d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total amount</strong>
                        </div>
                        <span>
                          {/* <strong>${Math.round(subtotal + shipping)}</strong> */}
                          <strong>${totalItems === 10 ? Math.round(subtotal) : Math.round(subtotal + shipping)}</strong>

                        </span>
                      </li>
                    </ul>

                    {showAlert && (
                      <div className="alert alert-danger" role="alert">
                        You cannot proceed to checkout with more than 10 items.
                      </div>
                    )}

                    <button
                      onClick={() => handleCheckout(totalItems)}
                      className="btn btn-dark btn-lg btn-block"
                    >
                      Go to checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Cart</h1>
        <hr />
        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
