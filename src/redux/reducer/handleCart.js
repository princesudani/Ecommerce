// import { toast } from "react-toastify";

// const storedCart = localStorage.getItem("Cart");
// let cart = [];

// try {
//   cart = storedCart ? JSON.parse(storedCart) : [];
// } catch (error) {
//   console.error("Error parsing JSON from localStorage:", error);
//   cart = [];
// }

// const handleCart = (state = cart, action) => {
//   const product = action.payload;
//   let storeData;
//   const totalQuantity = state.reduce((total, item) => total + item.qty, 0);

//   switch (action.type) {
//     case "ADDITEM":
//       const exist = state.find((x) => x.id === product.id);

//       if (exist) {
//         if (totalQuantity < 10) {
//           storeData = state.map((x) =>
//             x.id === product.id ? { ...x, qty: x.qty + 1 } : x
//           );
//         } else {
//           storeData = state;
//           toast.error("Cart is Full, No More Add", {
//             position: "top-center",
//           });
//         }
//       } else {
//         if (totalQuantity < 10) {
//           storeData = [...state, { ...product, qty: 1 }];
//         } else {
//           storeData = state;
//           toast.error("Cart is Full, No More Add", {
//             position: "top-center",
//           });
//         }
//       }
//       break;

//     case "DELITEM":
//       const exist2 = state.find((x) => x.id === product.id);
//       if (exist2.qty === 1) {
//         storeData = state.filter((x) => x.id !== exist2.id);
//       } else {
//         storeData = state.map((x) =>
//           x.id === product.id ? { ...x, qty: x.qty - 1 } : x
//         );
//       }
//       break;

//     default:
//       return state;
//   }

//   localStorage.setItem("Cart", JSON.stringify(storeData));
//   return storeData;
// };

// export default handleCart;





const storedCart = localStorage.getItem("Cart");
let cart = [];

try {
  cart = storedCart ? JSON.parse(storedCart) : [];
} catch (error) {
  console.error("Error parsing JSON from localStorage:", error);
  cart = [];
}

const handleCart = (state = cart, action) => {
  const product = action.payload;
  let storeData;

  switch (action.type) {
    case "ADDITEM":
      const exist = state.find((x) => x.id === product.id);

      if (exist) {
        storeData = state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        storeData = [...state, { ...product, qty: 1 }];
      }
      break;

    case "DELITEM":
      const exist2 = state.find((x) => x.id === product.id);
      if (exist2.qty === 1) {
        storeData = state.filter((x) => x.id !== exist2.id);
      } else {
        storeData = state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      break;

    default:
      return state;
  }

  localStorage.setItem("Cart", JSON.stringify(storeData));
  return storeData;
};

export default handleCart;
