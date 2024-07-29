// import React, { useEffect, useState } from "react";
// import { Footer, Navbar } from "../components";
// import { Link, NavLink, useLocation } from "react-router-dom";

// const Order = () => {
//   const location = useLocation();
//   const locationItems = location.state?.items || [];

//   const [orderItems, setOrderItems] = useState(() => {
//     const storedItems = localStorage.getItem("orderItems");  
//     return storedItems ? JSON.parse(storedItems) : locationItems;
//   });

//   useEffect(() => {
//     if (locationItems.length > 0) {
//       setOrderItems(locationItems);
//       localStorage.setItem("orderItems", JSON.stringify(locationItems));
//     }
//   }, [locationItems]);

//   const EmptyOrder = () => {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12 py-5 bg-light text-center">
//             <h4 className="p-3 display-5">Your Order is Empty</h4>
//             <Link to="/cart" className="btn  btn-outline-dark mx-4">
//               <i className="fa fa-arrow-left"></i> Continue Shopping to Cart
//             </Link>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const ShowOrder = () => {
//     const [orderStatus, setOrderStatus] = useState("Pending...");
//     const [remainingTime, setRemainingTime] = useState(5);

//     useEffect(() => {
//       const interval = setInterval(() => {
//         setRemainingTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
//       }, 1000);

//       const pendingTimer = setTimeout(() => {
//         setOrderStatus("On the Way...");
//         setRemainingTime(5);
//       }, 5000);

//       const onTheWayTimer = setTimeout(() => {
//         setOrderStatus(<i className="fa-solid fa-thumbs-up"> Delivered</i>);
//         clearInterval(interval);
//         localStorage.setItem("deliveredItems", JSON.stringify(orderItems));
//       }, 10000);

//       return () => {
//         clearTimeout(pendingTimer);
//         clearTimeout(onTheWayTimer);
//       };
//     }, []);

//     const formatTime = (time) => {
//       const hours = String(Math.floor(time / 3600)).padStart(2, "0");
//       const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
//       const seconds = String(time % 60).padStart(2, "0");
//       return `${hours}:${minutes}:${seconds}`;
//     };

//     return (
//       <>
//         <section className="h-100 gradient-custom">
//           <div className="container py-5">
//             <nav aria-label="breadcrumb">
//               <ol class="breadcrumb">
//                 <li class="breadcrumb-item">
//                   <NavLink to="/">Home</NavLink>
//                 </li>
//                 <li class="breadcrumb-item">
//                   <NavLink to="/cart">Cart</NavLink>
//                 </li>
//                 <li class="breadcrumb-item active" aria-current="page">
//                   Order
//                 </li>
//               </ol>
//             </nav>
//             <div className="row d-flex justify-content-center my-4">
//               <div className="col-md-12">
//                 <div className="card mb-12">
//                   <div className="card-header py-3">
//                     <h5 className="mb-0">Previous List</h5>
//                   </div>
//                   <div className="card-body ">
//                     {orderItems.map((item, index) => {
//                       return (
//                         <div key={item.id}>
//                           <div className="row d-flex align-items-center">
//                             <div className="d-flex align-items-center col-lg-2 col-md-12">
//                               <div
//                                 className="bg-image rounded px-5"
//                                 data-mdb-ripple-color="light"
//                               >
//                                 <img
//                                   className="object-fit-contain "
//                                   src={item.image}
//                                   alt={item.title}
//                                   width={100}
//                                   height={75}
//                                 />
//                               </div>
//                             </div>

//                             <div className="col-lg-4 col-md-6">
//                               <p className="pt-3">
//                                 <strong>{item.title}</strong>
//                               </p>
//                             </div>

//                             <div className="col-lg-2 col-md-6 ">
//                               <p className="text-start text-md-center rounded my-2 qrt-price">
//                                 <strong>
//                                   <span className="text-muted">
//                                     {item.qty}{" "}
//                                   </span>{" "}
//                                   x ${item.price}
//                                 </strong>
//                               </p>
//                             </div>

//                             <div className="col-lg-2 col-md-6 ">
//                               <p className="text-start text-md-center rounded my-2 qrt-price">
//                                 <strong>
//                                   <span className="text-muted"></span>$
//                                   {item.qty * item.price}
//                                 </strong>
//                               </p>
//                             </div>

