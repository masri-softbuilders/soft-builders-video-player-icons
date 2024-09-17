var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
var SvgFullScreenIcon = function (props) { return (_jsx("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 11 11" }, props, { children: _jsx("path", { stroke: "#E5E7EB", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M7 1h3m0 0v3m0-3L6.5 4.5M4 10H1m0 0V7m0 3 3.5-3.5" }) }))); };
export default SvgFullScreenIcon;
