import Link from "next/link";
import { ReactNode } from "react";

interface LinkButtonProps {
  children: string | ReactNode;
  className?: string;
  href: string;
}

export default function LinkButton({ className, href, children }: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`mt-auto gap-4 items-center flex text-base capitalize ${className}`}
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </Link>
  );
}