//                             <div className="col-lg-2 col-md-6 ">
//                               <p className="text-center pt-3">
//                                 <strong>
//                                   {orderStatus} <br />
//                                   {orderStatus === "On the Way..." && (
//                                     <span>{` (${formatTime(
//                                       remainingTime
//                                     )})`}</span>
//                                   )}
//                                 </strong>
//                               </p>
//                             </div>
//                           </div>

//                           <hr className="my-4" />
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </>
//     );
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container my-3 py-3">
//         <h1 className="text-center">Order</h1>
//         <hr />
//         {orderItems.length > 0 ? <ShowOrder /> : <EmptyOrder />}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Order;

// import React, { useEffect, useState } from "react";
// import { Footer, Navbar } from "../components";
// import { Link, NavLink, useLocation } from "react-router-dom";

// const Order = () => {
//   const location = useLocation();
//   const locationItems = location.state?.items || [];

//   const [orderItems, setOrderItems] = useState(() => {
//     const storedItems = localStorage.getItem("orderItems");
//     return storedItems ? JSON.parse(storedItems) : locationItems;
//   });

//   useEffect(() => {
//     if (locationItems.length > 0) {
//       setOrderItems(locationItems);
//       localStorage.setItem("orderItems", JSON.stringify(locationItems));
//     }
//   }, [locationItems]);

//   const EmptyOrder = () => {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12 py-5 bg-light text-center">
//             <h4 className="p-3 display-5">Your Order is Empty</h4>
//             <Link to="/cart" className="btn btn-outline-dark mx-4">
//               <i className="fa fa-arrow-left"></i> Continue Shopping to Cart
//             </Link>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const ShowOrder = () => {
//     return (
//       <>
//         <section className="h-100 gradient-custom">
//           <div className="container py-5">
//             <nav aria-label="breadcrumb">
//               <ol className="breadcrumb">
//                 <li className="breadcrumb-item">
//                   <NavLink to="/">Home</NavLink>
//                 </li>
//                 <li className="breadcrumb-item">
//                   <NavLink to="/cart">Cart</NavLink>
//                 </li>
//                 <li className="breadcrumb-item active" aria-current="page">
//                   Order
//                 </li>
//               </ol>
//             </nav>
//             <div className="row d-flex justify-content-center my-4">
//               <div className="col-md-12">
//                 <div className="card mb-12">
//                   <div className="card-header py-3">
//                     <h5 className="mb-0">Previous List</h5>
//                   </div>
//                   <div className="card-body">
//                     {orderItems.map((item) => (
//                       <React.Fragment key={item.id}>
//                         <OrderItem item={item} />
//                         <hr />
//                       </React.Fragment>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </>
//     );
//   };

//   const OrderItem = ({ item }) => {
//     const initialOrderStatus = localStorage.getItem(`orderStatus-${item.id}`) || "Pending...";
//     const initialStartTime = parseInt(localStorage.getItem(`startTime-${item.id}`)) || Date.now();
//     const pendingDuration = 10;
//     const onTheWayDuration = 10;

//     const calculateRemainingTime = (startTime, duration) => {
//       const elapsed = Math.floor((Date.now() - startTime) / 1000);
//       return Math.max(duration - elapsed, 0);
//     };

//     const [orderStatus, setOrderStatus] = useState(initialOrderStatus);
//     const [remainingTime, setRemainingTime] = useState(() =>
//       orderStatus === "Pending..."
//         ? calculateRemainingTime(initialStartTime, pendingDuration)
//         : calculateRemainingTime(initialStartTime, onTheWayDuration)
//     );

//     useEffect(() => {
//       if (!item.delivered && orderStatus !== "Delivered") {
//         const interval = setInterval(() => {
//           setRemainingTime((prevTime) => prevTime > 0 ? prevTime - 1 : 0);
//         }, 1000);

//         if (orderStatus === "Pending...") {
//           const pendingTimer = setTimeout(() => {
//             setOrderStatus("On the Way...");
//             setRemainingTime(onTheWayDuration);
//             localStorage.setItem(`orderStatus-${item.id}`, "On the Way...");
//             localStorage.setItem(`startTime-${item.id}`, Date.now());
//           }, remainingTime * 1000);

//           return () => {
//             clearTimeout(pendingTimer);
//             clearInterval(interval);
//           };
//         }

