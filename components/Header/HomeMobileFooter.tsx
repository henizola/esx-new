"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
// ... (imports)

const HomeMobileFooter: React.FC = () => {
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);

  const openChatbox = () => {
    setIsChatboxOpen(true);
  };

  const closeChatbox = () => {
    setIsChatboxOpen(false);
  };

  return (
    <footer
      className={` bg-primary-blue lg:hidden  w-[100vw] text-white py-8 sm:px-4`}
    >
      <div className='container mx-auto'>
        <div className='flex flex-col sm:flex-row'>
          <div className='flex-1 sm:w-1/3'>
            <h1 className='font-[500] text-center text-2xl sm:text-3xl lg:text-4xl mb-0'>
              ESX
            </h1>
            <div className='grid grid-cols-1 lg:flex justify-between  mt-5'>
              <div className='column span-4'>
                <ul>
                  <li className='border-b-2 mb-5 border-primary-golden pb-2 w-full text-paragraphSmall text-left font-light '>
                    <Link href='/about-us'>
                      <p className='text-center w-full'>About ESX</p>
                    </Link>
                  </li>
                  <li className=' py-2 text-paragraphSmall text-center font-light'>
                    <Link href='/about-us'>
                      <p className='text-paragraphSmall w-[100%] text-center font-light'>
                        Management - Our Leadership Team
                      </p>
                    </Link>
                  </li>
                  <li className=' py-2 text-paragraphSmall text-center font-light'>
                    <Link href='/about-us'>
                      <p className='text-paragraphSmall w-[100%] text-center font-light'>
                        Careers
                      </p>
                    </Link>
                  </li>
                  <li className=' py-2 text-paragraphSmall text-center font-light'>
                    <Link href='/faq'>
                      <p className='text-paragraphSmall w-[100%] text-center font-light'>
                        FAQs
                      </p>
                    </Link>
                  </li>
                  {/* Additional links */}
                </ul>
              </div>
              <div className='column span-4'>
                <ul>
                  <li className='border-b-2 mb-5 border-primary-golden pb-2 w-full text-paragraphSmall text-left font-light '>
                    <Link href='/legal'>
                      <p className='text-center w-full '>Legal</p>
                    </Link>
                  </li>
                  <li className=' py-2 text-paragraphSmall text-center font-light'>
                    <Link href='/legal'>
                      <p className='text-paragraphSmall w-[100%] text-center font-light'>
                        Disclaimer & Terms of use
                      </p>
                    </Link>
                  </li>
                  <li className=' py-2 '>
                    <Link href='/legal'>
                      <p className='text-paragraphSmall w-[100%] text-center font-light'>
                        Privacy and Cookie Statement
                      </p>
                    </Link>
                  </li>
                  {/* Additional links */}
                </ul>
              </div>
              <div className='column span-4'>
                <ul>
                  <li className='border-b-2 mb-5 border-primary-golden pb-2 w-full text-paragraphSmall text-left font-light'>
                    <Link href='/contact-us'>
                      <p className='text-center w-full '>Contact Us</p>
                    </Link>
                  </li>
                  <li className=' py-2 text-paragraphSmall text-center font-light'>
                    <a href='phoneto:+251900000000'>Tel: +251 900 000 000</a>
                  </li>
                  <li className=' py-2 text-paragraphSmall text-center font-light'>
                    <a href='mailto:contactus@esxproject.com'>
                      Email: contactus@esxproject.com
                    </a>
                  </li>
                  <li className=' py-2 text-paragraphSmall text-center font-light'>
                    <a href=''>Address: Minaye Corporate Office 18th floor</a>
                  </li>
                  {/* Additional links */}
                </ul>
              </div>
              <div className='column span-1'>
                <ul>
                  <li className='text-paragraphSmall text-left font-light'>
                    <Link href='/subscribe'>
                      <p className='text-center w-full '>Subscribe to ESX</p>
                    </Link>
                  </li>
                  <li className='py-2 text-paragraphSmall text-center font-light'>
                    <button
                      onClick={openChatbox}
                      className='border-white border px-10 py-1 mt-5'
                    >
                      Subscribe
                    </button>
                  </li>
                  <li className='py-2 pt-5'>
                    <div className='flex justify-around'>
                      <a href='#' className='icon-link'>
                        <FaFacebook className='h-6 w-6 text-gray-500' />
                      </a>
                      <a href='#' className='icon-link'>
                        <FaLinkedin className='h-6 w-6 text-gray-500' />
                      </a>
                      <a href='#' className='icon-link'>
                        <FaTwitter className='h-6 w-6 text-gray-500' />
                      </a>
                    </div>
                  </li>
                  {/* Chatbox Modal */}
                  {isChatboxOpen && (
                    <div className='fixed bottom-0 left-0 m-4'>
                      <div className='bg-white p-4 w-[300px] rounded-lg shadow-md'>
                        <button
                          className='absolute top-0 right-2 p-2 text-primary-golden text-paragraphSmall text-left font-light'
                          onClick={closeChatbox}
                        >
                          &times;
                        </button>
                        <h2 className='text-xl font-semibold mt-5 text-primary-blue'>
                          Sign up to our newsletter
                        </h2>
                        <form className='p-4' onSubmit={closeChatbox}>
                          <input
                            type='text'
                            placeholder='Name'
                            required
                            className='w-full  border  text-primary-blue   border-primary-blue  rounded p-2 my-2'
                          />
                          <input
                            type='email'
                            placeholder='Email'
                            required
                            className='w-full border text-primary-blue border-primary-blue rounded p-2 my-2'
                          />
                          <button
                            type='submit'
                            className='bg-primary-blue text-white py-2 px-4 rounded mt-4'
                          >
                            Subscribe
                          </button>
                        </form>
                      </div>
                    </div>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomeMobileFooter;
