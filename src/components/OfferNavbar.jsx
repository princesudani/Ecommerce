import React, { useEffect, useState } from "react";

const OfferNavbar = () => {
  const [offers, setOffers] = useState(0);
  const myOffers = [
    "Get 20% off on your first purchase! Use code WELCOME20 at checkout. Learn More ➜",
    "Free shipping on orders over 10 items! Shop now to save more. Learn More ➜",
    "Buy one, get one free on selected items! Limited time offer. Learn More ➜",
    "Get a $10 gift card with every purchase over $50! Learn More ➜",
    "Flash sale! Up to 50% off on all items this weekend. Learn More ➜",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setOffers((prevIndex) => (prevIndex + 1) % myOffers.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [myOffers.length]);

  return (
    // <div className="bg-secondary sticky-top">
    <div className="gradient-background sticky-top">
      <div className="container ">
        <div className="d-flex justify-content-center align-items-center text-white font-weight-bold py-1">
          <span className="offer">{myOffers[offers]}</span>
        </div>
      </div>
    </div>
  );
};

export default OfferNavbar;
