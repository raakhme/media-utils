import { createMediaBreakpoints } from "./createMediaBreakpoints";
export * from "./useMediaQuery";

export const media = createMediaBreakpoints({
  xs: 480,
  lg: 1200
});
