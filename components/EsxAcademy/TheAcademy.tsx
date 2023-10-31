import tradingoverview from "@/public/images/trading-overview.jpeg";
import Image from "next/image";
import Link from "next/link";
import Card from "../Card/Card";

function TheAcademy() {
  return (
    <div className='w-full flex h-full flex-col'>
      {/* <div className='bg-white flex flex-col md:flex-grow items-center h-full w-full'>
        <div className=' ml-[0%] w-[100%] pr-0'>
          {" "}
          <Image
            height={300}
            width={200}
            src={tradingoverview}
            alt='manager'
            className='md:hidden w-[100%] h-[100%] border object-cover'
          />
        </div>
        <div className='w-[100%] md:w-[55%] px-5 h-full'>
          <div className='w-[100%] flex flex-col justify-between'>
            <div>
              <h1 className='text-[20px] md:text-[30px]   font-normal pt-5 md:pt-12'>
                Overview{" "}
              </h1>
              <p className='w-[90%] text-[14px] md:text-[16px]   font-light md:font-normal leading-6    pt-4'>
                ESX has observed capacity gaps across financial institutions and
                government agencies on key aspects of capital market products,
                services, and infrastructures. As ESX will be operating in a
                market where the development of the Ethiopian Capital Markets
                ecosystem is just beginning, it is crucial for ESX to play a
                leading role in investor education, capacity development, and
                financial literacy and inclusion in Ethiopia.
              </p>
              <Link
                href='#'
                className='flex text-[16px] font-semibold pt-5 pb-8 md:pb-16'
              >
                View more{" "}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-4 h-4 mt-1.5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M8.25 4.5l7.5 7.5-7.5 7.5'
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className=' ml-[3%] w-[45%] pr-9'>
          {" "}
          <Image
            height={300}
            width={200}
            src={tradingoverview}
            alt='manager'
            className='hidden md:block w-[100%] h-[100%] border object-cover'
          />
        </div>
      </div>
      <div className='flex flex-col md:flex-grow items-center h-full w-full mt-7'>
        <div className=' w-[100%]'>
          {" "}
          <Image
            height={300}
            width={200}
            src={tradingoverview}
            alt='manager'
            className='w-[100%]  md:hidden h-[100%] border object-cover'
          />
        </div>
        <div className='bg-white md:w-[55%] px-5 h-full'>
          <div className='w-[100%] flex flex-col justify-between'>
            <div>
              <h1 className='text-[20px] md:text-[24px]   font-normal pt-5'>
                The broad level objectives of the ESX Academy are:
              </h1>
              <div className='pt-3'>
                <li className='text-[14px]   font-normal   '>
                  To educate various stakeholders on the role of capital markets
                  in general and the role, functions, and operations of ESX.
                </li>
                <li className='text-[14px]   font-normal   '>
                  To be a learning center that offers free and paid courses,
                  workshops, and training to equip issuers, investors, capital
                  market service providers, financial market professionals, and
                  the general public, with the knowledge and skills to
                  participate in the Ethiopian Capital Markets ecosystem. To
                  fill the capacity and knowledge gaps of financial market
                  professionals, investors and the general public.To educate
                  various stakeholders on the role of capital markets in general
                  and the role, functions, and operations of ESX. To be a
                  learning center that offers free and paid courses, workshops,
                  and training to equip issuers, investors, capital market
                  service providers, financial market professionals, and the
                  general public, with the knowledge and skills to participate
                  in the Ethiopian Capital Markets ecosystem.
                </li>
                <li className='text-[14px]   font-normal   '>
                  To fill the capacity and knowledge gaps of financial market
                  professionals, investors and the general public.
                </li>
              </div>
              <Link
                href='#'
                className='flex text-[16px] font-semibold pt-4 pb-9'
              >
                View more{" "}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-4 h-4 mt-1.5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M8.25 4.5l7.5 7.5-7.5 7.5'
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className=' ml-5 h-full w-[45%]'>
          {" "}
          <Image
            height={300}
            width={200}
            src={tradingoverview}
            alt='manager'
            className='w-[100%] hidden md:block h-[100%] border object-cover'
          />
        </div>
      </div>
      <Card width='w-[100%] my-5 mb-0 px-5 flex flex-col flex-grow justify-between'>
        <div>
          <h2 className='text-paragraphSmall font-normal pt-11'>
            The target audience includes{" "}
          </h2>
          <div className='pt-4'>
            <li className='text-[14px] md:text-[16px ] font-light my-2 mt-4   '>
              Entrepreneurs, business operators, investors
            </li>
            <li className='text-[14px] md:text-[16px ]  font-light my-2 mt-4   '>
              Finance professionals
            </li>
            <li className='text-[14px] md:text-[16px ]  font-light my-2 mt-4   '>
              High school and University students
            </li>
            <li className='text-[14px] md:text-[16px ]  font-light my-2 mt-4   '>
              Academic institutions
            </li>
          </div>
        </div>
        <Link href='#' className='flex text-[16px] mt-5 px-0 pb-10'>
          View more{" "}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-4 h-4 mt-1.5'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8.25 4.5l7.5 7.5-7.5 7.5'
            />
          </svg>
        </Link>
      </Card> */}
      <Card width='w-[100%]  p-4 pt-0'>
        <div className='flex ml-4 md:py-10  md:pt-5 md:mx-10'>
          {/* <div className='w-[100%] md:w-[60%] '> */}
          <div className='w-[100%]  '>
            <div className='w-[100%] flex  flex-col  md:mt-0  pt-0'>
              <h1 className='text-header border-b-[3px] border-light-golden w-fit text-left mt-0 pt-0'>
                Overview
              </h1>

              <p className='w-[100%]  text-paragraphSmall  font-light mt-4 pt-0 leading-6 '>
                ESX has observed capacity gaps across financial institutions and
                government agencies on key aspects of capital market products,
                services, and infrastructures. As ESX will be operating in a
                market where the development of the Ethiopian Capital Markets
                ecosystem is just beginning, it is crucial for ESX to play a
                leading role in investor education, capacity development, and
                financial literacy and inclusion in Ethiopia.
              </p>
              <p className='w-[100%]  text-paragraphSmall  font-light my-4 pt-0 leading-6 '>
                In addition to various levels of communication and awareness
                efforts, e.g., consultation workshops, media and public
                relations activities, ESX aims to set up an academy to provide
                continuous education and capacity building activities to various
                stakeholders.
              </p>
              <p className='w-[100%]  text-paragraphBig  font-normal mt-2 pt-0 leading-6 '>
                The broad level objectives of the ESX Academy are:
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
                <span>○ </span>

                <span className='ml-2'>
                  To educate various stakeholders on the role of capital markets
                  in general and the role, functions, and operations of ESX.
                </span>
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
                <span>○ </span>

                <span className='ml-2'>
                  To be a learning center that offers free and paid courses,
                  workshops, and training to equip issuers, investors, capital
                  market service providers, financial market professionals, and
                  the general public, with the knowledge and skills to
                  participate in the Ethiopian Capital Markets ecosystem.{" "}
                </span>
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
                <span>○ </span>

                <span className='ml-2'>
                  To fill the capacity and knowledge gaps of financial market
                  professionals, investors and the general public.
                </span>
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
                <span>○ </span>

                <span className='ml-2'>
                  To promote financial literacy, financial inclusion, and job
                  creation in Ethiopia.
                </span>
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
                <span>○ </span>
                <span className='ml-2'>
                  To offer customized electronic learning (e-learning) options
                  via pre-recorded educational content.{" "}
                </span>{" "}
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
                <span>○ </span>

                <span className='ml-2'>
                  The importance of building a strong and knowledgeable
                  stakeholder base for the long run sustainability of the
                  Ethiopian Capital Markets and ESX.
                </span>
              </p>

              <p className='w-[100%]  text-paragraphBig  ml-5 font-normal mt-5 pt-0 leading-6 '>
                The target audience includes:{" "}
              </p>
              <p className='text-black text-paragraphSmall  font-light ml-10  mt-4 flex'>
                <span>○ </span>

                <span className='ml-2'>
                  Entrepreneurs, business operators, investors
                </span>
              </p>
              <p className='text-black text-paragraphSmall font-light ml-10  mt-4 flex'>
                <span>○ </span>

                <span className='ml-2'>Finance professionals </span>
              </p>
              <p className='text-black text-paragraphSmall font-light ml-10  mt-4 flex'>
                <span>○ </span>

                <span className='ml-2'>
                  High school and University students{" "}
                </span>
              </p>
              <p className='text-black text-paragraphSmall font-light ml-10  mt-4 flex'>
                <span>○ </span>

                <span className='ml-2'>Academic institutions</span>
              </p>
              <p className='text-black text-paragraphSmall font-light ml-10  mt-4 flex'>
                <span>○ </span>
                <span className='ml-2'>The Ethiopian Diaspora</span>{" "}
              </p>
              <p className='text-black text-paragraphSmall font-light ml-10  mt-4 flex'>
                <span>○ </span>

                <span className='ml-2'>Government agencies </span>
              </p>
              <p className='text-black text-paragraphSmall font-light ml-10  mt-4 flex'>
                <span>○ </span>

                <span className='ml-2'>Legal professionals </span>
              </p>
              <p className='text-black text-paragraphSmall font-light ml-10  mt-4 flex'>
                <span>○ </span>

                <span className='ml-2'>Capital markets service providers </span>
              </p>
              <p className='text-black text-paragraphSmall font-light ml-10  mt-4 flex'>
                <span>○ </span>

                <span className='ml-2'>General public</span>
              </p>
            </div>
          </div>
          {/* <div className='hidden md:block w-[38%] ml-[3%]'>
                {" "}
                <Image
                  height={300}
                  width={200}
                  src={whoweare.src}
                  alt='manager'
                  className='w-[100%] border object-cover rounded-full  border-'
                />
              </div> */}
        </div>
      </Card>
    </div>
  );
}

export default TheAcademy;
