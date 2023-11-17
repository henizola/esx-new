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
                Raising debt capital on ESX allows both the public sector and
                corporations access to a wider pool of investors to raise
                capital efficiently in a regulated market. Debt capital markets
                provide governments with a sustainable means to finance
                budgetary needs as well as invest in productivity boosting long
                term infrastructure projects that tend to benefit the general
                population in the long run through the issuance of government
                bonds.
              </p>
              <p className={` py-5 text-paragraphSmall   font-light pt-0`}>
                Corporations issue bonds to the public in the fixed income
                market to raise capital for their operations and long-term
                capital expenditures as an alternative to issuing equity and
                without having to pledge collateral. Effective debt markets are
                especially useful for companies when high-cost, large-scale
                projects that are traditionally long term - and usually out of
                scope for bank loans - need financing. Additionally, the
                presence of an organized fixed income market adds another
                funding option for firms in addition to listing equity shares
                and can help improve their capital structure through an optimal
                mix of debt and equity to minimize the cost of capital while
                enhancing shareholder value.
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
