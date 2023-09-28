import { StaticImageData } from "next/image";

interface BannerProps {
  backgroundImage: StaticImageData;
  title: any;
  description?: string;
  contentCenter?: boolean;
}

const Banner: React.FC<BannerProps> = ({
  backgroundImage,
  title,
  description,
  contentCenter,
}) => {
  const bannerStyle = {
    backgroundImage: `url(${backgroundImage.src})`,
    backgroundSize: "cover",
    height: "60vh",
    width: "100vw",
  };

  return (
    <div className="h-10vh mt-0  relative" style={bannerStyle}>
      <div className="absolute inset-0 bg-light-blue "></div>
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <div
          className={`px-28 mt-5  w-[100%] ${
            contentCenter && "flex flex-col items-center"
          }`}
        >
          <h1 className="text-5xl font-bold text-left text-white-900">
            {title}
          </h1>
          <p className=" text-sm mt-8 font-light w-[50%] leading-6  text-left">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
