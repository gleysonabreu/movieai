import { CircleNotch } from "@/components/phosphor-icons";
import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  isLoading?: boolean;
  variant?: "purple-pink" | "gray";
};

export function Button({
  children,
  isLoading,
  variant = "purple-pink",
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "flex items-center justify-center px-4 py-2 gap-2 rounded-lg disabled:cursor-not-allowed transition-all ",
        {
          "bg-gradient-to-r text-white from-brand-purple to-brand-pink hover:from-brand-purple-light hover:to-brand-pink-light disabled:from-brand-purple-light disabled:to-brand-pink-light":
            variant === "purple-pink",
          "bg-brand-gray text-white hover:bg-brand-gray-medium disabled:bg-brand-gray-medium":
            variant === "gray",
        }
      )}
    >
      {isLoading ? (
        <div className="flex items-center justify-center w-8 h-8 rounded-full shrink-0 bg-white bg-opacity-20">
          <CircleNotch size={18} className="animate-spin" />
        </div>
      ) : (
        children
      )}
    </button>
  );
}
