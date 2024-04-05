import { InputHTMLAttributes, PropsWithChildren } from "react";

type InputProps = PropsWithChildren & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ ...props }: InputProps) => {
  return <input {...props} />;
};
