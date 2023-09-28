import Card from "../../components/Card/Card";

const Menu = ({ items, step, setStep, title, returnHome, children }: any) => {
  console.log("title", title, step);
  return (
    <>
      <div className='flex w-full  px-28 py-7 justify-center gap-5 '>
        <div className='flex w-full gap-5'>
          <Card width='min-w-[300px] max-w-[300px] flex-1  flex flex-col text-left  pt-10 pb-5 px-5'>
            <h6 className=' mb-4 ml-3'>
              <span
                className='hover:cursor-pointer hover:scale-125'
                onClick={returnHome}
              >
                Esx Academy{" "}
              </span>
            </h6>
            <div className='flex flex-col gap-1'>
              {items.map((item: any, index: number) => (
                <button
                  key={index}
                  className={`text-left font-light border-b border-black py-2 ml-11`}
                  style={{
                    borderBottom: "0.7px solid black",
                    fontSize: step === index ? "16px" : "14px",
                    fontWeight: step === index ? "400" : "300",
                  }}
                  onClick={() => {
                    setStep(index);
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </Card>
          <div className='flex flex-col flex-grow min-h-full h-auto  '>
            {children}
          </div>
        </div>
      </div>
      {title === "Overview" && step === 0 && (
        <div className='w-full flex items-center'>
          <Card width='w-[100%] mr-0 flex flex-col text-left p-4 py-14 '>
            <div>
              <h1 className='text-primary-blue text-[24px] font-bold w-[100%] text-center'>
                Contact the team
              </h1>
              <p className=' text-primary-black text-[16px] font-normal py-3 w-[100%] text-center'>
                Get in touch with our dedicated team today! Whether you have
                questions, feedback, or collaboration ideas, were here to assist
                you. Contact us now for a prompt response.
              </p>
              <div className='flex justify-center items-center '>
                <button className=' rounded-lg text-white text-[16px] font-semibold w-fit justify-center align-middle text-center bg-primary-blue p-2 my-4 px-8'>
                  Contact
                </button>
              </div>
            </div>
          </Card>
        </div>
      )}
      {title === "Courses and programs" && step === 1 && (
        <div className='flex justify-end items-end'>
          <div className='flex text-[16px] mr-48 px-5 py-5 mb-12 text-white  w-[50%] mx-auto rounded-lg justify-center items-end bg-primary-blue font-sans font-light tracking-widest gap-x-8'>
            <div className='rotate-180 border-l pl-8'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-8 h-8'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M8.25 4.5l7.5 7.5-7.5 7.5'
                />
              </svg>
            </div>
            <div> ...</div>
            <div>3</div>
            <div>4</div> <div>5</div> <div>6</div> <div>7</div>
            <div>8</div> <div>9</div> <div>...</div>
            <div className='border-l pl-8'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-8 h-8 mt-1.5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M8.25 4.5l7.5 7.5-7.5 7.5'
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
