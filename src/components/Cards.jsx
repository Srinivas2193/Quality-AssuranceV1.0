import React from "react";
import { Link } from "react-router-dom";
import "./cards.css";

export const Cards = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center px-3 mx-20" style={{height:"53vh"}}>
        <Link 
          to ="/feature1" 
          className=" cardDiv p-2 border-4 border-white mt-2 shadow-box bg-slate-200 rounded-2xl">
          <img
            src="https://upstox.com/app/uploads/2022/03/Banner-intraday-trading-02.png "
            alt="card2"
          />
          <p className="text-lg font-extrabold">Trading Account</p>
          <p className="text-lg font-semibold">
            Understand what is a trading account and how you can become an
            efficient trader.
          </p>
        </Link>
        <Link  to = "/feature2" className="cardDiv border-4 border-white mt-2 shadow-box bg-slate-200 rounded-2xl">
          <img src=" https://upstox.com/app/uploads/2022/03/Banner-demat-account-02.png" alt="card1" />
          <p className="text-lg font-semibold ">free demat account</p>
          <p className="text-lg font-semibold">
            Build your understanding about demat accounts with an extensive
            guide.
          </p>
        </Link>
        <Link to="/feature3"
          className="cardDiv p-2 border-4 border-white mt-2 shadow-box bg-slate-200 rounded-2xl">
          <img
            src="https://upstox.com/app/uploads/2022/03/Banner-online-trading-02.png"
            alt="card3"
          />
          <h1 className="text-lg font-semibold">Online trading</h1>
          <p className="text-lg font-semibold">
            A complete guide to conducting online trading through various
            trading platforms.
          </p>
        </Link>
      </div>
        {/* <div className="flex justify-center">
          <h1 className="text-xl font-semibold text-black bg-blue-300">
            5x margins for Intraday/CO/OCO Orders. You pay ₹20 /trade* or 0.05%
            (whichever is lower) for Intraday trading in Stocks, F&O, Currencies
            & Commodities.
          </h1>
        </div> */}
      <div className="flex justify-center items-center" style={{height:"48px",width:"100%"}}>
        <Link to="/contact"className="contactUsButton">
          Contact us
        </Link>
      </div>
    </div>
  );
};
export default Cards;