//         if (orderStatus === "On the Way...") {
//           const onTheWayTimer = setTimeout(() => {
//             setOrderStatus("Delivered");
//             markItemAsDelivered();
//             clearInterval(interval);
//           }, remainingTime * 1000);

//           return () => {
//             clearTimeout(onTheWayTimer);
//             clearInterval(interval);
//           };
//         }
//       }
//     }, [item, orderStatus, remainingTime]);

//     useEffect(() => {
//       localStorage.setItem(`remainingTime-${item.id}`, remainingTime);
//     }, [remainingTime, item.id]);

//     useEffect(() => {
//       if (orderStatus === "Pending...") {
//         localStorage.setItem(`startTime-${item.id}`, Date.now());
//       }
//     }, [orderStatus, item.id]);

//     const markItemAsDelivered = () => {
//       const updatedItems = orderItems.map((orderItem) =>
//         orderItem.id === item.id ? { ...orderItem, delivered: true } : orderItem
//       );
//       setOrderItems(updatedItems);
//       localStorage.setItem("orderItems", JSON.stringify(updatedItems));
//       localStorage.removeItem(`orderStatus-${item.id}`);
//       localStorage.removeItem(`startTime-${item.id}`);
//     };

//     const formatTime = (time) => {
//       const hours = String(Math.floor(time / 3600)).padStart(2, "0");
//       const minutes = String(Math.floor(time / 60)).padStart(2, "0");
//       const seconds = String(time % 60).padStart(2, "0");
//       return `${hours}:${minutes}:${seconds}`;
//     };

//     return (
//       <div className="row d-flex align-items-center">
//         <div className="d-flex align-items-center col-lg-2 col-md-12">
//           <div className="bg-image rounded px-5" data-mdb-ripple-color="light">
//             <img
//               className="object-fit-contain"
//               src={item.image}
//               alt={item.title}
//               width={100}
//               height={75}
//             />
//           </div>
//         </div>

//         <div className="col-lg-4 col-md-6">
//           <p className="pt-3">
//             <strong>{item.title}</strong>
//           </p>
//         </div>

//         <div className="col-lg-2 col-md-6">
//           <p className="text-start text-md-center rounded my-2 qrt-price">
//             <strong>
//               <span className="text-muted">{item.qty} </span> x ${item.price}
//             </strong>
//           </p>
//         </div>

//         <div className="col-lg-2 col-md-6">
//           <p className="text-start text-md-center rounded my-2 qrt-price">
//             <strong>${item.qty * item.price}</strong>
//           </p>
//         </div>

//         <div className="col-lg-2 col-md-6">
//           <p className="text-center pt-3">
//             <strong>
//               {item.delivered ? (
//                 <i className="fa-solid fa-thumbs-up"> Delivered</i>
//               ) : (
//                 <>
//                   {orderStatus} <br />
//                   {(orderStatus === "Pending..." || orderStatus === "On the Way...") && (
//                     <span>({formatTime(remainingTime)})</span>
//                   )}
//                 </>
//               )}
//             </strong>
//           </p>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container my-3 py-3">
//         <h1 className="text-center">Order</h1>
//         <hr />
//         {orderItems.length > 0 ? <ShowOrder /> : <EmptyOrder />}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Order;

import React, { useEffect, useState } from "react";
import { Footer, Navbar } from "../components";
import { Link, NavLink, useLocation } from "react-router-dom";

