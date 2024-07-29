// import React, { useEffect, useState } from "react";
// import { Footer, Navbar } from "../components";
// import { useSelector } from "react-redux";
// import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

// const Checkout = () => {
//   const state = useSelector((state) => state.handleCart);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { items } = location.state || { items: [] };
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     address: "",
//     country: "",
//     states: "",
//     zip: "",
//     cardHolderName: "",
//     cardNumber: "",
//     cardExpirationDate: "",
//     cvv: "",
//   });

//   useEffect(() => {
//     const storedData = localStorage.getItem("formData");
//     if (storedData) {
//       setFormData(JSON.parse(storedData));
//     }
//   }, []);

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     console.log(`Updating ${id} with value ${value}`);
//     setFormData((prevData) => ({
//       ...prevData,
//       [id]: value,
//     }));
//   };

//   const EmptyCart = () => {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12 py-5 bg-light text-center">
//             <h4 className="p-3 display-5">No item in Cart</h4>
//             <Link to="/" className="btn btn-outline-dark mx-4">
//               <i className="fa fa-arrow-left"></i> Continue Shopping
//             </Link>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const handleOnchange = (event) => {
//     const input = event.target.value.replace(/\D/g, "");
//     if (input) {
//       let formattedInput = input.match(/.{1,4}/g).join(" - ");
//       event.target.value = formattedInput;
//     }
//   };

//   const handleChangeCombine = (event) => {
//     handleOnchange(event);
//     handleChange(event);
//   };

//   const handleChangeCombineExpire = (event) => {
//     handleOnchangeExpire(event);
//     handleChange(event);
//   };

//   const handleOnchangeExpire = (event) => {
//     const input = event.target.value.replace(/\D/g, "");
//     if (input) {
//       let formattedInput = input.match(/.{1,2}/g).join(" / ");
//       event.target.value = formattedInput;
//     }
//   };

//   const handlePaymentSubmit = (e) => {
//     e.preventDefault();
//     localStorage.setItem("formData", JSON.stringify(formData));
//     navigate("/order", { state: { items } });
//     console.log("Payment submitted successfully:", formData);
//   };

//   const totalItems = items.reduce((acc, item) => acc + item.qty, 0);
//   const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);
//   const shipping = 30.0;

//   const ShowCheckout = () => {
//     return (
//       <>
//         <div className="container py-5">
//           <nav aria-label="breadcrumb">
//             <ol class="breadcrumb">
//               <li class="breadcrumb-item">
//                 <NavLink to="/">Home</NavLink>
//               </li>
//               <li class="breadcrumb-item">
//                 <NavLink to="/cart">Cart</NavLink>
//               </li>
//               <li class="breadcrumb-item active" aria-current="page">
//                 Checkout
//               </li>
//             </ol>
//           </nav>
//           <div className="row my-4">
//             <div className="col-md-5 col-lg-4 order-md-last">
//               <div className="card mb-4">
//                 <div className="card-header py-3 bg-light">
//                   <h5 className="mb-0">Order Summary</h5>
//                 </div>
//                 <div className="card-body">
//                   <ul className="list-group list-group-flush">
//                     <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
//                       Products ({totalItems})
//                       <span>${Math.round(subtotal)}</span>
//                     </li>
//                     <div className="px-0 py-2">
//                       <li
//                         className={
//                           totalItems >= 10
//                             ? " d-flex justify-content-between align-items-center text-decoration-line-through"
//                             : " d-flex justify-content-between align-items-center "
//                         }
//                       >
//                         Delivery Charge
//                         <span>${shipping}</span>
//                       </li>
//                       <span className="text-success font-italic ">
//                         *Free delivery on Purchase of 10 Products
//                       </span>
//                       <hr />
//                     </div>
//                     <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0">
//                       <div>
//                         <strong>Total amount</strong>
//                       </div>
//                       <span>
//                         <strong>
//                           $
//                           {totalItems === 10
//                             ? Math.round(subtotal)
//                             : Math.round(subtotal + shipping)}
//                         </strong>
//                       </span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-7 col-lg-8">
//               <div className="card mb-4">
//                 <div className="card-header py-3">
//                   <h4 className="mb-0">Billing address</h4>
//                 </div>
//                 <div className="card-body">
//                   <form
//                     className="needs-validation"
//                     onSubmit={handlePaymentSubmit}
//                     Validate
//                   >
//                     <div className="row g-3">
//                       <div className="col-sm-6 my-1">
//                         <label for="firstName" className="form-label">
//                           First name
//                         </label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           id="firstName"
//                           placeholder=""
//                           required
//                           value={formData.firstName}
//                           onChange={handleChange}
//                         />
//                         <div className="invalid-feedback">
//                           Valid first name is required.
//                         </div>
//                       </div>

