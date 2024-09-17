import type { SVGProps } from "react";
const SvgLeftArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 6 11"
    {...props}
  >
    <path
      stroke="#FFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m5 9.97-4-4 4-4"
    />
  </svg>
);
export default SvgLeftArrowIcon;