const Order = () => {
  const location = useLocation();
  const locationItems = location.state?.items || [];

  const [orderItems, setOrderItems] = useState(() => {
    const storedItems = localStorage.getItem("orderItems");
    return storedItems ? JSON.parse(storedItems) : locationItems;
  });

  // Initialize order status and start time from local storage
  const initialOrderStatus =
    localStorage.getItem("orderStatus") || "Pending...";
  const initialStartTime =
    parseInt(localStorage.getItem("startTime")) || Date.now();
  const pendingDuration = 10; // Duration for "Pending..." status
  const onTheWayDuration = 10; // Duration for "On the Way..." status

  // Calculate remaining time based on start time and duration
  const calculateRemainingTime = (startTime, duration) => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    return Math.max(duration - elapsed, 0);
  };

  const [orderStatus, setOrderStatus] = useState(initialOrderStatus);
  const [remainingTime, setRemainingTime] = useState(() =>
    initialOrderStatus === "Pending..."
      ? calculateRemainingTime(initialStartTime, pendingDuration)
      : calculateRemainingTime(initialStartTime, onTheWayDuration)
  );

  useEffect(() => {
    if (locationItems.length > 0) {
      setOrderItems(locationItems);
      localStorage.setItem("orderItems", JSON.stringify(locationItems));
      localStorage.setItem("orderStatus", "Pending...");
      localStorage.setItem("startTime", Date.now());
    }
  }, [locationItems]);

  useEffect(() => {
    // Skip the interval setup if the order is already delivered
    if (orderStatus === "Delivered") {
      return;
    }

    const interval = setInterval(() => {
      setRemainingTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    if (orderStatus === "Pending...") {
      const pendingTimer = setTimeout(() => {
        setOrderStatus("On the Way...");
        setRemainingTime(onTheWayDuration);
        localStorage.setItem("orderStatus", "On the Way...");
        localStorage.setItem("startTime", Date.now());
      }, remainingTime * 1000);

      return () => {
        clearTimeout(pendingTimer);
        clearInterval(interval);
      };
    }

    if (orderStatus === "On the Way...") {
      const onTheWayTimer = setTimeout(() => {
        setOrderStatus("Delivered");
        markOrderAsDelivered();
        clearInterval(interval);
      }, remainingTime * 1000);

      return () => {
        clearTimeout(onTheWayTimer);
        clearInterval(interval);
      };
    }

    return () => clearInterval(interval);
  }, [orderStatus, remainingTime]);

  // Mark the entire order as delivered
  const markOrderAsDelivered = () => {
    const updatedItems = orderItems.map((item) => ({
      ...item,
      delivered: true,
    }));
    setOrderItems(updatedItems);
    localStorage.setItem("orderItems", JSON.stringify(updatedItems));
    localStorage.setItem("orderStatus", "Delivered");
    localStorage.removeItem("startTime");
  };

  // Format time in HH:MM:SS
  const formatTime = (time) => {
    const hours = String(Math.floor(time / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  const EmptyOrder = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">Your Order is Empty</h4>
            <Link to="/cart" className="btn btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Continue Shopping to Cart
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const ShowOrder = () => {
    return (
      <>
        <section className="h-100 gradient-custom">
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
                  Order
                </li>
              </ol>
            </nav>
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-12">
                <div className="card mb-12">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Previous List</h5>
                  </div>
                  <div className="card-body">
                    {orderItems.map((item) => (
                      <React.Fragment key={item.id}>
                        <OrderItem
                          item={item}
                          orderStatus={orderStatus}
                          remainingTime={remainingTime}
                        />
                        <hr />
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  // OrderItem component to display individual items with the shared order status
  const OrderItem = ({ item, orderStatus, remainingTime }) => {
    return (
      <div className="row d-flex align-items-center">
        <div className="d-flex align-items-center col-lg-2 col-md-12">
          <div className="bg-image rounded px-5" data-mdb-ripple-color="light">
            <img
              className="object-fit-contain"
              src={item.image}
              alt={item.title}
              width={100}
              height={75}
            />
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <p className="pt-3">
            <strong>{item.title}</strong>
          </p>
        </div>

        <div className="col-lg-2 col-md-6">
          <p className="text-start text-md-center rounded my-2 qrt-price">
            <strong>
              <span className="text-muted">{item.qty} </span> x ${item.price}
            </strong>
          </p>
        </div>

        <div className="col-lg-2 col-md-6">
          <p className="text-start text-md-center rounded my-2 qrt-price">
            <strong>${item.qty * item.price}</strong>
          </p>
        </div>

        <div className="col-lg-2 col-md-6">
          <p className="text-center pt-3">
            <strong>
              {orderStatus === "Delivered" ? (
                <i className="fa-solid fa-thumbs-up"> Delivered</i>
              ) : (
                <>
                  {orderStatus} <br />
                  {(orderStatus === "Pending..." ||
                    orderStatus === "On the Way...") && (
                    <span>({formatTime(remainingTime)})</span>
                  )}
                </>
              )}
            </strong>
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Order</h1>
        <hr />
        {orderItems.length > 0 ? <ShowOrder /> : <EmptyOrder />}
      </div>
      <Footer />
    </>
  );
};

export default Order;