//                       <div className="col-sm-6 my-1">
//                         <label for="lastName" className="form-label">
//                           Last name
//                         </label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           id="lastName"
//                           placeholder=""
//                           required
//                           value={formData.lastName}
//                           onChange={handleChange}
//                         />
//                         <div className="invalid-feedback">
//                           Valid last name is required.
//                         </div>
//                       </div>

//                       <div className="col-12 my-1">
//                         <label for="email" className="form-label">
//                           Email
//                         </label>
//                         <input
//                           type="email"
//                           className="form-control"
//                           id="email"
//                           placeholder="you@example.com"
//                           required
//                           value={formData.email}
//                           onChange={handleChange}
//                         />
//                         <div className="invalid-feedback">
//                           Please enter a valid email address for shipping
//                           updates.
//                         </div>
//                       </div>

//                       <div className="col-12 my-1">
//                         <label for="address" className="form-label">
//                           Address
//                         </label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           id="address"
//                           placeholder="1234 Main St"
//                           required
//                           value={formData.address}
//                           onChange={handleChange}
//                         />
//                         <div className="invalid-feedback">
//                           Please enter your shipping address.
//                         </div>
//                       </div>

//                       <div className="col-md-5 my-1">
//                         <label for="country" className="form-label">
//                           Country
//                         </label>
//                         <br />
//                         <select
//                           className="form-select"
//                           id="country"
//                           required
//                           value={formData.country}
//                           onChange={handleChange}
//                         >
//                           <option value="">Choose...</option>
//                           <option>India</option>
//                         </select>
//                         <div className="invalid-feedback">
//                           Please select a valid country.
//                         </div>
//                       </div>

//                       <div className="col-md-4 my-1">
//                         <label for="state" className="form-label">
//                           State
//                         </label>
//                         <br />
//                         <select
//                           className="form-select"
//                           id="state"
//                           required
//                           value={formData.states}
//                           onChange={handleChange}
//                         >
//                           <option value="">Choose...</option>
//                           <option>Gujarat</option>
//                           <option>Delhi</option>
//                           <option>Mumbai</option>
//                           <option>Chennai</option>
//                           <option>Bangalore</option>
//                           <option>Punjab</option>
//                         </select>
//                         <div className="invalid-feedback">
//                           Please provide a valid state.
//                         </div>
//                       </div>

//                       <div className="col-md-3 my-1">
//                         <label for="zip" className="form-label">
//                           Zip
//                         </label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           id="zip"
//                           maxLength={6}
//                           placeholder=""
//                           required
//                           value={formData.zip}
//                           onChange={handleChange}
//                         />
//                         <div className="invalid-feedback">
//                           Zip code required.
//                         </div>
//                       </div>
//                     </div>

//                     <hr className="my-4" />

//                     <h4 className="mb-3">Payment</h4>

//                     <div className="row gy-3">
//                       <div className="col-md-6">
//                         <label for="cc-name" className="form-label">
//                           Name on card
//                         </label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           id="cc-name"
//                           placeholder=""
//                           required
//                           value={formData.cardHolderName}
//                           onChange={handleChange}
//                         />
//                         <small className="text-muted">
//                           Full name as displayed on card
//                         </small>
//                         <div className="invalid-feedback">
//                           Name on card is required
//                         </div>
//                       </div>

