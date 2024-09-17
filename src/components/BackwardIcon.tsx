import type { SVGProps } from "react";
const SvgBackwardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 15"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 2.16v4m0 0h4m-4 0 3.093-2.906a6 6 0 1 1-1.42 6.24"
    />
  </svg>
);
export default SvgBackwardIcon;
