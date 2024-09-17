import type { SVGProps } from "react";
const SvgFullScreenIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 11 11"
    {...props}
  >
    <path
      stroke="#FFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 1h3m0 0v3m0-3L6.5 4.5M4 10H1m0 0V7m0 3 3.5-3.5"
    />
  </svg>
);
export default SvgFullScreenIcon;