//                       <div className="col-md-6">
//                         <label htmlFor="cc-number" className="form-label">
//                           Credit card number
//                         </label>
//                         <input
//                           onChange={handleChangeCombine}
//                           value={formData.cardNumber}
//                           // onChange={handleChange}
//                           type="text"
//                           className="form-control"
//                           id="cc-number"
//                           placeholder=""
//                           maxlength="25"
//                           required
//                         />

//                         <div className="invalid-feedback">
//                           Credit card number is required
//                         </div>
//                       </div>

//                       <div className="col-md-3">
//                         <label for="cc-expiration" className="form-label">
//                           Expiration
//                         </label>
//                         <input
//                           type="text"
//                           onChange={handleChangeCombineExpire}
//                           className="form-control cc-expires"
//                           id="cc-expiration"
//                           maxlength="7"
//                           placeholder=""
//                           required
//                           value={formData.cardExpirationDate}
//                           // onChange={handleChange}
//                         />
//                         <div className="invalid-feedback">
//                           Expiration date required
//                         </div>
//                       </div>

//                       <div className="col-md-3">
//                         <label for="cc-cvv" className="form-label">
//                           CVV
//                         </label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           id="cc-cvv"
//                           placeholder=""
//                           maxlength="3"
//                           required
//                           value={formData.cvv}
//                           onChange={handleChange}
//                         />
//                         <div className="invalid-feedback">
//                           Security code required
//                         </div>
//                       </div>
//                     </div>

//                     <hr className="my-4" />

//                     <button
//                       className="w-100 btn btn-primary"
//                       // onClick={handlePaymentSubmit}
//                       type="submit"
//                     >
//                       Continue to Proceed
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   };
//   return (
//     <>
//       <Navbar />
//       <div className="container my-3 py-3">
//         <h1 className="text-center">Checkout</h1>
//         <hr />
//         {state.length ? <ShowCheckout /> : <EmptyCart />}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Checkout;












