// ("use client");
import { Card, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import Slider from "react-slick";
import "./HomeSliderStyles.css";
import up from "../../public/images/up.svg";
import down from "../../public/images/down.svg";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Image from "next/image";

// Dummy data for demonstration purposes (replace with actual stock data)
const dummyStockData = [
  { name: "Stock A", price: 100 },
  { name: "Stock B", price: 150 },
  { name: "Stock C", price: 75 },
  { name: "Stock D", price: 120 },
  { name: "Stock E", price: 90 },
  { name: "Stock F", price: 200 },
  { name: "Stock A", price: 100 },
  { name: "Stock B", price: 150 },
  { name: "Stock C", price: 75 },
  { name: "Stock D", price: 120 },
  { name: "Stock E", price: 90 },
  { name: "Stock F", price: 200 },
  { name: "Stock A", price: 100 },
  { name: "Stock B", price: 150 },
  { name: "Stock C", price: 75 },
  { name: "Stock D", price: 120 },
  { name: "Stock E", price: 90 },
  { name: "Stock F", price: 200 },
];

const StockPriceAutoScroller: React.FC = () => {
  const [stocks, setStocks] = useState(dummyStockData);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
  };

  // useEffect(() => {
  //   // Simulate real-time updates (replace with WebSocket or API calls)
  //   const interval = setInterval(() => {
  //     const updatedStocks = stocks.map((stock) => ({
  //       ...stock,
  //       price: stock.price + Math.random() * 100 - 5, // Simulate price change
  //     }));
  //     setStocks(updatedStocks);
  //   }, 2000); // Update every 2 seconds

  //   return () => clearInterval(interval);
  // }, [stocks]);
  return (
    <div className='max-w-[100vw] py-5'>
      <Slider {...settings} className=' m-0 p-0'>
        {stocks.map((slide, index) => (
          <div key={slide.name}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div className='text-white pl-0 relative w-fit'>
                Lorem {slide.price.toFixed(2)}{" "}
                {Math.random() * 107 - 5 > 60 ? (
                  <Image
                    height={0}
                    width={0}
                    src={up.src}
                    alt='manager'
                    className='w-5 h-5 -right-8 absolute top-1 '
                  />
                ) : (
                  <Image
                    height={0}
                    width={0}
                    src={down.src}
                    alt='manager'
                    className='w-5 h-5 -right-8 absolute top-1 '
                  />
                )}
              </div>
              <div className='text-white pl-10 relative w-fit'>
                {" "}
                {(Math.random() * 10 - 5).toFixed(0)} %
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default StockPriceAutoScroller;