import type { SVGProps } from "react";
const SvgCheckedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 12 10"
    {...props}
  >
    <path
      stroke="#F9FAFB"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1 5.8 3.857 9 11 1"
    />
  </svg>
);
export default SvgCheckedIcon;