import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import { useSelector } from "react-redux";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);
  const navigate = useNavigate();
  const location = useLocation();
  const { items } = location.state || { items: [] };
  const [Valid, setValid] = useState({
    emailValid: true,
    mobileValid: true,
    zipValid: true,
  });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    country: "",
    state: "",
    zip: "",
    cardHolderName: "",
    cardNumber: "",
    cardExpirationDate: "",
    cvv: "",
  });

  const handleKeyPress = (event) => {
    const charCode = event.charCode;
    if (
      !(
        (charCode >= 65 && charCode <= 90) ||
        (charCode >= 97 && charCode <= 122) ||
        charCode === 32
      )
    ) {
      event.preventDefault();
    }
  };

  const handleKeyPressNumber = (event) => {
    const charCode = event.which || event.keyCode;

    // Allow digits 1 to 9 (key codes 49 to 57)
    if (!(charCode >= 49 && charCode <= 57)) {
      event.preventDefault();
    }
  };

  const blockInvalidChar = (e) => {
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    const trimInput = value.trim();
    const trimStartInput = value.trimStart();
    console.log(`Updating ${id} with value ${value}`);

    if (id === "email") {
      // Validate email format
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setValid({ ...Valid, emailValid: isValid });
    } else if (id === "mobile") {
      // Validate mobile number format
      const isValid = /^\d{10}$/.test(value);
      setValid({ ...Valid, mobileValid: isValid });
    } else if (id === "zip") {
      // Validate mobile number format
      const isValid = /^\d{6}$/.test(value);
      setValid({ ...Valid, zipValid: isValid });
    } else if (id === "zip") {
      // Validate mobile number format
      const isValid = /^\d{6}$/.test(value);
      setValid({ ...Valid, zipValid: isValid });
    }

    setFormData((prevData) => ({
      ...prevData,
      [id]:
        id === "cardNumber"
          ? formatCardNumber(value)
          : id === "cardExpirationDate"
          ? formatExpirationDate(value)
          : id === "firstName"
          ? trimInput
          : id === "lastName"
          ? trimInput
          : id === "cardHolderName"
          ? trimStartInput : value
    }));
  };

  const formatCardNumber = (value) => {
    const input = value.replace(/\D/g, "");
    if (input) {
      return input.match(/.{1,4}/g).join(" - ");
    }
    return value;
  };

  const formatExpirationDate = (value) => {
    // Implement your logic to format the expiration date
    return value
      .replace(/\D/g, "")
      .replace(/(..)/g, "$1 / ")
      .trim()
      .slice(0, 7);

    // const input2 = value.replace(/\D/g, "");
    // if (input2) {
    //   return input2.match(/.{0,2}/g).join(" / ");
    // }
    // return value;
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    localStorage.setItem("formData", JSON.stringify(formData));
    navigate("/order", { state: { items } });
    console.log("Payment submitted successfully:", formData);
  };

  const validateForm = () => {
    console.log("Validating form");

    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "mobile",
      "address",
      "country",
      "state",
      "zip",
      "cardHolderName",
      "cardNumber",
      "cardExpirationDate",
      "cvv",
    ];

    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0 || !Valid) {
      toast.error("All fields must be filled!");
      return false;
    }

    return true;
  };

  const handlePaste = (event) => {
    event.preventDefault(); // Prevent pasting text
  };

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">No item in Cart</h4>
            <Link to="/" className="btn btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const totalItems = items.reduce((acc, item) => acc + item.qty, 0);
  const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);
  const shipping = 30.0;

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Checkout</h1>
        <hr />
        {state.length ? (
          <div className="container py-5">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="breadcrumb-item">
                  <NavLink to="/cart">Cart</NavLink>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Checkout
                </li>
              </ol>
            </nav>
            <div className="row my-4">
              <div className="col-md-5 col-lg-4 order-md-last">
                <div className="card mb-4">
                  <div className="card-header py-3 bg-light">
                    <h5 className="mb-0">Order Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Products ({totalItems})
                        <span>${Math.round(subtotal)}</span>
                      </li>
                      <div className="px-0 py-2">
                        <li
                          className={
                            totalItems >= 10
                              ? " d-flex justify-content-between align-items-center text-decoration-line-through"
                              : " d-flex justify-content-between align-items-center "
                          }
                        >
                          Delivery Charge
                          <span>${shipping}</span>
                        </li>
                        <span className="text-success font-italic">
                          *Free delivery on Purchase of 10 Products
                        </span>
                        <hr />
                      </div>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0">
                        <div>
                          <strong>Total amount</strong>
                        </div>
                        <span>
                          <strong>
                            $
                            {totalItems === 10
                              ? Math.round(subtotal)
                              : Math.round(subtotal + shipping)}
                          </strong>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-lg-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h4 className="mb-0">Billing address</h4>
                  </div>
                  <div className="card-body">
                    <form
                      className="needs-validation"
                      onSubmit={handlePaymentSubmit}
                      noValidate
                    >
                      <div className="row g-3">
                        <div className="col-sm-6 my-1">
                          <label htmlFor="firstName" className="form-label">
                            First name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            placeholder=""
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                          />
                          <div className="invalid-feedback">
                            Valid first name is required.
                          </div>
                        </div>

                        <div className="col-sm-6 my-1">
                          <label htmlFor="lastName" className="form-label">
                            Last name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            placeholder=""
                            pattern="[A-Za-z ]+"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                          />
                          <div className="invalid-feedback">
                            Valid last name is required.
                          </div>
                        </div>

                        <div className="col-md-6 my-1">
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            className={`form-control ${
                              Valid.emailValid ? "" : "is-invalid"
                            }`}
                            id="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                          />
                          {!Valid.emailValid && (
                            <div className="invalid-feedback">
                              Please enter a valid email address for shipping
                              updates.
                            </div>
                          )}
                        </div>

                        <div className=" col-md-6 my-1">
                          <label htmlFor="mobile" className="form-label">
                            Mobile No.
                          </label>
                          <div
                            className={`input-group ${
                              Valid.mobileValid ? "" : "is-invalid"
                            }`}
                          >
                            <span
                              className="input-group-text bg-transparent"
                              id="basic-addon1"
                            >
                              + 91
                            </span>
                            <input
                              type="text"
                              className={`form-control ${
                                Valid.mobileValid ? "" : "is-invalid"
                              }`}
                              id="mobile"
                              placeholder=""
                              required
                              maxLength={10}
                              value={formData.mobile}
                              onKeyPress={handleKeyPressNumber}
                              onChange={handleChange}
                              onKeyDown={blockInvalidChar}
                            />
                            {!Valid.mobileValid && (
                              <div className="invalid-feedback">
                                Please enter a valid Mobile No. for shipping
                                updates.
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="col-12 my-1">
                          <label htmlFor="address" className="form-label">
                            Address
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="address"
                            placeholder="1234 Main St"
                            required
                            value={formData.address}
                            onChange={handleChange}
                          />
                          <div className="invalid-feedback">
                            Please enter your shipping address.
                          </div>
                        </div>

                        <div className="col-md-5 my-1">
                          <label htmlFor="country" className="form-label">
                            Country
                          </label>
                          <br />
                          <select
                            className="form-select"
                            id="country"
                            required
                            value={formData.country}
                            onChange={handleChange}
                          >
                            <option value="">Choose...</option>
                            <option>India</option>
                          </select>
                          <div className="invalid-feedback">
                            Please select a valid country.
                          </div>
                        </div>

                        <div className="col-md-4 my-1">
                          <label htmlFor="state" className="form-label">
                            State
                          </label>
                          <br />
                          <select
                            className="form-select"
                            id="state"
                            required
                            value={formData.state}
                            onChange={handleChange}
                          >
                            <option value="">Choose...</option>
                            <option>Gujarat</option>
                            <option>Delhi</option>
                            <option>Mumbai</option>
                            <option>Chennai</option>
                            <option>Bangalore</option>
                            <option>Punjab</option>
                          </select>
                          <div className="invalid-feedback">
                            Please provide a valid state.
                          </div>
                        </div>

                        <div className="col-md-3 my-1">
                          <label htmlFor="zip" className="form-label">
                            Zip
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              Valid.zipValid ? "" : "is-invalid"
                            }`}
                            id="zip"
                            maxLength={6}
                            placeholder=""
                            required
                            value={formData.zip}
                            onChange={handleChange}
                          />
                          {!Valid.zipValid && (
                            <div className="invalid-feedback">
                              Please enter a valid zip code.
                            </div>
                          )}
                        </div>

                        <hr className="my-4" />
                        <h4 className="mb-3">Payment</h4>

                        <div className="col-md-6 my-1">
                          <label
                            htmlFor="cardHolderName"
                            className="form-label"
                          >
                            Cardholder's Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            pattern="^[a-zA-Z]+$"
                            id="cardHolderName"
                            placeholder="cardholder's name"
                            required
                            value={formData.cardHolderName}
                            onChange={handleChange}
                            onKeyPress={handleKeyPress}
                          />
                          <div className="invalid-feedback">
                            Please enter cardholder's name.
                          </div>
                        </div>

                        <div className="col-md-6 my-1">
                          <label htmlFor="cardNumber" className="form-label">
                            Card Number
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="cardNumber"
                            placeholder="XXXX - XXXX - XXXX - XXXX"
                            onPaste={handlePaste}
                            required
                            maxLength={25}
                            value={formData.cardNumber}
                            onChange={handleChange}
                          />
                          <div className="invalid-feedback">
                            Please enter a valid card number.
                          </div>
                        </div>

                        <div className="col-md-4 my-1">
                          <label
                            htmlFor="cardExpirationDate"
                            className="form-label"
                          >
                            Expiration Date
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="cardExpirationDate"
                            placeholder="MM / YY"
                            required
                            value={formData.cardExpirationDate}
                            onChange={handleChange}
                          />
                          <div className="invalid-feedback">
                            Please enter a valid expiration date.
                          </div>
                        </div>

                        <div className="col-md-4 my-1">
                          <label htmlFor="cvv" className="form-label">
                            CVV
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="cvv"
                            placeholder="XXX"
                            required
                            maxLength={3}
                            value={formData.cvv}
                            onChange={handleChange}
                          />
                          <div className="invalid-feedback">
                            Please enter CVV.
                          </div>
                        </div>
                      </div>

                      <hr className="my-4" />

                      <button className="w-100 btn btn-primary" type="submit">
                        Continue to Checkout
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <EmptyCart />
        )}
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Checkout;
