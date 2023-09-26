import bg from '../../public/images/bg.jpg'
import Image from 'next/image'

const data = [
  { text: 'Lorem', number: '2,340', percentage: '0.75%' },
  { text: 'Lorem', number: '2,340', percentage: '0.75%' },
  { text: 'Lorem', number: '2,340', percentage: '0.75%' },
  { text: 'Lorem', number: '2,340', percentage: '0.75%' },
  { text: 'Lorem', number: '2,340', percentage: '0.75%' },
  { text: 'Lorem', number: '2,340', percentage: '0.75%' },
  { text: 'Lorem', number: '2,340', percentage: '0.75%' },
  { text: 'Lorem', number: '2,340', percentage: '0.75%' },
  { text: 'Lorem', number: '2,340', percentage: '0.75%' },
];

export default function HomePage() {
  return (
  
    <main className="relative">
      <div className='relative'>
        <Image src={bg.src} alt="bg" layout="responsive" width={1440} height={600} />
        <div className="absolute top-0 left-0 w-full h-full text-white font-open-sans font-semibold text-4xl text-center flex items-center justify-center">
          Attracting new issuers and investors to the market
        </div>
      </div>
    <div className="w-full h-15 bg-[#00205B] flex-shrink-0">
      <div className=" font-open-sans text-12 flex overflow-hidden p-5 space-x-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="ml-4 w-40 whitespace-nowrap space-x-2"
          >
            <span className='font-semibold text-white'>{item.text}</span>
            <span className='text-white font-light'>{item.number}</span>
            <span className='text-red-600'>{item.percentage}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none" className="fill-[#FF004F] animate-marquee">
          <path d="M5.5 9L10.2631 0.75H0.73686L5.5 9Z" fill="#FF004F" />
        </svg>
          </div>
        ))}
        
        
      </div>

      <div className='w-full h-50 bg-white p-20'>
          <h1 className='text-black font-sans text-3xl font-normal leading-normal'>Market Summary</h1>
          <div className='py-10 flex-row space-x-20'>
            <span>Total Markets</span>
            <span>Equity Markets</span>
            <span>Fixed income Markets</span>
            <span>Alternative & Growth Markets</span>
            <span>Share Index</span>
          </div>
          
          <div className='font-open-sans text-12 flex w-300 overflow-hidden'>
              {data.map((item,index)=>(
                <div
                key={index}
                className="ml-2 w-40 whitespace-nowrap space-x-1   text-xs">
                  <span>{item.number}</span>
                  <span className='text-red-600 font-semibold'>{item.percentage}</span>
                </div>
              ))}
          </div>
          <div className='text-right pr-10 pt-5 font-bold'>
            View All
          </div>
              
      </div>
    </div>
     
      
  </main>
    
  );
}