import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className='bg-primary-blue hidden lg:block text-white py-8 sm:px-4 lg:px-12 lg:px-20'>
      <div className='container mx-auto'>
        <div className='flex flex-col sm:flex-row'>
          <div className='flex-1 sm:w-1/3'>
            <h1 className='font-bold text-2xl sm:text-3xl lg:text-4xl mb-4'>
              ESX
            </h1>
            <div className='grid grid-cols-2 lg:flex justify-between  mt-12 '>
              <div className='column span-3'>
                <ul>
                  <li className=' '>
                    <a href='#'>ABOUT US </a>
                  </li>

                  <li className=' '>
                    <a href='#'> EQUITY MARKET </a>
                  </li>
                  <li className=' '>
                    <a href='#'>FIXED INCOME MARKET </a>
                  </li>
                  <li className=' '>
                    <a href='#'> ALTERNATIVE AND GROWTH MARKET </a>
                  </li>
                  <li className=' '>
                    <a href='#'> NEWS AND MEDIA CENTER </a>
                  </li>
                  <li className=' '>
                    <a href='#'> ESX Academy </a>
                  </li>
                </ul>
              </div>
              <div className='column small-font span-4'>
                <ul>
                  <li className=' '>
                    <a href='#'>LEGAL </a>
                  </li>
                  <li className=' '>
                    <a href='#'>OUR PEOPLE </a>
                  </li>
                  <li className=' '>
                    <a href='#'>CONFLICT OF INTEREST POLICY & UK BRIBERY ACT</a>
                  </li>
                  <li className=' '>
                    <a href='#'>ACCESSIBILITY</a>
                  </li>
                  <li className=' '>
                    <a href='#'> PRIVACY AND COOKIE STATEMENT</a>
                  </li>
                  <li className=' '>
                    <a href='#'> CONFLICTS OF INTEREST ASSESSMENT</a>
                  </li>
                </ul>
              </div>
              <div className='column small-font'>
                <ul>
                  <li className=' '>
                    <a href='#'>Contact Us </a>
                  </li>
                  <li className=' '>
                    <a href='#'>OUR PEOPLE </a>
                  </li>
                  <li className=' '>
                    <a href='#'> A2X FAO </a>
                  </li>
                  <li className=' '>
                    <a href='#'> A2X NEWS SERVICE </a>
                  </li>
                  <li className=' '>
                    <a href='#'> TECHNICAL DOCUMENTS </a>
                  </li>
                  <li className=' '>
                    <a href='#'> 2023 PUBLIC HOLIDAYS </a>
                  </li>
                  <li className=' '>
                    <a href='#'> MARKET DATA </a>
                  </li>
                  <li className=' '>
                    <a href='#'> A2X POLICIES </a>
                  </li>
                  <li className=' '>
                    <a href='#'> CONFLICTS OF INTEREST ASSESSMENT</a>
                  </li>
                </ul>
              </div>
              <div className='hidden lg:flex flex-col justify-between'>
                <div className='h-14 w-14 rounded-full bg-white'></div>
                <div className='h-14 w-14 rounded-full bg-white'></div>{" "}
                <div className='h-14 w-14 rounded-full bg-white'></div>{" "}
                <div className='h-14 w-14 rounded-full bg-white'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
