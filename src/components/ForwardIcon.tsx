import type { SVGProps } from "react";
const SvgForwardIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.85 2.165v4m0 0h-4m4 0L11.764 3.26a6 6 0 1 0 1.413 6.24"
    />
  </svg>
);
export default SvgForwardIcon;
