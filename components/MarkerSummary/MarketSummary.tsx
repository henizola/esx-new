import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import down from "../../public/images/down.svg";
import up from "../../public/images/up.svg";
import "./MarketSummary.css";

const dummyStockData = [
  { name: "Total markets", price: 100 },
  { name: "Equity market", price: 150 },
  { name: "Fixed income market", price: 75 },
  { name: "Alternative & growth market", price: 120 },
  { name: "Share index", price: 90 },
  { name: "T-bills & bonds", price: 200 },
  { name: "Total markets", price: 100 },
  { name: "Equity market", price: 150 },
  { name: "Fixed income market", price: 75 },
  { name: "Alternative & growth market", price: 120 },
  { name: "Share index", price: 90 },
  { name: "T-bills & bonds", price: 200 },
  { name: "Total markets", price: 100 },
  { name: "Equity market", price: 150 },
  { name: "Fixed income market", price: 75 },
  { name: "Alternative & growth market", price: 120 },
  { name: "Share index", price: 90 },
  { name: "T-bills & bonds", price: 200 },
  { name: "Total markets", price: 100 },
  { name: "Equity market", price: 150 },
  { name: "Fixed income market", price: 75 },
  { name: "Alternative & growth market", price: 120 },
  { name: "Share index", price: 90 },
  { name: "T-bills & bonds", price: 200 },
  { name: "Total markets", price: 100 },
  { name: "Equity market", price: 150 },
  { name: "Fixed income market", price: 75 },
  { name: "Alternative & growth market", price: 120 },
  { name: "Share index", price: 90 },
  { name: "T-bills & bonds", price: 200 },
];

const MarketSummary: React.FC = () => {
  const [stocks, setStocks] = useState(dummyStockData);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5.5,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1}
        stroke='gray'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M8.25 4.5l7.5 7.5-7.5 7.5'
        />
      </svg>
    ),
    prevArrow: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1}
        stroke='gray'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M15.75 19.5L8.25 12l7.5-7.5'
        />
      </svg>
    ),
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedStocks = stocks.map((stock) => ({
        ...stock,
        price: stock.price + Math.random() * 100 - 5,
      }));
      setStocks(updatedStocks);
    }, 2000);

    return () => clearInterval(interval);
  }, [stocks]);

  return (
    <div className='summary max-w-[100vw] py-10   bg-white'>
      <h1 className='text-[36px] ml-28'>Market summary</h1>
      <Slider {...settings} className='mt-10 p-0  mx-32'>
        {stocks.map((slide, index) => (
          <div key={slide.name} className='px-5'>
            <h1 className='text-[24px] h-[90px] text-center'>{slide.name}</h1>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <div className='text-[14px] text-center w-fit text-black pl-0 relative'>
                {slide.price.toFixed(2)}{" "}
                {Math.random() * 107 - 5 > 60 ? (
                  <Image
                    height={0}
                    width={0}
                    src={up.src}
                    alt='manager'
                    className='w-5 h-5 -right-8 absolute top-1'
                  />
                ) : (
                  <Image
                    height={0}
                    width={0}
                    src={down.src}
                    alt='manager'
                    className='w-5 h-5 -right-8 absolute top-1'
                  />
                )}
              </div>
              <div
                className={`text-[14px] ${
                  Math.random() * 107 - 5 > 60 ? "text-[#A8965B]" : "text-[red]"
                } pl-10 relative w-fit`}
              >
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

export default MarketSummary;
