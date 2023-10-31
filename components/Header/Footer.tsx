"use client";
import { useNumber } from "@/context/nav.context";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  const { setNumber } = useNumber();
  const router = useRouter();

  // State to control chatbox visibility
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);

  const openChatbox = () => {
    setIsChatboxOpen(true);
  };

  const closeChatbox = () => {
    setIsChatboxOpen(false);
  };
  return (
    <footer className='bg-primary-blue  bottom-0 w-[100vw] z-50 hidden lg:block text-white py-8 sm:px-4 lg:px-12 lg:px-20'>
      <div className='flex flex-col sm:flex-row'>
        <div className='flex-1 sm:w-1/3'>
          <h1 className='font-[500] text-2xl sm:text-3xl lg:text-4xl mb-4'>
            ESX
          </h1>
          <div className='grid grid-cols-2 lg:flex justify-between  mt-12 '>
            <div className='column span-4'>
              <ul>
                <li className='border-b-2 mb-5 border-primary-golden pb-2 w-full   text-paragraphSmall text-left font-light '>
                  <button
                    onClick={() => {
                      setNumber(0);
                      router.push("/about-us");
                    }}
                    className='text-left w-full'
                  >
                    About ESX
                  </button>
                </li>

                <li className=' py-2    text-paragraphSmall text-left font-light'>
                  <button
                    onClick={() => {
                      setNumber(4);
                      router.push("/about-us");
                    }}
                    className='text-paragraphSmall w-[100%] text-left font-light '
                  >
                    Management - Our Leadership Team{" "}
                  </button>
                </li>
                <li className=' py-2    text-paragraphSmall text-left font-light '>
                  <button
                    onClick={() => {
                      // setNumber(4);
                      // router.push("/about-us");
                    }}
                  >
                    Careers
                  </button>
                </li>
                <li className=' py-2    text-paragraphSmall text-left font-light'>
                  <button
                    onClick={() => {
                      // setNumber(4);
                      // router.push("/about-us");
                    }}
                  >
                    Tenders
                  </button>
                </li>
              </ul>
            </div>
            <div className='column span-4'>
              <ul>
                <li className='border-b-2 mb-5 border-primary-golden pb-2 w-full   text-paragraphSmall text-left font-light '>
                  <button
                    onClick={() => {
                      setNumber(0);
                      router.push("/about-us");
                    }}
                    className='text-left w-full'
                  >
                    {" "}
                    Legal
                  </button>
                </li>

                <li className=' py-2    text-paragraphSmall text-left font-light '>
                  <button
                    onClick={() => {
                      // setNumber(4);
                      // router.push("/about-us");
                    }}
                  >
                    Disclaimer & Terms of use
                  </button>
                </li>
                <li className=' py-2   '>
                  <button
                    onClick={() => {
                      // setNumber(4);
                      // router.push("/about-us");
                    }}
                    className='text-paragraphSmall w-[100%] text-left font-light '
                  >
                    Privacy and Cookie Statement{" "}
                  </button>
                </li>

                {/* <li className=' '>
                    <a href='#'> NEWS AND MEDIA CENTER </a>
                  </li>
                  <li className=' '>
                    <a href='#'> ESX Academy </a>
                  </li> */}
              </ul>
            </div>
            <div className='column span-4'>
              <ul>
                <li className='border-b-2 mb-5 border-primary-golden pb-2 w-full   text-paragraphSmall text-left font-light'>
                  <button
                    onClick={() => {
                      // setNumber(0);
                      // router.push("/about-us");
                    }}
                    className='text-left w-full'
                  >
                    {" "}
                    Contact Us
                  </button>
                </li>

                <li className=' py-2    text-paragraphSmall text-left font-light '>
                  <a href='phoneto:+251 900 000 000'>Tel : +251 900 000 000</a>
                </li>
                <li className=' py-2    text-paragraphSmall text-left font-light '>
                  <a href='mailto:contactus@esxproject.com'>
                    Email : contactus@esxproject.com
                  </a>
                </li>
                <li className=' py-2    text-paragraphSmall text-left font-light '>
                  <a href=''>Address : Minaye Corporate Office 18th floor</a>
                </li>
              </ul>
            </div>
            <div className='column span-1'>
              <ul>
                <li className='text-paragraphSmall text-left font-light'>
                  <button
                    onClick={() => {
                      // setNumber(0);
                      // router.push("/about-us");
                    }}
                    className='text-left w-full'
                  >
                    Subscribe to ESX
                  </button>
                </li>

                <li className='py-2 text-paragraphSmall text-left font-light'>
                  <button
                    className='border-white border px-10 py-1 mt-5'
                    onClick={openChatbox}
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
    </footer>
  );
};

export default Footer;
