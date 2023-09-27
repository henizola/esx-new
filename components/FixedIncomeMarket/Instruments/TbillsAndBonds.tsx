import Image from "next/image";
import tbills from "../../../public/images/tbills.png";
import Card from "../../Card/Card";

function TbillsAndBonds() {
  const tbils = [
    "T-Bills are auctioned biweekly with a minimum investment amount of ETB 5,000 and are issued in four different maturities of 28-days, 91-days, 182-days and 364-days with fixed rates of interest.",
    "T-Bills are sold at a discount from the face value of the bill at the date of issue, meaning the purchase price is less than the face value of the security on the purchase date. When the T-Bill matures, the investor receives the face value of the T-Bill.",
    "The interest received by the investor is reflected in the difference between the discount sale price on the purchase date and the face value received at maturity.",
    "Treasury Bonds are safe, long-term debt securities issued by the Ethiopian government to investors with a maturity period of more than one year.",
  ];
  return (
    <Card width='flex flex-col  w-full h-full'>
      <div className='bg-[#00205B] w-full h-full'>
        <h1 className='text-[40px] px-5 py-5  text-left text-white  w-[100%] bg-primary-blue font-sans font-normal '>
          T-Bills and Bonds
        </h1>
      </div>
      <div className='flex h-full '>
        <div className='min-h-full bg-white py-10 px-5 flex flex-col justify-between  '>
          <div>
            {tbils.map((tbil, index) => {
              return (
                <p
                  key={index}
                  className={` py-5 text-[14px] font-sans ${
                    tbils.length - 1 !== index && "border-b border-black "
                  }`}
                >
                  {tbil}
                </p>
              );
            })}
          </div>
        </div>
        <div className='min-w-[38%] min-h-full '>
          <Image
            height={200}
            width={200}
            src={tbills.src}
            alt='tbills'
            className='w-[100%] h-[100%] object-fill '
          />
        </div>
      </div>
    </Card>
  );
}

export default TbillsAndBonds;
