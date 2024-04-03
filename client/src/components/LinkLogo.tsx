import { Logo, LogoProps } from "./Logo";

type LinkLogoProps = {
  link: string;
} & LogoProps;

export const LinkLogo = ({ link, ...props }: LinkLogoProps) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Logo {...props}></Logo>
    </a>
  );
};
