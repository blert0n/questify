import { useMediaQuery } from "@chakra-ui/media-query";
const breakpoints: Record<string, string> = {
  xxs: "480px",
  xs: "576px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

const breakpointsArr = new Set(Object.keys(breakpoints));

export const useMediaScreen = (unit: string) => {
  const mediaQuery = breakpointsArr.has(unit) ? breakpoints[unit] : unit;

  return useMediaQuery(`(min-width: ${mediaQuery})`, {
    ssr: true,
    fallback: false,
  });
};
