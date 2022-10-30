import { classNames } from "./utils";
import * as React from "react";

type SVGComponent = React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonIconLeading = SVGComponent;
type ButtonIconTrailing = SVGComponent;
type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

export type ButtonProps = {
  variant: ButtonVariant;
  IconLeading?: ButtonIconLeading;
  IconTrailing?: ButtonIconTrailing;
  size: ButtonSize;
  children: React.ReactNode;
};

interface buttonClassesProps extends ButtonProps {
  icon: boolean;
}

export function buttonClasses({ variant, size, icon }: buttonClassesProps) {
  return classNames(
    "inline-flex items-center rounded shadow-sm border",

    // Variant
    variant === "primary" &&
      "bg-indigo-600 text-white border-transparent hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
    variant === "secondary" &&
      "bg-indigo-100 text-indigo-700 border-transparent hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
    variant === "outline" &&
      "bg-transparent text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",

    // Size
    size === "xs" && !icon && "px-2.5 py-1.5 text-xs",
    size === "sm" && !icon && "px-3 py-2 text-sm",
    size === "md" && !icon && "px-4 py-2 text-sm",
    size === "lg" && !icon && "px-4 py-2 text-base",
    size === "xl" && !icon && "px-6 py-3 text-base",

    size === "xs" && icon && "px-3 py-2 text-xs",
    size === "sm" && icon && "px-4 py-2 text-sm",
    size === "md" && icon && "px-4 py-2 text-sm",
    size === "lg" && icon && "px-4 py-2 text-base",
    size === "xl" && icon && "px-6 py-3 text-base"
  );
}

export function iconClasses({
  size,
  leading,
}: {
  size: ButtonSize;
  leading: boolean;
}) {
  return classNames(
    // Size
    size === "xs" && leading && "-ml-0.5 mr-2 h-4 w-4",
    size === "sm" && leading && "-ml-1 mr-2 h-5 w-5",
    size === "md" && leading && "-ml-1 mr-3 h-5 w-5",
    size === "lg" && leading && "-ml-1 mr-3 h-5 w-5",
    size === "xl" && leading && "-ml-1 mr-3 h-6 w-6",

    size === "xs" && !leading && "ml-2 -mr-0.5 h-4 w-4",
    size === "sm" && !leading && "ml-2 -mr-1 h-5 w-5",
    size === "md" && !leading && "ml-3 -mr-1 h-5 w-5",
    size === "lg" && !leading && "ml-3 -mr-1 h-5 w-5",
    size === "xl" && !leading && "ml-3 -mr-1 h-6 w-6"
  );
}

export const Button = ({
  variant = "primary",
  IconLeading,
  IconTrailing,
  children,
  size = "xs",
}: ButtonProps) => {
  return (
    <button
      className={buttonClasses({
        variant,
        children,
        size,
        icon: IconLeading || IconTrailing ? true : false,
      })}
    >
      {IconLeading && (
        <IconLeading
          className={iconClasses({ size, leading: true })}
          aria-hidden="true"
        />
      )}
      {children}
      {IconTrailing && (
        <IconTrailing
          className={iconClasses({ size, leading: false })}
          aria-hidden="true"
        />
      )}
    </button>
  );
};
