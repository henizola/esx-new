import { StaticImageData } from "next/image";

interface BannerProps {
  backgroundImage: StaticImageData;
  title: string;
  description?: string;
}

const Banner: React.FC<BannerProps> = ({
  backgroundImage,
  title,
  description,
}) => {
  const bannerStyle = {
    backgroundImage: `url(${backgroundImage.src})`,
    backgroundSize: "cover",

    width: "100vw",
  };

  return (
    <div
      className='h-[20vh] md:h-[40vh]  lg:h-[60vh] mt-0  relative'
      style={bannerStyle}
    >
      <div className='absolute inset-0 bg-light-blue '></div>
      <div className='absolute inset-0 flex items-center justify-center text-white'>
        <div className='md:px-14 lg:px-28 mt-5  w-[100%]'>
          <h1 className='text-center text-3xl md:text-4xl ld:text-5xl  w-[100%] font-bold md:text-left text-white-900'>
            {title}
          </h1>
          <p className=' hidden md:flex text-sm mt-8 font-light w-[100%] lg:w-[50%] leading-6  text-left'>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
