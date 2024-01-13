import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const htmlToText = (html: string) => {
  return new DOMParser().parseFromString(html, "text/html").documentElement
    .textContent;
};
