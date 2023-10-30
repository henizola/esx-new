import React from "react";
import Link from "next/link";
export interface BannerProps {
  backgroundUrl: string;
  heading: string;
  buttonText: string;
  link: string;
}
export const GoldBanner: React.FC<BannerProps> = ({
  backgroundUrl,
  heading,
  buttonText,
  link,
}) => {
  return (
    <div className='relative h-64'>
      <img src={backgroundUrl} alt='' className='w-full h-full object-cover' />
      <div className='absolute top-0 left-0 bg-primary-golden/80 w-full h-full  flex items-center justify-center '>
        <div className='w-full max-w-6xl flex justify-between'>
          <h1 className='text-3xl font-[500] text-left text-white'>
            {heading}
          </h1>
          <Link
            className='px-5 py-2 min-w-fit h-fit rounded-full bg-white text-primary-golden capitalize'
            href={link}
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};
