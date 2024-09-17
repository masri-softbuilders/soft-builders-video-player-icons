import type { SVGProps } from "react";
const SvgPlayIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 13 15"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m1.37 1 10.11 6.5L1.37 14z"
    />
  </svg>
);
export default SvgPlayIcon;
