'use client';
import { CircleNotch } from "@phosphor-icons/react";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  isLoading?: boolean;
}

export function Button({ children, isLoading,...rest }: ButtonProps) {
  return (
    <button
    {...rest}
    className="flex items-center justify-center px-4 py-2 gap-2 rounded-lg transition-all bg-gradient-to-r from-brand-purple to-brand-pink hover:from-brand-purple-light hover:to-brand-pink-light disabled:cursor-not-allowed disabled:from-brand-purple-light disabled:to-brand-pink-light">
      {isLoading ? (
        <div className="flex items-center justify-center w-8 h-8 rounded-full shrink-0 bg-white bg-opacity-20">
          <CircleNotch size={18} className="animate-spin" />
        </div>
      ) : children}
    </button>
  );
}
