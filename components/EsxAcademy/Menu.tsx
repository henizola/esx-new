import Card from "../../components/Card/Card";
import Pagination from "../Paginnation/Pagination";

const Menu = ({ items, step, setStep, title, returnHome, children }: any) => {
  return (
    <>
      <div className='flex w-full  px-28 py-7 justify-center gap-5 '>
        <div className='grid sm:grid-cols-9 gap-8  '>
          <Card width='col-span-2 hidden lg:flex flex-col text-left  py-[20px] px-[20px]'>
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
                  className={`text-left font-light border-b border-black py-2 ml-5`}
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
          <div className='col-span-7 space-y-5  w-[100vw] lg:w-[auto]'>
            {children}
          </div>
        </div>
      </div>
      {/* {title === "Overview" && step === 0 && (
        <div className='w-full flex items-center'>
          <Card width='w-[100%] mr-0 flex flex-col text-left p-4 py-5 md:py-14 '>
            <div className=''>
              <h1 className='text-primary-blue text-[20px] md:text-[24px] font-bold w-[100%] text-center'>
                Contact the team
              </h1>
              <p className=' text-primary-black text-[14px] md:text-[16px] font-normal py-3 w-[100%] text-center'>
                Get in touch with our dedicated team today! Whether you have
                questions, feedback, or collaboration ideas, were here to assist
                you. Contact us now for a prompt response.
              </p>
              <div className='flex justify-center items-center '>
                <button className=' rounded-lg text-white text-[16px] font-semibold w-fit justify-center align-middle text-center bg-primary-blue p-2 my-1 md:my-4 px-8'>
                  Contact
                </button>
              </div>
            </div>
          </Card>
        </div>
      )} */}
      {title === "Courses and programs" && step === 1 && (
        <div className='flex justify-center items-center'>
          <Pagination />
        </div>
      )}
    </>
  );
};

export default Menu;
