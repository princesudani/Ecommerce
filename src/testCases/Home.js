import React, { useState } from "react";
import Table from "./Table";

const Home = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    
      <div className="home-class">
        <p>Home</p>
        <div className="click">
          <div className={`click-${count}`}>{count}</div>
        </div>
        <ul>
          <li key="react" className="li-class">
            React
          </li>
          <li key="js" className="li-class">
            JS
          </li>
          <li key="html" className="li-class">
            HTML
          </li>
        </ul>

        <div>
          <button className="click-me-btn" onClick={handleClick}>
            Count
          </button>
          <button className="btn btn-dark disabled">click me</button>
        </div>
      <Table />
      </div>
  
  );
};

export default Home;
