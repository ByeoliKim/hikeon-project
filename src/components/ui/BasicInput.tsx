import { forwardRef, InputHTMLAttributes } from "react";
import clsx from "clsx";

interface BasicInputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const BasicInput = forwardRef<HTMLInputElement, BasicInputProps>(
  ({ leftIcon, rightIcon, className, ...props }, ref) => {
    return (
      <div
        className={clsx(
          "relative flex items-center rounded-md bg-neutral-100 px-4 py-3.5",
          "focus-within:ring-2 focus-within:ring-primary-500",
          className,
        )}
      >
        {leftIcon && <div className="mr-2">{leftIcon}</div>}

        <input
          ref={ref}
          className="flex-1 bg-transparent outline-none text-sm placeholder:text-neutral-400"
          {...props}
        />

        {rightIcon && <div className="ml-2">{rightIcon}</div>}
      </div>
    );
  },
);

BasicInput.displayName = "BasicInput";

export default BasicInput;
