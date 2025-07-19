"use client";

import type React from "react";

import { useTransition } from "react";
import { Loader2 } from "lucide-react";

interface TabButtonProps {
  onClick?: () => void;
  variant?:
    | "default"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "destructive";
  className?: string;
  children: React.ReactNode;
}

const TabButton = ({
  onClick,
  variant = "default",
  className = "",
  children,
  ...rest
}: TabButtonProps) => {
  // use transition always going to return to two things is pending and start transition

  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    if (onClick) {
      startTransition(() => {
        onClick();
      });
    }
  };

  const getVariantClasses = (variant: string) => {
    switch (variant) {
      case "default":
        return "bg-blue-600 text-white hover:bg-blue-700 border-blue-600";
      case "outline":
        return "bg-transparent text-blue-600 border-blue-600 hover:bg-blue-50";
      case "secondary":
        return "bg-gray-200 text-gray-900 hover:bg-gray-300 border-gray-200";
      case "ghost":
        return "bg-transparent text-gray-700 hover:bg-gray-100 border-transparent";
      default:
        return "bg-blue-600 text-white hover:bg-blue-700 border-blue-600";
    }
  };

  if (isPending) {
    return (
      <button
        disabled
        className={`inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md border transition-colors duration-200 cursor-not-allowed opacity-50 bg-gray-100 text-gray-500 border-gray-300 ${className}`}
        {...rest}
      >
        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
        Loading...
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${getVariantClasses(
        variant
      )} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default TabButton;
