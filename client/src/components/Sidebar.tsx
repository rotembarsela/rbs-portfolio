import Profile from "@/assets/profile.webp";
import LinkedinIcon from "@/assets/linkedin-logo.svg?react";
import GithubLogo from "@/assets/github-logo.svg?react";
import FacebookLogo from "@/assets/facebook-logo.svg?react";
import { LinkLogo } from "./LinkLogo";
import { SideBarLinks } from "./SideBarLinks";
import { data } from "@/lib/data";
import { DarkModeToggler } from "./DarkModeToggler";

export const Sidebar = () => {
  return (
    <section className="w-full h-full flex flex-col items-center justify-between px-8 py-12">
      <div className="w-3/4 flex flex-col items-center gap-12">
        <img
          src={Profile}
          alt="profile"
          className="w-14 h-[82px] select-none rounded-lg shadow-lg"
          draggable={false}
        />
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-xl">Rotem Bar-Sela</h3>
          <span className="text-neutral-500">Full Stack Developer</span>
        </div>
        <div className="w-full flex items-center justify-center gap-7">
          <LinkLogo
            svgIcon={LinkedinIcon}
            link={import.meta.env.VITE_LINKEDIN_URL}
          />
          <LinkLogo
            svgIcon={GithubLogo}
            link={import.meta.env.VITE_GITHUB_URL}
          />
          <LinkLogo
            svgIcon={FacebookLogo}
            link={import.meta.env.VITE_FACEBOOK_URL}
          />
        </div>
        <SideBarLinks links={data.sideBarLinks} />
      </div>
      <DarkModeToggler />
    </section>
  );
};
