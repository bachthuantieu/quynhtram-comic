import { InputHTMLAttributes } from "react";
import classNames from "utils/classNames";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ name, className, ...props }: InputProps) => {
  return (
    <input
      id={name}
      name={name}
      className={classNames(
        "rounded outline-none focus:border-gray-600 w-full h-[46px] px-4 border border-gray-400",
        className
      )}
      {...props}
    />
  );
};

export default Input;
