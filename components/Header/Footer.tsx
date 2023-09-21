import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className='bg-primary-blue  left-0 bottom-0 text-white  px-20  mx-0 w-screen py-0  min-h-[40vh]'>
      <div className='px-7 py-7 h-[100%]  '>
        <div className=''>
          <h1 className='font-bold text-5xl'>ESX</h1>
        </div>
        <div className='flex justify-between h-[100%] mt-12 '>
          <div className='column span-3'>
            <ul>
              <li className=' h-8'>
                <a href='#'>ABOUT US </a>
              </li>

              <li className=' h-8'>
                <a href='#'> EQUITY MARKET </a>
              </li>
              <li className=' h-8'>
                <a href='#'>FIXED INCOME MARKET </a>
              </li>
              <li className=' h-8'>
                <a href='#'> ALTERNATIVE AND GROWTH MARKET </a>
              </li>
              <li className=' h-8'>
                <a href='#'> NEWS AND MEDIA CENTER </a>
              </li>
              <li className=' h-8'>
                <a href='#'> ESX Academy </a>
              </li>
            </ul>
          </div>
          <div className='column small-font span-4'>
            <ul>
              <li className=' h-8'>
                <a href='#'>LEGAL </a>
              </li>
              <li className=' h-8'>
                <a href='#'>OUR PEOPLE </a>
              </li>
              <li className=' h-8'>
                <a href='#'>CONFLICT OF INTEREST POLICY & UK BRIBERY ACT</a>
              </li>
              <li className=' h-8'>
                <a href='#'>ACCESSIBILITY</a>
              </li>
              <li className=' h-8'>
                <a href='#'> PRIVACY AND COOKIE STATEMENT</a>
              </li>
              <li className=' h-8'>
                <a href='#'> CONFLICTS OF INTEREST ASSESSMENT</a>
              </li>
            </ul>
          </div>
          <div className='column small-font'>
            <ul>
              <li className=' h-8'>
                <a href='#'>Contact Us </a>
              </li>
              <li className=' h-8'>
                <a href='#'>OUR PEOPLE </a>
              </li>
              <li className=' h-8'>
                <a href='#'> A2X FAO </a>
              </li>
              <li className=' h-8'>
                <a href='#'> A2X NEWS SERVICE </a>
              </li>
              <li className=' h-8'>
                <a href='#'> TECHNICAL DOCUMENTS </a>
              </li>
              <li className=' h-8'>
                <a href='#'> 2023 PUBLIC HOLIDAYS </a>
              </li>
              <li className=' h-8'>
                <a href='#'> MARKET DATA </a>
              </li>
              <li className=' h-8'>
                <a href='#'> A2X POLICIES </a>
              </li>
              <li className=' h-8'>
                <a href='#'> CONFLICTS OF INTEREST ASSESSMENT</a>
              </li>
            </ul>
          </div>
          <div className='flex flex-col justify-between'>
            <div className='h-14 w-14 rounded-full bg-white'></div>
            <div className='h-14 w-14 rounded-full bg-white'></div>{" "}
            <div className='h-14 w-14 rounded-full bg-white'></div>{" "}
            <div className='h-14 w-14 rounded-full bg-white'></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
