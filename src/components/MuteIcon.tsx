import type { SVGProps } from "react";
const SvgMuteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 17 13"
    {...props}
  >
    <path fill="#FFF" d="M7.925 1.5 4.59 4.357H1.925v4.286H4.59L7.925 11.5z" />
    <path
      stroke="#E5E7EB"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m15.925 4.357-4 4.286m0-4.286 4 4.286m-8-7.143L4.59 4.357H1.925v4.286H4.59L7.925 11.5z"
    />
  </svg>
);
export default SvgMuteIcon;
