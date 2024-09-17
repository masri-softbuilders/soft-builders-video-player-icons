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
var SvgPlayIcon = function (props) { return (_jsx("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 13 15" }, props, { children: _jsx("path", { stroke: "#fff", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "m1.37 1 10.11 6.5L1.37 14z" }) }))); };
export default SvgPlayIcon;
