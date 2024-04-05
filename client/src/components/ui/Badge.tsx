import { Logo, LogoProps } from "../Logo";

type BadgeProps = {
  value: string;
} & LogoProps;

export const Badge = ({ value, ...props }: BadgeProps) => {
  return (
    <span className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700">
      <Logo {...props}></Logo>
      <p className="whitespace-nowrap text-sm">{value}</p>
    </span>
  );
};
