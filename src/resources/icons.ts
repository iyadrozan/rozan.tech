import { IconType } from "react-icons";

import { HiEnvelope } from "react-icons/hi2";
import { FaGithub, FaLinkedin, FaThreads, FaInstagram, FaCat } from "react-icons/fa6";

export const iconLibrary: Record<string, IconType> = {
  email: HiEnvelope,
  github: FaGithub,
  linkedin: FaLinkedin,
  threads: FaThreads,
  instagram: FaInstagram,
  cat: FaCat
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;