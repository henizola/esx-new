import React from "react";

const FlipCard: React.FC = () => {
  return (
    <div className='flex min-h-screen flex-col justify-center bg-slate-10'>
      <div className='group h-96 w-96 perspective-1000'>
        <div className='relative h-full w-full rounded-xl shadow-xl transform-style:preserve-3d group-hover:transform:rotateY(180deg)'>
          <img
            className='h-full w-full rounded-xl object-cover shadow-xl shadow-black/40'
            src='https://images.unsplash.com/photo-1562583489-bf23e'
            alt='Your Image'
          />
        </div>
        <div className='absolute inset-0 h-full w-full rounded-xl bg-black px-12 text-center text-slate-200'>
          <div>some Content here</div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
