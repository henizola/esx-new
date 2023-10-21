import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ReactNode, useState } from "react";

interface ExpandableCardProps {
  question: string;
  className?: string;
  children: string | ReactNode;
}

export default function ExpandableCard({
  question,
  children,
  className,
}: ExpandableCardProps) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={` ${
        open ? "bg-gray/10 " : " "
      }  px-[20px] pt-[12px]  flex flex-col gap-4 transition-all   ${className}`}
    >
      <div className='rounded flex justify-between items-center'>
        <h1 className='text-black text-paragraphSmall not-italic font-normal leading-[normal] '>
          {question}
        </h1>
        <ChevronDownIcon
          onClick={() => setOpen((prev) => !prev)}
          className={`w-10 h-10 p-2 rounded-full hover:bg-white/80 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>
      {open && <span className='pb-[52px]'>{children}</span>}
    </div>
  );
}
