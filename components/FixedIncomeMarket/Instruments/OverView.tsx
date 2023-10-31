import Card from "../../Card/Card";

function OverView() {
  return (
    <div>
      <Card width='flex flex-col  w-full h-full mt-0'>
        <div className=' w-full h-full'>
          <h1 className='text-header border-b-[3px]  border-light-golden w-fit text-left mx-10 py-5 pb-0   font-normal '>
            Overview
          </h1>
        </div>
        <div className='flex h-full pb-5'>
          <div className='min-h-full bg-white pt-0 px-10 flex flex-col justify-between  '>
            <div>
              <p className={` py-5 text-paragraphSmall   font-light `}>
                Fixed income instruments such as government and corporate bonds
                are assets that can be traded by investors on the secondary
                market at the ESX. There are a diverse set of financial market
                instruments that fall within the fixed income space that cater
                to the unique risk preferences and time horizons of different
                investors. Short-term debt securities such as federal government
                Treasury Bills are considered to be very safe low-risk
                investments
              </p>
            </div>
          </div>
          {/* <div className='min-w-[38%] min-h-full '>
          <Image
            height={200}
            width={200}
            src={tbills.src}
            alt='tbills'
            className='w-[100%] h-[100%] object-fill '
          />
        </div> */}
        </div>
      </Card>
    </div>
  );
}

export default OverView;
